import React from 'react';
import CssModuleNameTag from 'utils/CssModuleNameTag';
import styles from './styles.scss';

const cssModules = new CssModuleNameTag(styles)

export default function Logo({
  size,
  theme,
  children,
  ...restProps
}) {
  return (
    <div className={cssModules`root`} theme={theme} data-size={size} {...restProps}>
      <div part='symbol'>H</div>
      <div part='presentor'>Manager</div>
    </div>
  );
}