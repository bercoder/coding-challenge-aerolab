import styled from 'styled-components';
import { H2 } from '../../styles';

export const StyledProducts = styled.section`
  max-width: ${(props) => props.theme.max};
  margin: 0 auto;
  padding: 10px 20px 0;

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    margin-bottom: 160px;
  };

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    padding: 0 80px;
  }
`;

export const ListOfProducts = styled.div`
  width: 375px;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    width: 100%;
    display: grid;
    column-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(311px, 1fr));
  };
  @media (min-width: ${props => props.theme.sizes.tablet}) {
    margin-bottom: 16px;
  }
`;

export const Title = styled(H2)`
  color: ${(props) => props.theme.colors.neutrals['900']};
  margin-bottom: 40px;

  & span {
    color: ${(props) => props.theme.colors.brand.default.from};
  }
`;

export const Controls = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  margin-bottom: 64px;

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  };

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    grid-template-columns: auto 1fr 1fr;
    margin-bottom: 66.5px;
  };
`;

export const Pager = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.sizes.tablet}) {
    display: block;
    justify-self: end;
  };

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    order: 3;
  };
`;

export const PagerAndNum = styled.div`
  @media (min-width: ${props => props.theme.sizes.desktop}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  };

  & .numberOfProducts {
    order: 1;
    grid-column: 2/3;
  }

  & .pager {
    order: 2;
    justify-self: flex-end;
  }
`;