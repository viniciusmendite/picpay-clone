import React, { useState } from 'react';
import { StatusBar, Switch, ScrollView } from 'react-native';
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceText,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../assets/images/credit-card.png';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleUseBalance = () => {
    setUseBalance((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
        >
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '10,00' : '----'}</Bold>
              </Value>
              <EyeButton onPress={handleVisible}>
                <Feather
                  name={isVisible ? 'eye' : 'eye-off'}
                  color="#fff"
                  size={28}
                />
              </EyeButton>
            </BalanceContainer>

            <Info>Seu saldo está rendendo 100% do CDI</Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" color="#fff" size={28} />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>
              <Action>
                <FontAwesome name="bank" color="#fff" size={20} />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceText>Usar saldo ao pagar</UseBalanceText>
          <Switch value={useBalance} onValueChange={handleUseBalance} />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                <CardInfo>
                  Cadastre seu cartão de crédito para poder fazer pagamentos
                  mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <Img resizeMode="contain" source={creditCard} />
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" color="#0db060" size={30} />
              <AddLabel>Adicionar cartão de crédito</AddLabel>
            </AddButton>
          </Card>

          <UseTicketContainer>
            <UseTicketButton>
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color="#0db060"
              />
              <UseTicketLabel>Usar código promocional</UseTicketLabel>
            </UseTicketButton>
          </UseTicketContainer>
        </PaymentMethods>
      </ScrollView>
    </Wrapper>
  );
};

export default Wallet;
