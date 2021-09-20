import React from 'react';
import RegisterStyle from './style/Register.Style';
import {icons, images} from '../../../constants';
import {Input} from 'react-native-elements';
import {Image, ScrollView} from 'react-native';

const {introBackground} = images;

const {
  RegisterHeading,
  LoginButton,
  LoginText,
  RegisterButton,
  RegisterText,
  HaveAccount,
  BackgroundImage,
  InputContainer,
  ButtonsContainer,
  InputStyle,
} = RegisterStyle;

const Register = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BackgroundImage source={introBackground}>
        <RegisterHeading>Créer un compte.</RegisterHeading>
        <InputContainer>
          <Input
            inputContainerStyle={InputStyle}
            placeholder="Nom"
            placeholderTextColor={'#97AABD'}
            leftIcon={<Image source={icons.profile} />}
          />
          <Input
            inputContainerStyle={InputStyle}
            placeholder="Prénom"
            placeholderTextColor={'#97AABD'}
            leftIcon={<Image source={icons.profile} />}
          />
          <Input
            inputContainerStyle={InputStyle}
            placeholder="Nom d'utlisateur"
            placeholderTextColor={'#97AABD'}
            leftIcon={<Image source={icons.profile} />}
          />
          <Input
            inputContainerStyle={InputStyle}
            placeholder="Numéro Téléphone"
            placeholderTextColor={'#97AABD'}
            keyboardType="numeric"
            leftIcon={<Image source={icons.phone} />}
          />

          <Input
            textContentType={'emailAddress'}
            inputContainerStyle={InputStyle}
            placeholder="Votre e-mail"
            placeholderTextColor={'#97AABD'}
            leftIcon={<Image source={icons.send} />}
          />
          <Input
            textContentType={'password'}
            inputContainerStyle={InputStyle}
            placeholder="Mot de pass"
            placeholderTextColor={'#97AABD'}
            leftIcon={<Image source={icons.lock} />}
            secureTextEntry={true}
          />
          <Input
            textContentType={'password'}
            inputContainerStyle={InputStyle}
            placeholder="Confirmer Mot de pass"
            placeholderTextColor={'#97AABD'}
            leftIcon={<Image source={icons.lock} />}
            secureTextEntry={true}
          />
        </InputContainer>
        <ButtonsContainer>
          <RegisterButton
            onPress={() => navigation.navigate('Register', {name: 'Register'})}>
            <RegisterText>S'inscrire</RegisterText>
          </RegisterButton>
          <HaveAccount>Vous avez déjà un compte?</HaveAccount>
          <LoginButton    onPress={() => navigation.navigate('Login', {name: 'Login'})}>
            <LoginText>connexion</LoginText>
          </LoginButton>
        </ButtonsContainer>
      </BackgroundImage>
    </ScrollView>
  );
};

export default Register;
