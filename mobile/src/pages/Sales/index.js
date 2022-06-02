import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
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

export default function Sales({ navigation }) {
  const [lastUpdate, setLastUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    async function loadSales() {
      setLastUpdate(null);
      await Api.get('sale')
      .then(data => {
        const response = JSON.parse(data.request._response);
        setMonth(response.map(e => { return e.mes }));
        setTotal(response.map(e => { return e.total }));
        setLastUpdate(FormatDate(response[0].updatedAt));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
    }

    loadSales();
  }, []);

  return (
    <Container>
      <Header />
      <Tabs navigation={navigation} />
      <Content>
        <Card>
          <CardHeader>
            <Title> Gráfico de venda por mês </Title>
          </CardHeader>
          <CardContent>
            { loading
            ? <ActivityIndicator size="large" color="#5A68E6" />
            : <LineChart labels={month} data={total} /> }
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
