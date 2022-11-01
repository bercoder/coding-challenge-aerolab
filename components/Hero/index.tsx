import Image from "next/image";
import { scroll } from '../../utils';
import arrow from "../../assets/icons/arrow.svg";
import { Icon24x20 } from "../../styles";

import {
	StyledHero,
	Sub,
	Title,
	Text,
	ViewButton,
	Content,
	Illustration,
} from "./styles";

export const Hero = () => {
	return (
		<StyledHero>
			<Content>
				<Sub className="fadeInDown d-1">Explore the</Sub>
				<Title className="fadeInUp d-2">
					<span>Tech</span>zone
				</Title>
				<Text className="fadeInLeft d-1">
					Here you’ll be able to redeem all of your hard-earned Aeropoints and
					exchange them for cool tech.{" "}
				</Text>
				<ViewButton
					title="Go to products section"
					className="fadeInRight d-3"
					onClick={() => scroll()}
				>
					<span>View all Products</span>
					<Icon24x20>
						<Image layout="fill" src={arrow} alt="" />
					</Icon24x20>
				</ViewButton>
			</Content>
			<Illustration />
		</StyledHero>
	);
};
