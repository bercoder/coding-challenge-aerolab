import styled from 'styled-components';
import { l1DefaultStyle, flexStyle, textGradient } from '../../styles';

export const StyledFooter = styled.footer`
  max-width: ${(props) => props.theme.max};
  height: 120px;
  width: 100%;
  display: grid;
  place-items: center;
  margin: 0 auto;  

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    height: 200px;
  }
`;

 export const A = styled.a`
    ${l1DefaultStyle};
    text-decoration: none;
    position: relative;
    ${flexStyle};
    gap: 8px;

    & .icon {
      background: url('./images/github-default.svg') no-repeat center; 
      background-size: cover;
    }

    &:hover{
      ${textGradient};
    }

    &:hover .icon{
      background: url('./images/github-active.svg') no-repeat center; 
      background-size: cover;
    }
  
`;