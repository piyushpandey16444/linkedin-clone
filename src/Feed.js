import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            <Post name="Piyush Pandey" description="Python developer | Django and REST Framework | AZURE | Odoo ERP |" message="Congratulate Sachit for starting a new position as Co-Founder at JAG Infra
" photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQF_O2eW8bGQIQ/profile-displayphoto-shrink_100_100/0/1607933987497?e=1615420800&v=beta&t=2Bc3VojBElbQKcC6eEpcVqTU_F5MG75iOVaXvOBIW0g"/>

        </div>
    )
}

export default Feed
