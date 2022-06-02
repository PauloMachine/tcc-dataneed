import styled from "styled-components/native";
import { KeyboardAvoidingView } from 'react-native';

export const Logo = styled.Image``;

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #5A68E6;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #fff;
  margin-bottom: 8;
  font-size: 22;
`;

export const Form = styled.View`
  align-self: stretch;
  background-color: #5A68E6;
  padding-horizontal: 30;
  margin-top: 30;
`;

export const Button = styled.TouchableOpacity`
  height: 50;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 25;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16;
`;

export const Input = styled.TextInput`
  border-width: 1;
  border-color: #fff;
  padding-horizontal: 20;
  font-size: 16;
  color: #fff;
  height: 44;
  margin-bottom: 20;
  border-radius: 25;
`;
