import styled from 'styled-components';

const PrimaryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fe696a;
  border-radius: 3px;
  min-height: 45px;
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: #f6f9fc;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
`;

export default {
  PrimaryButton,
  ButtonText,
  SecondaryButton,
};
