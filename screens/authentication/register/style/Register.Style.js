import styled from 'styled-components';
import {buttons, typography, layout, inputs} from '../../../../constants';

const {PrimaryButton, ButtonText, SecondaryButton} = buttons;
const {MainTitle} = typography;
const {BackgroundImage, InputContainer, ButtonsContainer} = layout;
const {InputStyle} = inputs;



const RegisterHeading = styled(MainTitle)`
  margin-bottom: 20px;

`;

const LoginButton = styled(PrimaryButton)`
  min-width: 93%;

`;

const LoginText = styled(ButtonText)`
  color: #ffffff;
`;

const HaveAccount = styled.Text`
color:#F6F9FC;
font-size:15px;
font-family:"Poppins-Regular"
margin-bottom:5px

`;

const RegisterButton = styled(SecondaryButton)`
  min-width: 93%;
  margin-bottom:15px

`;

const RegisterText = styled(ButtonText)`
  color: #373f50;
`;

export default {
  LoginText,
  RegisterHeading,
  LoginButton,
  RegisterButton,
  RegisterText,
  HaveAccount,
  BackgroundImage,
  InputContainer,
  ButtonsContainer,
  InputStyle
};
