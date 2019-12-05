import styled, { keyframes } from 'styled-components';

export const SlideShowWrapper = styled.div`
	position: relative;
	width: 840px;
	height: 346px;
	float: left;
	margin: 48px 0 0 56px;
	overflow: hidden;
	&:hover{
		.left, .right{
			visibility: visible;
		}
	}
	.left{
		position: absolute;
		font-size: 36px;
		top: 170px;
		left: 14px;
		display:block;
		visibility: hidden;
		width: 36px;
		height: 36px;
		color: #333;
		opacity: 0.7;
		font-weight:bold;
		transform: rotate(180deg);
		cursor: pointer;
		&:hover{
			color: white;
		}
	}
	.right{
		position: absolute;
		font-size: 36px;
		top: 170px;
		left: 790px
		display: block;
		visibility: hidden;
		width: 36px;
		height: 36px;
		cursor: pointer;
		color: #333;
		opacity: 0.7;
		font-weight:bold;
		&:hover{
			color: white;
		}		
	}
`;

const animation = (props) => {
  return keyframes`
  	0% {
    	left: ${(props.startAt + "px")};
    }
    100% {
    	left: ${(props.stopAt + "px")};
  	}  
  `
};

export const Slider = styled.div`
	width: 5040px;
	height: 346px;
	position: absolute;	
	left: -840px;
	animation: ${props => animation(props)} .2s ease-in forwards;
`;

export const SlidePic = styled.a`
	width: 840px;
	height: 346px;
	display: block;
	float: left;
	background-image: url(${props => props.img});
	background-size: contain;
`;

export const Indicators = styled.div`
	position: absolute;	
	width: 320px;
	height: 150px;
	top: 315px;
	left: 45%;
`;

export const Dot = styled.span`
	cursor: pointer;
    height: 8px;
    width: 8px;
    margin: 0 10px;
    background-color: ${props => props.currentPic === parseInt(props.id) ? "#bbb" : "#717171"};
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &:hover {
	  background-color: #bbb;
	}
`;