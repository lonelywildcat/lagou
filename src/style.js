import styled from 'styled-components';
import backTopImg from './static/backtop.png'

export const ContentWrapper = styled.div`
	margin: 0 auto 50px auto;	
	position: relative;
	min-width: 1263px;	
	overflow: hidden;
`;

export const BackToTop = styled.div`
	position: fixed;
	right: 41px;
	bottom: 88px;
	width: 28px;
	height: 46px;
	background-image: url(${backTopImg});	
	cursor: pointer;
	&:hover{
		background-position: 28px 0px;    	
	}
`;