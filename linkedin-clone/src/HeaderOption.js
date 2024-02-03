import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

/*properties are essentially things that we can customize and reuse - the "props" is what indicates of that*/
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && (
          <Avatar className="headerOption__icon" src={avatar} />
        )}
        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption