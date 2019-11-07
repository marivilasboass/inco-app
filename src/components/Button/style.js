import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
  width: 200px;
  height: 56px;
  background-color: ${({theme}) => theme.color.green};
  justify-content: center;
  align-items: center;
  border-radius: 31px;
  margin-right: 5px;
`;

export const TextWrapper = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily.regular};
  letter-spacing: 0;
  color: ${({theme}) => theme.color.white};
  opacity: 1;
`;
