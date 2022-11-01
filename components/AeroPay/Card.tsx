import { FC } from 'react';
import Image from 'next/image';
import { Flex, Icon24x20 } from '../../styles';
import logo from '../../assets/icons/aeropay-2.svg';

import { StyledCard, CardTitle, Data } from './styles';

type Props = {
  name: string;
  expiration: string;
}

export const Card: FC<Props> = ({ name, expiration}) => {
  return (
    <StyledCard className="aback">
      <Flex>
        <CardTitle>Aerocard</CardTitle>
        <Icon24x20>
          <Image layout="fill" src={logo} alt="logo" />
        </Icon24x20>
      </Flex>
      <Flex>
        <Data>{name}</Data>
        <Data>{expiration}</Data>
      </Flex>
    </StyledCard>
  );
};
