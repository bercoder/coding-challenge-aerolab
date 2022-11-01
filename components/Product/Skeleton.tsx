import Image from "next/image";
import styled, { keyframes } from "styled-components";
import logono from "../../assets/icons/aerolab-logo-2.svg";

const pulse = keyframes`
  to {
    background: #DAE4F2;
  }
`;

const StyledSkeleton = styled.div`
	width: 320px;
	height: 506px;
  margin-bottom: 48px;
  
  & article {
    border-radius: 16px;
    border: 1px solid ${props => props.theme.colors.border};
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    padding: 0;
    margin-bottom: 16px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));
  }

	& .image {
		position: relative;
		height: 361px;
		width: 100%;
		display: grid;
		place-items: center;
		flex: 1;
		border-bottom: 1px solid ${(props) => props.theme.colors.border};

		& .black {
			filter: grayscale(100%) opacity(15%);
		}
	}
`;

const Detail = styled.div`
  & span {
    display: block;
    background: ${(props) => props.theme.colors.neutrals["200"]};
    width: 208px;
    height: 16px;
    margin: 16px 0 8px 24px;
    border-radius: 12px;
    animation: ${pulse} 1.6s ease infinite;
  }
  
  & span:nth-of-type(2){
    width: 104px;
    height: 8px;
    margin: 0 0 24px 24px; 
    border-radius: 4px;
  }
`;

const Button = styled.div`
	width: 100%;
	height: 59px;
	border-radius: 16px;
	margin-top: 16px;
	background: ${(props) => props.theme.colors.neutrals["200"]};
  animation: ${pulse} 1.6s ease infinite;
`;

export const Skeleton = () => {
	return (
		<StyledSkeleton>
      <article>
        <div className="image">
          <Image
            className="black"
            src={logono}
            alt="Loading"
            width="78px"
            height="72px"
            layout="fixed"
          />
        </div>
        <Detail>
          <span />
          <span />
        </Detail>
      </article>
      <Button />
		</StyledSkeleton>
	);
};
