import React from 'react';
import {ButtonWrapper} from './style';
import {FacebookIcon, GoogleIcon} from '../../assets/icon';

function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
}
const SocialButton = ({type}) => {
  return (
    <ButtonWrapper type={type}>
      {renderIf(type === 'facebook', <FacebookIcon />)}
      {renderIf(type === 'google', <GoogleIcon />)}
    </ButtonWrapper>
  );
};

export default SocialButton;
