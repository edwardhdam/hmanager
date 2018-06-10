import React from 'react';
import CssModuleNameTag from 'utils/CssModuleNameTag';
import styles from './styles.scss';

const cssModules = new CssModuleNameTag(styles)

export default function Button({
  caption,
  icon,
  onButtonClick,
  stylesName,
  disabled,
  children,
  ...restProps
}) {
  const isNoCaption = caption ? 'false' : 'true';
  return (
    <div className={cssModules`root`} theme={stylesName} no-caption={isNoCaption} {...restProps}>
      <button type="button" roles="presentation" onClick={onButtonClick} disabled={disabled}>
        {caption}
        {children}
      </button>
    </div>
  );
}
