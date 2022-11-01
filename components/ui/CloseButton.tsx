import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Icon from '../../assets/icons/cross-active.svg';
import { Icon24x20 } from '../../styles';

const Button = styled.button`
  transition: all .4s;
  opacity: .8;
    
  &:hover {
    opacity: 1;
    transform: scale(.93);
  }
`;

type Props = {
  onClick: VoidFunction;
}

export const CloseButton: FC<Props> = ({ onClick }) => 
  <Button onClick={onClick}>
    <Icon24x20>
      <Image layout="fill" src={Icon} alt="close" />
    </Icon24x20>
  </Button>