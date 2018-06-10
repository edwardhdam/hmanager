import React from 'react';
import CssModuleNameTag from 'utils/CssModuleNameTag'
import styles from './styles.scss'

const cssModules = new CssModuleNameTag(styles)

const ICONS = new Map([
    ["plus", "plus"],
    ["close", "close"],
    ["angle-down", "angle-down"],
    ["check", "check"],
    ["reply", "reply"],
    ["ellipsis-v", "ellipsis-v"],
    ["ellipsis-h", "ellipsis-h"],
    ["dashboard", "dashboard"],
    ["calendar", "calendar"],
    ["more", "plus-square"]
]);

export default function Icon({
    src,
    fontType,
    onIconClick,
    caption,
    description,
    ...restProps
}) {
    const iconStyle = cssModules(ICONS.get(src) || '');
    return (
        <div className={cssModules`root`} data-type={fontType} onClick={onIconClick} {...restProps}>
            {iconStyle && <span className={iconStyle} />}
            {caption}
        </div>
    );
}