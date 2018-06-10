import React from 'react';
import Logo from 'components/shared/atoms/Logo';
import Icon from 'components/shared/atoms/Icon';
import CssModuleNameTag from 'utils/CssModuleNameTag';
import styles from './styles.scss';

const cssModules = new CssModuleNameTag(styles)

export default function NavigationBar() {
  return (
    <div className={cssModules`root`}>
      <div part='header'><Logo theme='dark'/></div>
      <div part='info'><small>Welcome, <br/></small>California Hotel</div>
      <div part='menu'>
        <div menu-selected=''><Icon menu-icon='' fontType='material' src='dashboard'/>Dashboard</div>
        <div><Icon menu-icon='' fontType='material' src='calendar'/>Spaces</div>
        <div><Icon menu-icon='' fontType='awsome' src='ellipsis-h'/>Others</div>
      </div>
      <div part='user'>
        <div part='profile'>
          <div part='avatar'>E</div>
            <div>Edward H Dam
              <br/>
              <small>The Administator</small>
            </div>
        </div>
        <div part='action'>
          <div>Profile & Account</div>
          <div>Help</div>
          <div>Sign Out</div>
        </div>
      </div>
    </div>
  );
}