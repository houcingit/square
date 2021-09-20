import React from 'react';
import {View, useWindowDimensions} from 'react-native';

// onboarding style
import {
  OnBoardingBackground,
  OnBoardingHeading,
  OnBoardingDescription,
  NextButton,
  NextButtonText,
  LoginButton,
  RegisterButton,
  Logintext,
  Registertext,
} from './style/onBoarding.style';

const OnboardingSlide = ({slide: {item}, scrollToNextSlide, navigation}) => {
  //get screen window
  const {width} = useWindowDimensions();

  return (
    <OnBoardingBackground
      source={item.image}
      resizeMode="cover"
      style={{width: width}}>
      <OnBoardingHeading>{item.title}</OnBoardingHeading>
      <OnBoardingDescription>{item.description}</OnBoardingDescription>
      {item.id !== '5' ? (
        <View>
          <NextButton activeOpacity={0.9} onPress={scrollToNextSlide}>
            <NextButtonText>Suivant</NextButtonText>
          </NextButton>
        </View>
      ) : (
        <View>
          <LoginButton
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Login', {name: 'Login'})}>
            <Logintext>connexion</Logintext>
          </LoginButton>
          <RegisterButton
            onPress={() => navigation.navigate('Register', {name: 'Register'})}>
            <Registertext>S'inscrire</Registertext>
          </RegisterButton>
        </View>
      )}
    </OnBoardingBackground>
  );
};

export default OnboardingSlide;
