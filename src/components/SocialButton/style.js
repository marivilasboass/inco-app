import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  background-color: ${({type, theme}) =>
    type === 'facebook' ? theme.color.facebook : theme.color.google};
  border-radius: 50px;
  margin-left: 5px;
`;
