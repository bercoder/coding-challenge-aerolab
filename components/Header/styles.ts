import styled from "styled-components";
import { A } from '../Footer/styles';

export const HistoryLink = styled.div`
  margin-left: auto;
  margin-right: 15px;
  padding: 5px;
  z-index: 10;
  transition: .2s ease;
`;

export const HistoryA = styled(A)`
  font-size: .85em;
  text-transform: uppercase;
  letter-spacing: .15em;  
`

export const StyledHeader = styled.header`
max-width: ${(props) => props.theme.max};
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 44px 20px;
min-height: 140px;

@media (min-width: ${(props) => props.theme.sizes.desktop}) {
  padding: 40px 80px;
}
`;

export const Logo = styled.div`
position: relative;

&.iso {
  display: none;
}

@media (min-width: ${(props) => props.theme.sizes.desktop}) {
  &.logo {
    display: none;
  }

  &.iso {
    display: block;
  }
}
`;