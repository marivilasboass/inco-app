import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {
  StyledScrollView,
  Container,
  IconContainer,
  InputContainer,
  Input,
  ActionContainer,
  Line,
  NewAccountText,
  SingUpText,
    Logo,
    LogoContainer,
} from './style';
import {StatusBar, Button, SocialButton} from '../../components';
import {CloseIcon, FacebookIcon, GoogleIcon} from '../../assets/icon';
import api from '../../services/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  setVariable(text, field) {
    if (field === 'email') {
      this.setState({
        email: text,
      });
    } else if (field === 'password') {
      this.setState({
        password: text,
      });
    }
  }

  storeData = async (email, pass) => {
    if (this.state.email === '') {
      Alert.alert('Atenção', 'Por favor preencha o campo email');
    } else if (this.state.pass === '') {
      Alert.alert('Atenção', 'Por favor preencha o campo senha');
    } else {
      let url = api.BASE_URL + api.LOGIN;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: this.state.email,
            password: this.state.pass,
          },
        }),
      })
        .then(response => response.json())
        .then(response => {
          let token = JSON.stringify(response.token);

          AsyncStorage.setItem('token', token);

          console.log(response);
          this.props.navigation.navigate('Home');
        })
        .catch(() => {
          this.setState({
            show: false,
          });
          Alert.alert('Atenção', 'senha incorreta');
        })
        .done();
    }
  };

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
                underlineColorAndroid="transparent"
                placeholder="Email"
                onChangeText={text => this.setVariable(text, 'email')}
              />
            </InputContainer>

            <InputContainer>
              <Input
                underlineColorAndroid="transparent"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => this.setVariable(text, 'password')}
              />
            </InputContainer>
            <ActionContainer>
              <TouchableOpacity>
                <Button title="Login" />
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
              <NewAccountText>Nao possui conta?</NewAccountText>
              <TouchableOpacity onPress={() => this.storeData()}>
                <SingUpText>Cadastrar</SingUpText>
              </TouchableOpacity>
            </ActionContainer>
          </StyledScrollView>
        </Container>
      </>
    );
  }
}
