import { useContext, FC } from 'react';
import Image from 'next/image';
import { UserContext } from '../../context/UserContext';
import { UserStatus } from '../../types';

import styled from 'styled-components';
import { flexStyle, l1DefaultStyle, textGradient, shadowStyle, Icon32x24 } from '../../styles';
import logo from '../../assets/icons/aeropay-1.svg';
import { Arrow } from '../ui/Arrow';

type Props = {
  toggle: VoidFunction;
  open: boolean;
}

const StyledDropDown = styled.button`
  ${flexStyle};
  gap: 8px;
  min-width: 143px;
  cursor: pointer;
  background: transparent;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.border};
  padding: 8px 16px;
  ${shadowStyle};
  transition: all .3s ease-out;
  
  &:hover{
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.09);
  }
`;

const Points = styled.span`
  ${l1DefaultStyle};
  ${textGradient};
  flex: 1;
  `;

const Error = styled.span`
  flex: 1;
  color: red;
`;

export const DropDown: FC<Props> = ({ toggle, open }) => {

  const { userStatus, localPoints: points } = useContext(UserContext);

  return (
    <StyledDropDown title="Add points to your account" onClick={toggle}>
      <Icon32x24>
        <Image layout="fixed" width={24} height={24} src={logo} alt="" />
      </Icon32x24>
        {
        userStatus === UserStatus.ERROR 
        ? <Error><small>User not found</small></Error>
      : <Points>
        {userStatus === UserStatus.OK && <>{points?.toLocaleString() || 0}</>}
        {userStatus === UserStatus.LOADING && <small>Loading</small>}
        </Points>}
      <Arrow open={open} />
    </StyledDropDown>
  )
}
