import React from 'react';
import PropTypes from 'prop-types';
import {
    compose,
    setPropTypes,
    onlyUpdateForPropTypes,
    withStateHandlers,
    defaultProps
} from 'recompose';
import CssModuleNameTag from 'utils/CssModuleNameTag';
import styles from './styles.scss';

const cssModules = new CssModuleNameTag(styles)

const TextBox = ({ disabled, maxLength, placeHolder, onTextChanged, onLostFocused }) => {
    return <input
        type="password"
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeHolder}
        onChange={onTextChanged}
        onBlur={onLostFocused}
    />
}

export default compose(
    onlyUpdateForPropTypes,
    setPropTypes({
        caption: PropTypes.string,
        value: PropTypes.string,
        required: PropTypes.bool,
        placeHolder: PropTypes.string,
        onChanged: PropTypes.func,
    }),
    defaultProps({
        value: '',
    }),
    withStateHandlers(
        // map props to states
        ({ value, required }) => ({ value, required }),
        {
            // handler text changed events
            onTextChanged: (state, props) => (e) => {
                if (props.onChanged) {
                    props.onChanged(e.target.value)
                }
                if (state.required === false || state.required === true) {
                    return {
                        ...state,
                        value: e.target.value,
                        error: (e.target.value || '').trim().length === 0,
                    }
                }
                return { ...state, value: e.target.value }
            },
            onLostFocused: (state, props) => (e) => {
                if (state.required === false || state.required === true) {
                    return {
                        ...state,
                        value: e.target.value,
                        error: props.message || (e.target.value || '').trim().length === 0,
                    }
                }
            },
        }
    ),
)(function TextField(props) {
    const {
        caption,
        value,
        placeHolder,
        disabled,
        required,
        error,
        maxLength,
        message,
        type,
        onTextChanged,
        onLostFocused,
        onEnter,
        children,
        ...restProps
    } = props
    let field = '';
    switch (type) {
        case 'password':
            field = TextBox(props)
      break;
        case 'area':
            field = <textarea
                disabled={disabled}
                maxLength={maxLength}
                value={value}
                placeholder={placeHolder}
                onChange={onTextChanged}
                onBlur={onLostFocused}
            />
            break;
        default:
            field = <input
                type="text"
                disabled={disabled}
                maxLength={maxLength}
                value={value}
                placeholder={placeHolder}
                onChange={onTextChanged}
                onBlur={onLostFocused}
            />
            break;
    }
    return (
        <div className={cssModules`root`} required={error} {...restProps}>
            <label htmlFor="input" >
                {caption}
                {required && caption && <span>•</span>}
            </label>
            <div>
                {children}
                {field}
            </div>
            {message && <p>{message}</p>}
        </div>
    );
})
