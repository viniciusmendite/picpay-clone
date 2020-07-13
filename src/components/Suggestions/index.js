import React from 'react';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../assets/images/01.png';
import img2 from '../../assets/images/02.png';
import img3 from '../../assets/images/03.png';
import img4 from '../../assets/images/04.png';
import img5 from '../../assets/images/05.png';
import img6 from '../../assets/images/06.png';
import img7 from '../../assets/images/07.png';

const Suggestions = () => {
  return (
    <Container>
      <Option>
        <Img source={img1} />
        <Label>Recarga</Label>
      </Option>
      <Option>
        <Img source={img2} />
        <Label>Uber</Label>
      </Option>
      <Option>
        <Img source={img3} />
        <Label>Transporte</Label>
      </Option>
      <Option>
        <Img source={img4} />
        <Label>Sky</Label>
      </Option>
      <Option>
        <Img source={img5} />
        <Label>Doações</Label>
      </Option>
      <Option>
        <Img source={img6} />
        <Label>Pagamentos</Label>
      </Option>
      <Option>
        <Img source={img7} />
        <Label>Carteira</Label>
      </Option>
    </Container>
  );
};

export default Suggestions;
