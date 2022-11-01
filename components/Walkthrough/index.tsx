import Image from "next/image";

import { 
  StyledWalkthrough,
  Cards,
  Card,
  Title,
  TitleName,
  Text } from './styles';

import {
	Icon32x24,
} from "../../styles";

import icon from "../../assets/icons/walkthrough-1.svg";
import icon2 from "../../assets/icons/walkthrough-2.svg";
import icon3 from "../../assets/icons/walkthrough-3.svg";

export const Walkthrough = () => {
	return (
		<StyledWalkthrough>
			<div className="background">
				<Image
					layout="fill"
					objectFit="cover"
					src="/images/hero-responsive.png"
					priority
					alt=""
				/>
			</div>
			<Cards>
				<Card className="fadeInDown">
					<div className="image">
						<Image
							layout="fill"
							objectFit="cover"
							placeholder="blur"
							blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA2pJREFUaEPVWYlO4zAQtfPLu1rtCu0htIf2ENoVopTepVBgEXxY+xFBk9rJ2B5fiZsYJAit4sSemTfvzQx/ftyVnDFW/XK4lqzgvLpyca0/M844L+Gvdt9hfVGtl89p/i+U5xP3iXX1evEMfd1hf+b66r4ndBB9I/AZfozvic2SL5AHQxtjLkNJAwqDFcJg1gPI/cHzH//vyupExEvr7xRLIE+BfXjJmhfqnpKeFZbU3hNlOLyWM6bsGbYBByEPgRYaISMP5tmYMxQ0wzUelYaSkSBCmQxpaTjG+MNDcxDKM0kx09YAIZi5xwehwkvzTChmDNdjrJGYsSebKrkoISxBj0J3e78rqVitMxmVjTpiRs9O8l1RmEFGr9bBQYw0G+AZJc2mSJ9dMXNzhzCi8cDRMWOJfWtycRl4c2eGVp1tuqRLq4WbVE8RYGueud6qHukO5oF4Zg2hZUgOWoJIXARLjj55ZnnrCK2+MdOFZxZbkCi6SNTEX2BWitFmyXlmfivUr9QvIQSIgZwLz8yq0BIescr0RJjx8FMnbTa5MdWvN49bYnnQegYOUjO7VZZbMJMTz4w3BLM7GDdbnrnc7DXRiErdY2MmJc+MrlFhRaVZb1ZCkoMsgRP2AFw8c1EdhC5RgV/oUjZDnjlfO+qRADlPYmYInjlf75uanWy39IiZLjzzb2WvR0LlfByRJcQMzq5/wSOigXYgQqIxJzEUi5k+eeZs1YLZc+SZs5XwCCEa6ZDpETMxPPNn6Va/3iZDLjzze4mYHUt41NR+FTzza4GzFtgferlqL9ja98qJZ34uGh4hu+5a89jsuveIGZfhfsyJmj223xQDSjJ8E8xnvs919YvmIeQGM+WZbzN7yxRK4BDMGGl6CJ75OjM9ErqxrHjmdIoxggYntilWyAAoSv0mqmdOp2rW8spyo7hJiJm26RyM+wU8opW0tjFDKGZiprtew3mVgzDk5+neGIZGtYNy4ZlPE9HEVoaNaikbY2FSm/XBMx8ndvVr7eUSsw9zKksUUMesZ06uUMsUtU4L5KGumAlN552a4CdXRM0eGwoh42Okpo/Sa/4wJpjdaMxJzGTMM+/HB4+Q8wpRy+PQ8KbLoXjm3aVDNIpmxKvgGTiIrZ2TpB3UF8+8HTlaptYBUIY882bUXv3mxDMvAfL73VFHWvcAAAAASUVORK5CYII=`}
							src="/images/walkthroug-1-responsive.png"
							alt=""
						/>
					</div>
					<div className="body">
						<Title>
							<div className="icon">
								<Icon32x24 className="redeem">
									<Image layout="fill" src={icon} alt="" />
								</Icon32x24>
							</div>
							<TitleName as="div">1—Browse</TitleName>
						</Title>
						<Text>
							Browse our tech catalog with more than 20 top tech products
						</Text>
					</div>
				</Card>
				<Card className="fadeInUp">
					<div className="image">
						<Image
							objectFit="cover"
							placeholder="blur"
							blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA2pJREFUaEPVWYlO4zAQtfPLu1rtCu0htIf2ENoVopTepVBgEXxY+xFBk9rJ2B5fiZsYJAit4sSemTfvzQx/ftyVnDFW/XK4lqzgvLpyca0/M844L+Gvdt9hfVGtl89p/i+U5xP3iXX1evEMfd1hf+b66r4ndBB9I/AZfozvic2SL5AHQxtjLkNJAwqDFcJg1gPI/cHzH//vyupExEvr7xRLIE+BfXjJmhfqnpKeFZbU3hNlOLyWM6bsGbYBByEPgRYaISMP5tmYMxQ0wzUelYaSkSBCmQxpaTjG+MNDcxDKM0kx09YAIZi5xwehwkvzTChmDNdjrJGYsSebKrkoISxBj0J3e78rqVitMxmVjTpiRs9O8l1RmEFGr9bBQYw0G+AZJc2mSJ9dMXNzhzCi8cDRMWOJfWtycRl4c2eGVp1tuqRLq4WbVE8RYGueud6qHukO5oF4Zg2hZUgOWoJIXARLjj55ZnnrCK2+MdOFZxZbkCi6SNTEX2BWitFmyXlmfivUr9QvIQSIgZwLz8yq0BIescr0RJjx8FMnbTa5MdWvN49bYnnQegYOUjO7VZZbMJMTz4w3BLM7GDdbnrnc7DXRiErdY2MmJc+MrlFhRaVZb1ZCkoMsgRP2AFw8c1EdhC5RgV/oUjZDnjlfO+qRADlPYmYInjlf75uanWy39IiZLjzzb2WvR0LlfByRJcQMzq5/wSOigXYgQqIxJzEUi5k+eeZs1YLZc+SZs5XwCCEa6ZDpETMxPPNn6Va/3iZDLjzze4mYHUt41NR+FTzza4GzFtgferlqL9ja98qJZ34uGh4hu+5a89jsuveIGZfhfsyJmj223xQDSjJ8E8xnvs919YvmIeQGM+WZbzN7yxRK4BDMGGl6CJ75OjM9ErqxrHjmdIoxggYntilWyAAoSv0mqmdOp2rW8spyo7hJiJm26RyM+wU8opW0tjFDKGZiprtew3mVgzDk5+neGIZGtYNy4ZlPE9HEVoaNaikbY2FSm/XBMx8ndvVr7eUSsw9zKksUUMesZ06uUMsUtU4L5KGumAlN552a4CdXRM0eGwoh42Okpo/Sa/4wJpjdaMxJzGTMM+/HB4+Q8wpRy+PQ8KbLoXjm3aVDNIpmxKvgGTiIrZ2TpB3UF8+8HTlaptYBUIY882bUXv3mxDMvAfL73VFHWvcAAAAASUVORK5CYII=`}
							src="/images/walkthroug-2-responsive.png"
							alt=""
							layout="fill"
						/>
					</div>
					<div className="body">
						<Title>
							<div className="icon">
								<Icon32x24 className="redeem">
									<Image className="mobile" layout="fill" src={icon} alt="" />
									<Image className="desktop" layout="fill" src={icon2} alt="" />
								</Icon32x24>
							</div>
							<TitleName as="div">2—Choose</TitleName>
						</Title>
						<Text>
							Exchange your hard-earned AeroPoints for a cool tech item
						</Text>
					</div>
				</Card>
				<Card className="fadeInDown">
					<div className="image">
						<Image
							objectFit="cover"
							placeholder="blur"
							blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA2pJREFUaEPVWYlO4zAQtfPLu1rtCu0htIf2ENoVopTepVBgEXxY+xFBk9rJ2B5fiZsYJAit4sSemTfvzQx/ftyVnDFW/XK4lqzgvLpyca0/M844L+Gvdt9hfVGtl89p/i+U5xP3iXX1evEMfd1hf+b66r4ndBB9I/AZfozvic2SL5AHQxtjLkNJAwqDFcJg1gPI/cHzH//vyupExEvr7xRLIE+BfXjJmhfqnpKeFZbU3hNlOLyWM6bsGbYBByEPgRYaISMP5tmYMxQ0wzUelYaSkSBCmQxpaTjG+MNDcxDKM0kx09YAIZi5xwehwkvzTChmDNdjrJGYsSebKrkoISxBj0J3e78rqVitMxmVjTpiRs9O8l1RmEFGr9bBQYw0G+AZJc2mSJ9dMXNzhzCi8cDRMWOJfWtycRl4c2eGVp1tuqRLq4WbVE8RYGueud6qHukO5oF4Zg2hZUgOWoJIXARLjj55ZnnrCK2+MdOFZxZbkCi6SNTEX2BWitFmyXlmfivUr9QvIQSIgZwLz8yq0BIescr0RJjx8FMnbTa5MdWvN49bYnnQegYOUjO7VZZbMJMTz4w3BLM7GDdbnrnc7DXRiErdY2MmJc+MrlFhRaVZb1ZCkoMsgRP2AFw8c1EdhC5RgV/oUjZDnjlfO+qRADlPYmYInjlf75uanWy39IiZLjzzb2WvR0LlfByRJcQMzq5/wSOigXYgQqIxJzEUi5k+eeZs1YLZc+SZs5XwCCEa6ZDpETMxPPNn6Va/3iZDLjzze4mYHUt41NR+FTzza4GzFtgferlqL9ja98qJZ34uGh4hu+5a89jsuveIGZfhfsyJmj223xQDSjJ8E8xnvs919YvmIeQGM+WZbzN7yxRK4BDMGGl6CJ75OjM9ErqxrHjmdIoxggYntilWyAAoSv0mqmdOp2rW8spyo7hJiJm26RyM+wU8opW0tjFDKGZiprtew3mVgzDk5+neGIZGtYNy4ZlPE9HEVoaNaikbY2FSm/XBMx8ndvVr7eUSsw9zKksUUMesZ06uUMsUtU4L5KGumAlN552a4CdXRM0eGwoh42Okpo/Sa/4wJpjdaMxJzGTMM+/HB4+Q8wpRy+PQ8KbLoXjm3aVDNIpmxKvgGTiIrZ2TpB3UF8+8HTlaptYBUIY882bUXv3mxDMvAfL73VFHWvcAAAAASUVORK5CYII=`}
							src="/images/walkthroug-3-responsive.png"
							alt=""
							layout="fill"
						/>
					</div>
					<div className="body">
						<Title>
							<div className="icon">
								<Icon32x24 className="redeem">
									<Image className="mobile" layout="fill" src={icon} alt="" />
									<Image className="desktop" layout="fill" src={icon3} alt="" />
								</Icon32x24>
							</div>
							<TitleName as="div">3—Enjoy</TitleName>
						</Title>
						<Text>All done We’ll take care of delivery of your tech item!</Text>
					</div>
				</Card>
			</Cards>
		</StyledWalkthrough>
	);
};
