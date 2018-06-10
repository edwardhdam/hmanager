import React from 'react';
import Logo from '/components/shared/atoms/Logo';
import InputField from '/components/shared/atoms/InputField';
import Button from '/components/shared/atoms/Button';
import CssModuleNameTag from 'utils/CssModuleNameTag';
import styles from './styles.scss';

const cssModules = new CssModuleNameTag(styles)

export function License({ onButtonClicked }) {
  return (
    <div className={cssModules`root`}>
      <Logo theme='dark'/>
      <div part='sub-title'>
        <span>Continue </span>
        <small>with </small>
        Yours License
      </div>
      <div part='form'>
        <InputField
          required
          value='c2c2a78f-adca-43d0-8fa7-1ff3963d509b'
          placeHolder='License'
        >
        </InputField>
      </div>
      <p>How <small>to get</small> this One? <small>Let's contact us by Email.</small></p>
      <div part='function'>
        <div className={cssModules`error`}>
        </div>
        <Button caption='NEXT' theme='primary' onButtonClick={() => onButtonClicked(1)} />
      </div>
    </div>
  );
}

export function Login({ clientName, onButtonClicked }) {
  return (
    <div className={cssModules`root`}>
      <Logo theme='dark'/>
      <div part='sub-title'>
        <span>Sign In </span>
        <small>to </small>
        {clientName}
      </div>
      <div part='form'>
        <InputField
          required
          error
          placeHolder='ID'
          message='Please enter yours ID.'
        >
        </InputField>
        <div part='row-spacing'/>
        <InputField
          type='password'
          required
          error
          placeHolder='Password'
          message='Please enter yours Password.'
        >
        </InputField>
      </div>
      <p>Problems <small>when</small> Sign In? <small>Contact us now.</small></p>
      <div part='function'>
        <div className={cssModules`error`}>
          <strong>ID</strong> or <strong>PASSWORD</strong > is <strong>NOT</strong> correct.
        </div>
        <Button caption='NEXT' theme='primary' onButtonClick={() => onButtonClicked(2)} />
      </div>
    </div>
  );
}