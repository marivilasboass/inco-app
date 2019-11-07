import styled from 'styled-components/native';

export const StyledHeaderWrapper = styled.View`
  width: 100%;
  height: ${({statusBarHeight}) => statusBarHeight + 48}px;
  padding-top: ${({statusBarHeight}) => statusBarHeight}px;
`;
export const HeaderWrapper = styled.View`
  flex-direction: column;
`;
