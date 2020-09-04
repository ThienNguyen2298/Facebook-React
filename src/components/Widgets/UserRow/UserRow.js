import React from 'react';
import './UserRow.css';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }))(Badge);
function UserRow({profileSrc, username}) {
    return (
        <div className="userRow">
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar alt="Remy Sharp" src={profileSrc} />
            </StyledBadge>
            <h4>{username}</h4>
        </div>
    )
}

export default UserRow
