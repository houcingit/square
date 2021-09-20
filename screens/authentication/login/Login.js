import React from 'react';
import LoginStyle from './style/Login.style';
import {icons, images} from '../../../constants';
import {Input} from 'react-native-elements';
import {Image} from 'react-native';

const {introBackground} = images;

const {
  LoginHeading,
  LoginButton,
  LoginText,
  RegisterButton,
  RegisterText,
  NoAccount,
  BackgroundImage,
  InputContainer,
  ButtonsContainer,
  InputStyle,
} = LoginStyle;

const Login = ({navigation}) => {
  return (
    <BackgroundImage source={introBackground}>
      <LoginHeading>Connectez-vous.</LoginHeading>
      <InputContainer>
        <Input
          inputContainerStyle={InputStyle}
          placeholder="E-mail"
          placeholderTextColor={'#97AABD'}
          leftIcon={<Image source={icons.profile} />}
        />
        <Input
          textContentType={'password'}
          inputContainerStyle={InputStyle}
          placeholder="Mot de pass"
          placeholderTextColor={'#97AABD'}
          leftIcon={<Image source={icons.lock} secureTextEntry={true} />}
          secureTextEntry={true}
        />
      </InputContainer>
      <ButtonsContainer>
        <LoginButton
          onPress={() => navigation.navigate('Tabs', {name: 'Tabs'})}>
          <LoginText>connexion</LoginText>
        </LoginButton>
        <NoAccount>vous n'avez pas encore de compte?</NoAccount>
        <RegisterButton
          onPress={() => navigation.navigate('Register', {name: 'Register'})}>
          <RegisterText>S'inscrire</RegisterText>
        </RegisterButton>
      </ButtonsContainer>
    </BackgroundImage>
  );
};

export default Login;
