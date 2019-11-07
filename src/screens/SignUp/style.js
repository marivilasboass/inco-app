import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
`;

export const StyledScrollView = styled.View`
  padding-horizontal: ${({theme}) => theme.defaultPadding};
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

export const IconContainer = styled.View`
  align-items: flex-end;
`;

export const InputContainer = styled.View`
  height: 56px;
  background-color: ${({theme}) => theme.color.input};
  border-radius: 28px;
  opacity: 1;
  margin-top: 13.37px;
  padding: 18.2px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'black',
  autoCapitalize: 'none',
  fontFamily: 'Montserrat-Regular',
  underlineColorAndroid: 'transparent',
})`
  text-align: left;
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily.regular};
  letter-spacing: 0;
  color: ${({theme}) => theme.color.black};
  opacity: 0.3;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  margin-top: 22.37px;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  border-width: 0.5px 
  border-style: solid 
  border-color: ${({theme}) => theme.color.black};
  opacity: 0.38;
  margin-top: 34.73px;
`;

export const AccountText = styled.Text`
  text-align: left;
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily.medium};
  letter-spacing: 0;
  color: ${({theme}) => theme.color.black};
  opacity: 1;
`;

export const SingInText = styled.Text`
  text-align: left;
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-weight: bold;
  letter-spacing: 0;
  color: ${({theme}) => theme.color.green};
  opacity: 1;
  margin-left: 9px;
`;
