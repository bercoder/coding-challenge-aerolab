import styled, { css } from 'styled-components';

const Titles = css`
  font-weight: 900;
  line-height: 80%;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const H1 = styled.h1`
  ${Titles};
  font-size: 96px;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    font-size: 200px;
  }
`;

export const H2 = styled.h2`
  ${Titles};
  font-size: 32px; 

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    font-size: 48px; 
  }
`;

export const H3 = styled.h3`
  ${Titles};
  font-size: 24px;
  line-height: 100%;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    font-size: 32px;
  }
`;

export const flexStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;  
`;

export const gradientHoverStyle = css`
  background: ${(props) => props.theme.colors.brand.hover.from};
  background: linear-gradient(102.47deg, ${(props) => props.theme.colors.brand.hover.from} -5.34%, ${(props) => props.theme.colors.brand.hover.to} 106.58%);    
`;

export const gradientStyle = css`
  background: ${(props) => props.theme.colors.brand.default.from};
  background: linear-gradient(102.47deg, ${(props) => props.theme.colors.brand.default.from} -5.34%, ${(props) => props.theme.colors.brand.default.to} 106.58%);
`;

export const l1DefaultStyle = css`
  color: ${(props) => props.theme.colors.neutrals['600']};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    font-size: 18px;
  }
`;

export const l1AllCapsStyle = css`
  ${l1DefaultStyle};
  text-transform: uppercase;
  letter-spacing: .24em;
`;

export const l1LightWeightStyle = css`
  ${l1DefaultStyle};
  font-weight: 500;
`;

export const l2DefaultStyle = css`
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  font-weight: 600;
  font-size: 12px;
  
  @media (min-width: ${props => props.theme.sizes.desktop}) {
    font-size: 14px;
  }  
`;

export const l2AllCapsStyle = css`
  ${l2DefaultStyle};
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    letter-spacing: .08em;
  }   
`;

export const Flex = styled.div`
  ${flexStyle}
`;

export const Bordered = styled(Flex)`
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.border};
  padding: 10px;
`;

export const Button = styled.button`
  ${l1DefaultStyle};
  min-height: 35px;
  color: ${(props) => props.theme.colors.neutrals['100']};
  border-radius: 12px;
  padding: 4px 16px;
  ${gradientStyle};
  white-space: nowrap;
  transition: all .3s ease-out;
`;

export const textGradient = css`
  background: linear-gradient(to right,  
    ${(props) => props.theme.colors.brand.default.from},
    ${(props) => props.theme.colors.brand.default.to});
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
`;

export const shadowStyle = css`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const Icon24x20 = styled.span`
  display: inline-grid;
  place-items: center;
  position: relative;
  width: 20px;
  height: 20px;
  
  @media (min-width: ${props => props.theme.sizes.desktop}) {
    width: 24px;
    height: 24px;
  }
`;

export const Icon32x24 = styled.span`
  display: inline-grid;
  place-items: center;
  position: relative;
  width: 24px;
  height: 24px;

  @media (min-width: ${props => props.theme.sizes.desktop}) {
    width: 32px;
    height: 32px;
  }
`;