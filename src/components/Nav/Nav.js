import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
    console.log('heyy',props)
    return (
       <div>
            {props.username}
            <img src={props.profilePic} alt="" srcset=""/>

            <button > <Link to='/dashboard'> Home </Link></button>
            <button><Link to='/new'>New Post </Link></button>
            <button><Link to='/'> Logout</Link></button>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Nav)


