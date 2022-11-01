import { FC, useState, useRef } from 'react';
import styled from 'styled-components';
import { l1DefaultStyle, Button, flexStyle } from '../../styles';
import { CSSTransition } from 'react-transition-group';

import { useClickOutside } from '../../hooks/useClickOutside';
import { Arrow } from './Arrow';

const StyledFilter = styled.div`
  ${l1DefaultStyle};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    width: auto;
    justify-self: start;
  };
  
  @media (min-width: ${props => props.theme.sizes.desktop}) {
    padding-right: 40px;
    margin-bottom: 0;
    border-right: 2px solid ${props => props.theme.colors.border};
  };
`;

const Container = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    width: auto;
  }
`;

const Select = styled(Button)`
  ${flexStyle};
  background: ${props => props.theme.colors.neutrals['0']};
  border: 1px solid ${props => props.theme.colors.border};
  ${l1DefaultStyle};
  min-width: 256px;
  width: 100%;
  cursor: pointer;
  padding: 16px 8px 16px 24px;
  border-radius: 16px;
`;

const Options = styled.ul`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};
  list-style-type: none;
  position: absolute;
  /* top: 60px; */
  margin-top: 8px;
  left: 0;
  border-radius: 8px;
  width: 100%;
  z-index: 10;
`;

const Option = styled.li`
  min-height: 51px;
  margin: 10px 0;
  padding: 12px 24px;
  cursor: pointer;

  &:first-of-type{
    margin: 0;
    padding: 22px 24px;
    border-radius: 8px 8px 0 0;
  };

  &:last-of-type{
    margin: 0;
    padding: 22px 24px;
    border-radius: 0 0 8px 8px;
  };

  &:hover{
    background-color: ${props => props.theme.colors.neutrals['100']};
  };
`
const Title = styled.p`
  display: none;
  ${l1DefaultStyle};
  margin-right: 16px;
  flex: 1;
  white-space: nowrap;  

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    display: inline-block;
  };
`;

type Props = {
  list: string[];
  selected?: null | string;
  select: (value: string) => void;
}

export const FilterByCategory: FC<Props> = ({ list, selected, select }) => {
  const [open, setOpen] = useState<boolean>(false);

  const filterRef = useRef<HTMLDivElement>(null);

  function handleClose() {
    setOpen(false);
  }

  useClickOutside(filterRef, open, handleClose);

  const findNext = (el: HTMLElement) => el.nextSibling || el.parentElement?.firstChild;
  
  const findPrev = (el: HTMLElement) => el.previousSibling || el.parentElement?.lastChild;

  return (
    <StyledFilter ref={filterRef}>
      <Title>Filter by:</Title>
      <Container>
        <Select title="Filter by category" onClick={() => setOpen(prev => !prev)}>
          <span>{selected || list[0]}</span>
          <Arrow open={open} chevron={false} />
        </Select>

        <CSSTransition
          in={open}
          timeout={300}
          classNames="card"
          unmountOnExit
        >
          <Options>
          {
            list.map(item => <Option role="button" tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                select(item);
                setOpen(false);
              }
              
              if (e.code === "ArrowDown") {
                e.preventDefault();
                const next: any = findNext(e.target as HTMLElement);
                if (next) next.focus();
              }

              if (e.code === "ArrowUp") {
                e.preventDefault();
                const prev: any = findPrev(e.target as HTMLElement);
                if (prev) prev.focus();
              }
            }} 
            onClick={() => {
              select(item);
              setOpen(false);
            }} key={item}>{item}</Option>)
          }
          </Options>

        </CSSTransition>
      </Container>
    </StyledFilter>
  )
}
