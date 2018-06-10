import React from 'react'
import CssModuleNameTag from 'utils/CssModuleNameTag'
import styles from './styles.scss'

const cssModules = new CssModuleNameTag(styles)

export default function CheckBox({
  children,
  ...restProps
}) {
  return (
    <div className={cssModules`root`}>
      <label roles="wrapper">
        <input type="checkbox" tabIndex="-1" {...restProps} />
        <span roles="checkbox" />
        <span roles="label">{children}</span>
      </label>
    </div>
  );
}
