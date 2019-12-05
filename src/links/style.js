import styled from 'styled-components';

export const LinksWrapper = styled.div`
	margin: 0 0 0 20px;
	width: 1263px;
	overflow: hidden;
`;

export const TabWrapper = styled.div`	
	width: 1225px;
	overflow: hidden;
	border-bottom: 1px solid #E8E8E8;
	margin-bottom: 30px;
`;

export const Tab = styled.div`	
	margin-right: 34px;
	float: left;	
	height: 22px;	
	padding: 14px 0;
	cursor: pointer;
	border-bottom: 2px solid #000;
`;

export const ContentWrapper = styled.div`
	margin-right: 34px;
`;

export const LinksList = styled.div`	
	width: 1120px;
	float: left;
	margin-right: 50px;	
`;

export const Expansion = styled.div`
	float: left;
	position: relative;
	top: 6px;
	cursor: pointer;
    color: #999;
    font-size: 14px;
    .iconfont{
		font-size: 8px;
		margin-left: 6px;
    	display: inline-block;
    	transform: ${props => props.expand ? "rotate(-90deg)" : "rotate(90deg)"};
    }
`;

export const LinkItem = styled.a`	
	float: left;
	padding: 8px 18px 8px 0;
    color: #555;
    font-size: 14px;
    &:hover{
    	color: #00b38a;
    }	
`;
