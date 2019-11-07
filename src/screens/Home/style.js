import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-weight: bold;
  letter-spacing: 0;
  color: ${({theme}) => theme.color.green};
  opacity: 1;
`;

export const Logo = styled.Image`
  height: 47px;
  align-items: center;
  justify-content: center;
  resize-mode: contain;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  margin-bottom: 39.11px;
`;
