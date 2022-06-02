import React, {useState, useEffect} from 'react';

import { getToken, login } from '../../services/auth';

import Api from '../../services/api';
import logo from '../../assets/Logo.png';

import {
  Container,
  Title,
  Logo,
  Form,
  Input,
  Button,
  TextButton
} from './styles';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    getToken().then(token => { if (token) navigation.navigate('Sales') })
  }, []);

  async function handleSubmit() {
    await Api.post('/auth', { nome, senha })
    .then(req => { 
      login(req.data.token);
      navigation.navigate('Sales');
    })
    .catch(error => { console.log(error) });
  }

  return (
    <Container behavior="padding">
      <Logo source={logo} />
      <Title>Dataneed</Title>
      <Form>
        <Input
          placeholder="Seu nome"
          placeholderTextColor="#fff"
          autoCapitalize="none"
          autoCorrect={false}
          value={nome}
          onChangeText={setNome}
        />
        <Input
          placeholder="Sua senha"
          secureTextEntry
          placeholderTextColor="#fff"
          autoCapitalize="words"
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
        />
        <Button onPress={handleSubmit}>
          <TextButton>Entrar</TextButton>
        </Button>
      </Form>
    </Container>
  );
}

