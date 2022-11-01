import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { AeroPay } from "../AeroPay";
import isologo from "../../assets/icons/aerolab-logo-1.svg";
import logo from "../../assets/icons/aerolab-logo-2.svg";

import { HistoryA, HistoryLink, StyledHeader, Logo } from './styles';

export const Header = () => {
	const { pathname } = useRouter()

	return (
		<StyledHeader>
			<Logo className="logo">
				<Link href="/" prefetch={false} passHref>
					<a>
						<Image priority className="logo" layout="fixed" width={48} height={48} src={logo} alt="Aerolab" />
					</a>
				</Link>
			</Logo>
			<Logo className="iso">
				<Link href="/" prefetch={false} passHref>
					<a>
						<Image className="iso" layout="fixed" width={126} height={48} src={isologo} alt="Aerolab" />
					</a>
				</Link>
			</Logo>
			{pathname === '/' && <HistoryLink>
				<Link passHref href="/history">
					<HistoryA title="Go to redeem history">HISTORY</HistoryA>
				</Link>
			</HistoryLink>}
			<AeroPay />
	</StyledHeader>
	);
};
