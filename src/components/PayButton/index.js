import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonWithFeedback, Button, Label } from './styles';

const PayButton = ({ onPress, focused }) => {
  return (
    <ButtonWithFeedback onPress={onPress}>
      <Button
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </ButtonWithFeedback>
  );
};

export default PayButton;
