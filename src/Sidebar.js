import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4E16AQH6v_J7Z3xhgA/profile-displaybackgroundimage-shrink_200_800/0/1607520158163?e=1615420800&v=beta&t=KdKwW1ZD0UY4PDtla5C4HBP4NpMjWM6EIC-JuNrmFrw" alt=""/>
                <Avatar className='sidebar__avatar'src="https://media-exp1.licdn.com/dms/image/C4E03AQF_O2eW8bGQIQ/profile-displayphoto-shrink_100_100/0/1607933987497?e=1615420800&v=beta&t=2Bc3VojBElbQKcC6eEpcVqTU_F5MG75iOVaXvOBIW0g" />
                <h2>Piyush Pandey</h2>
                <h4>piyush.pandey@arekss.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">50</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">43</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software')}
                {recentItem('developer')}
            </div>            
        </div>
    )
}

export default Sidebar
