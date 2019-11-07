import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  StyledScrollView,
  Container,
  IconContainer,
  InputContainer,
  Input,
  ActionContainer,
  Line,
  AccountText,
  SingInText,
  Logo,
  LogoContainer,
} from './style';
import {StatusBar, Button, SocialButton} from '../../components';
import {CloseIcon} from '../../assets/icon';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  setVariable(text, field) {
    if (field === 'name') {
      this.setState({
        name: text,
      });
    } else if (field === 'email') {
      this.setState({
        email: text,
      });
    } else if (field === 'password') {
      this.setState({
        password: text,
      });
    }
  }

  render() {
    return (
      <>
        <Container>
          <StatusBar />
          <StyledScrollView>
            <IconContainer>
              <CloseIcon />
            </IconContainer>
            <LogoContainer>
              <Logo source={require('../../assets/images/logo.png')} />
            </LogoContainer>
            <InputContainer>
              <Input
                placeholder="Nome"
                onChangeText={text => this.setVariable(text, 'name')}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Email"
                onChangeText={text => this.setVariable(text, 'email')}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => this.setVariable(text, 'password')}
              />
            </InputContainer>
            <ActionContainer>
              <TouchableOpacity>
                <Button title="Criar conta" />
              </TouchableOpacity>
              <TouchableOpacity>
                <SocialButton type="facebook" />
              </TouchableOpacity>
              <TouchableOpacity>
                <SocialButton type="google" />
              </TouchableOpacity>
            </ActionContainer>
            <Line />
            <ActionContainer>
              <AccountText>Já tenho uma conta</AccountText>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SingIn')}>
                <SingInText>Login</SingInText>
              </TouchableOpacity>
            </ActionContainer>
          </StyledScrollView>
        </Container>
      </>
    );
  }
}
