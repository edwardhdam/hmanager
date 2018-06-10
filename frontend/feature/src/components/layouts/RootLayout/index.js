import React from 'react';
import CssModuleNameTag from 'utils/CssModuleNameTag';
import styles from './styles.scss';

const cssModules = new CssModuleNameTag(styles)

export default function RootLayout({ children }) {
  return <div className={cssModules`root`}>{children}</div>
}
