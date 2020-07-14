import React from 'react';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home = () => {
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

        <BalanceContainer>
          <BalanceTitle>Meu saldo</BalanceTitle>
          <Balance>R$ 10,00</Balance>
        </BalanceContainer>
        <AntDesign name="gift" size={30} color="#10c86e" />
      </Header>
      <Container>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
