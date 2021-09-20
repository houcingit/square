import styled from 'styled-components';
import {buttons, typography, layout} from '../../../../constants';

const {PrimaryButton, ButtonText, SecondaryButton} = buttons;
const {MainTitle} = typography;
const {BackgroundImage} = layout;

const OnBoardingBackground = styled(BackgroundImage)``;

const OnBoardingHeading = styled(MainTitle)``;

const OnBoardingDescription = styled.Text`
  text-align: center;
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: #f6f9fc;
  margin-bottom: 30px;
`;

const NextButton = styled(PrimaryButton)`
  padding: 0 40px;
`;

const NextButtonText = styled(ButtonText)`
  color: #f6f9fc;
`;

const LoginButton = styled(PrimaryButton)`
  padding: 0 80px;
  margin-bottom: 15px;
`;
const RegisterButton = styled(SecondaryButton)`
  padding: 0 80px;
`;

const Logintext = styled(ButtonText)`
  color: #f6f9fc;
`;

const Registertext = styled(ButtonText)`
  color: #373f50;
`;

export {
  OnBoardingBackground,
  OnBoardingHeading,
  OnBoardingDescription,
  NextButton,
  NextButtonText,
  LoginButton,
  RegisterButton,
  Logintext,
  Registertext,
};
