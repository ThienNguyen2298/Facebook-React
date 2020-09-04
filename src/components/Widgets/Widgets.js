import React from 'react';
import './Widgets.css';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import UserRow from './UserRow/UserRow';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__contact">
                <h3>Contacts</h3>
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <IconButton>
                    <MoreHorizIcon></MoreHorizIcon>
                </IconButton>
            </div>
            <div className="widgets__users">
                <UserRow profileSrc='https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/117599149_1793079370845504_4426101382730024113_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=tnBrv8dduH8AX_luw4x&_nc_ht=scontent.fdad1-1.fna&oh=5a537cae435955d14980b9e0df45adc9&oe=5F73856A'
                username='Hoài Nam'></UserRow>
                <UserRow profileSrc='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/118475024_2695826707295668_7731044129707560831_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=3Fx3rwCKSsYAX--2F1I&_nc_ht=scontent.fhan3-2.fna&oh=40b71042c71ab7256887b42f86ab28c5&oe=5F753B79'
                username='Long Trịnh'></UserRow>
                <UserRow profileSrc='https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/71489520_2406501419561498_6638953192509931520_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=hbS_XaD53xsAX-1FS6B&_nc_ht=scontent.fdad1-1.fna&oh=37a1d3b0dfefe6f2900618177a586f67&oe=5F72D2DA'
                username='Văn Thiên Dwin'></UserRow>
                <UserRow profileSrc='https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/89846900_1372396989628754_1022390705382752256_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=4i6OU4YRVdIAX_-BxJ7&_nc_ht=scontent.fdad2-1.fna&oh=ccb8724f977e5642e4bcdedb7dafb014&oe=5F74EA84'
                username='Đinh Quang Nam'></UserRow>
                <UserRow profileSrc='https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/95626537_276382003521300_6092913307017019392_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=Ur-TyRwdbOwAX83N_-U&_nc_ht=scontent-hkt1-1.xx&oh=2d1b358f48d6b0dad25a70dfb8baff9c&oe=5F768FA3'
                username='Duyên Phận'></UserRow>
                
            </div>
        </div>
    )
}

export default Widgets
