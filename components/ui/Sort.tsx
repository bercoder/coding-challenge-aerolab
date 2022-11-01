import { FC } from 'react';
import { Radio } from './Radio';
import styled from "styled-components";
import { l1DefaultStyle } from '../../styles';

type Props = {
  options: string[];
  select: (el: number | string) => void;
}

const Div = styled.div`
  padding-bottom: 14px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & .radioContainer{
    width: 100%;
  }

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    & .radioContainer{
      width: auto;
      justify-content: flex-start;
      gap: 12px;
    }

    & .radioType{
      width: auto;
    }
  };

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    padding-bottom: 0;
    margin-left: 40px;
    align-self: center; 
    overflow-x: initial;
  }    
`;

const Title = styled.p`
  ${l1DefaultStyle};
  display: none;
  margin-right: 16px;
  white-space: nowrap;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    display: inline-block;
  }
`;

export const Sort: FC<Props> = ({ options, select }) => {
  return (
    <Div>
      <Title>Sort by:</Title>
      <Radio
        values={[...options]}
        select={select}
        title="Sort by $"
        />
    </Div>
  )
}
