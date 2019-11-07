import React from 'react';
import {StyledHeaderWrapper, HeaderWrapper} from './style';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {StatusBar} from 'react-native';
import {theme} from '../../theme/globalStyle';

const StatusBarConfig = () => {
  return (
    <StyledHeaderWrapper statusBarHeight={getStatusBarHeight(true)}>
      <StatusBar backgroundColor={theme.color.white} barStyle="light-content" />
      <HeaderWrapper />
    </StyledHeaderWrapper>
  );
};

export default StatusBarConfig;
