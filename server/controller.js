const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.check_user(username);
    if (user[0]) {
      res.status(409).send("Username already exists!");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.create_user([username, hash]);

    req.session.user = {
      userId: newUser.user_id,
      username: newUser.username,
    };
    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const [user] = await db.check_user(username);
    if (!user) {
      res
        .status(401)
        .send("Login Failed! Please use the correct usename and password");
    } else {
      const auth = bcrypt.compareSync(password, user.password);
      if (auth) {
        req.session.user = {
          userId: user.user_id,
          username: user.username,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Incorrect Login Information");
      }
    }
  },
};
