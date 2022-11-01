import styled from 'styled-components';
import { H1, Button, gradientHoverStyle, l1AllCapsStyle, textGradient, shadowStyle, l1DefaultStyle } from '../../styles';

export const StyledHero = styled.section`
  max-width: ${(props) => props.theme.max};
  min-height: 500px;
  margin: 0 auto;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 860px;
    top: 120px;
    left: 0;
    background-image: url('./images/single-wave-pattern.svg');
    background-repeat: repeat;
    z-index: -1;
  }

  &::after {
    top: 133px;
  }

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    /* gap: 140px; */
    margin-top: 70px;

    &::before {
      top: 170px;
      height: 1380px;
    }
    &::after {
      top: 183px;
      height: 1380px;
    }
  }
`;

export const Sub = styled.p`
  ${l1AllCapsStyle};
  margin-bottom: 8px;
`;

export const Title = styled(H1)`
  color: ${(props) => props.theme.colors.neutrals['900']};    
  margin-bottom: 24px;
  text-align: center;

  & span {
    ${textGradient};
    display: block;
  }
`;

export const Text = styled.p`
  ${l1DefaultStyle};
  text-align: center;
  margin-bottom: 40px;
  padding: 0 15px;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    text-align: left;
    margin-bottom: 64px;
    padding: 0;
  }
`

export const ViewButton = styled(Button)`
  ${l1DefaultStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.neutrals['0']};  
  height: 64px;
  width: 100%;
  text-transform: uppercase;
  border-radius: 24px;
  ${shadowStyle};
  margin-bottom: 80px;
  gap: 8px;
  padding: 20px 48px;
  
  @media (min-width: ${props => props.theme.sizes.desktop}) {
    padding: 24px 40px;
    min-width: 318px;
    width: auto;
    margin-bottom: 0;
    height: 80px;
  }

  &:hover {
    ${gradientHoverStyle};

    & img {
      animation: down .4s linear 2;
    }
  }
`;

export const Content = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  @media (min-width: ${props => props.theme.sizes.desktop}) {
    width: 602px;
    text-align: left;
    align-items: flex-start;
    padding: 0;
    margin: 0;
  }  
`;

export const Illustration = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    display: block;
    background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
    width: 722px;
    height: 600px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
    border-radius: 104px;
    position: relative;
    
    &::before {
      content: "";
      position: absolute;
      width: 897px;
      height: 795px;
      bottom: 0;
      left: -100px;
      background-image: url("/images/hero-responsive.png");
      background-repeat: no-repeat;
      background-size: cover;    
      background-position: center;  
    }
  }
`;