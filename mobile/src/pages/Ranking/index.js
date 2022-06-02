import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
import Tabs from '../../components/Tabs';

import FormatDate from '../../utils/formatDate';
import Api from '../../services/api';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title
} from './styles';

export default function Ranking({ navigation }) {
  const [lastUpdate, setLastUpdate] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    async function loadSales() {
      setLastUpdate(null);
      await Api.get('product')
      .then(data => {
        const response = JSON.parse(data.request._response);
        setName(response.map(e => { return e.nome }));
        setTotal(response.map(e => { return e.qtdvenda }));
        setLastUpdate(FormatDate(response[0].updatedAt));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
    }

    loadSales();
  },[]);

  return (
    <Container>
      <Header />
      <Tabs navigation={navigation} />
      <Content>
        <Card>
          <CardHeader>
            <Title> Ranking de produtos mais vendidos </Title>
          </CardHeader>
          <CardContent>
            { loading 
            ? <ActivityIndicator size="large" color="#5A68E6" />
            : <BarChart labels={name} data={total} /> }
          </CardContent>
          <CardFooter>
            { lastUpdate
            ? <Annotation> Última atualização: {lastUpdate} </Annotation>
            : <Annotation> Carregando informação... </Annotation> }
          </CardFooter>
        </Card>
      </Content>
    </Container>
  );
}
