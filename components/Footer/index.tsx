import Link from 'next/link';

import { Icon32x24 } from '../../styles';
import { StyledFooter, A } from './styles';

export const Footer = () => <StyledFooter>
  <Link passHref href="https://github.com/bercoder/coding-challenge-aerolab" prefetch={false}>
    <A>
      <Icon32x24 className="icon"/>
      <span>View this repository</span>
    </A>
  </Link>
</StyledFooter>