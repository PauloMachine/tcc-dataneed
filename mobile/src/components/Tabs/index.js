import React from "react";
import { TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Container, TabsContainer, TabItem, TabText } from "./styles";

import { logout } from '../../services/auth';

export default function Tabs({ navigation }) {
  async function Logout() {
    await logout();
    await navigation.navigate('Login');
  }

  return (
    <Container>
      <TabsContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
          <TabItem>
            <Icon name="chart-pie" size={24} color="#FFF" />
            <TabText>Venda</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
          <TabItem>
            <Icon name="medal" size={24} color="#FFF" />
            <TabText>Ranking</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Logout()}>
          <TabItem>
            <Icon name="logout-variant" size={24} color="#FFF" />
            <TabText>Sair</TabText>
          </TabItem>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}
