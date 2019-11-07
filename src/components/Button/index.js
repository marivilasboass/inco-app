import React from 'react';
import {ButtonWrapper, TextWrapper} from './style';

const Button = ({title}) => {
  return (
    <ButtonWrapper>
      <TextWrapper>{title}</TextWrapper>
    </ButtonWrapper>
  );
};

export default Button;
