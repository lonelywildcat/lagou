import styled from 'styled-components';
import headerIcon from '../static/sprite_header.png'

export const HeaderWrapper = styled.div`
	height: 40px;
	min-width: 1263px;
	background-color: rgb(50 55 62);
`;

export const Logo = styled.a.attrs({
	href: "/",
	})`
    width: 43px;
    height: 21px;
    float: left;
    margin-top: 9px;
    background-image: url(${headerIcon});
    background-repeat: no-repeat;
    background-position: -10px -10px;
    background-size: 64px 128px;
    display: block;
    padding-left: 0;
    margin-left: 32px;
    margin-right: 22px;
`;
export const SuggestCity = styled.div`
	float: left;
	line-height: 40px;
    font-size: 14px;
    width: 130px;
    color: #0dca9f;
    text-align: center;
    .switch{
	    color: #afb5c0;	
	    padding-left: 12px;
	    font-size: 12px;
	    cursor: pointer;
	    &:hover{
	    	color: #fff;
	    }
    }
`;
 
 export const NavBarMiddle = styled.div`
	float: left;
	width: 350px;
	margin-left: 26px;	
 `;

 export const NavItem = styled.a`
	float: left;
	display: block;
	line-height: 40px;
	font-size: 14px;
	color: #afb5c0;
	width: 70px;
	text-align: center;
	text-decoration: none;
	&.active{
		color: #fff;
		background-color: rgb(36 40 44);
	}
	&:hover{
    	color: #fff;
    }	
 `;

 export const NavBarRight = styled.div`
	float: right;
	height: 100%;	
	margin-right: 30px;
 `;

 export const Passport = styled.div`
	float: left;
	height: 100%;
 `;

  export const PassportIcon = styled.div`
	float: left;    
    width: 18px;
    height: 18px;
    margin-right: 10px;
    background-image: url(${headerIcon});
    background-position: -76px -136px;
    background-repeat: no-repeat;    
    position: relative;
    top: 25%;
    cursor: pointer;
    &:hover{    	
    	background-position: -76px -174px;
    	    	
    }    
 `;

  export const PassportItem = styled.a`
	float: left;
	line-height: 40px;
	font-size: 14px;
	color: #afb5c0;
	margin-right: 10px;
	cursor: pointer;
	&:hover{
		color: #fff;		
	}
	&.span{
		color: #5e6166;
		cursor: auto;
	}
 `;

 export const AppDownload = styled.a` 	
 	display: block;
 	float: left;
 	height: 100%;
 	margin-left: 30px;
 	margin-right: 30px;
 	cursor: pointer; 	
 	.text{
		line-height: 40px;
		font-size: 14px;
		color: #08d7a2;		
 	}	
	&:hover .icon{
		background-position: -96px -212px;
	}
	&:hover .text{
		color: rgb(5 234 175);
	}
	:link{
		text-decoration: none;
	}
 `;

 export const AppIcon = styled.div`
    float: left;
    width: 12px;
    height: 17px;
    margin-right: 4px;
    margin-top: 1px;
    background-image: url(${headerIcon});
    background-position: -64px -212px;
    background-repeat: no-repeat;
    position: relative;
    top: 25%;
 `;


