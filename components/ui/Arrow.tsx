import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import arrow from '../../assets/icons/chevron-active.svg';
import vector from '../../assets/icons/vector.png';

const Img = styled(Image)`
  transition: all .4s ease-out;

  &.active {
    transform: rotate(-180deg);
  }

  &.chevron {
    transform: rotate(-90deg);

    &.active {
      transform: rotate(90deg);
    }
  }
`;

type Props = {
  open: boolean;
  chevron?: boolean;
};

export const Arrow: FC<Props> = ({ open, chevron = true }) => 
  <Img 
    layout="fixed" 
    width={chevron ? 24 : 8} 
    height={chevron ? 24 : 9}
    className={`${chevron ? 'chevron' : ''} ${open ? 'active' : ''}`} 
    src={chevron ? arrow : vector} alt=">" 
  />