import styled, { keyframes }  from 'styled-components';

export const PopupCityWrapper = styled.div`
	display: ${props => props.showCity ? "block" : "none"};
	position: fixed; 
	z-index: 10; 
	padding-top: 100px; 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%; 
	overflow: auto; 
	background-color: rgba(0,0,0,0.4);
`;

const animateup = keyframes `
  from {
  	top: 30px;
  	opacity: 0
  }
  to {
  	top: 0px; 
  	opacity: 1
  }
`; 

export const Content = styled.div`	
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 15px solid rgba(58,58,58,0.6);
  background-clip: padding-box;
  width: 500px;
  height: 440px;
  animation-name: ${animateup};
  animation-duration: 0.3s;
  .title{
  	height: 42px;
  	color: #fff;
  	line-height: 42px;  	
  	font-size: 18px;
  	background-color: rgb(0, 179, 138);
  	overflow: hidden;
  	.switch{
  		float: left;
  		display: inline-block;
  		margin-left: 18px;
  	}
  	.close{
  		float: right;
  		margin-right: 18px;
  		font-size: 24px;
  		cursor: pointer;
  	}
  } 
  .greeting{
  	height: 120px;         	
  	.line1{
	    font-size: 20px;
	    color: #333;
	    font-weight: 400;
      padding-top: 28px;	    
	    margin: 0px 36px 14px 36px;	    
  	}
  	.line2{
	    font-size: 16px;
	    color: #555;
	    line-height: 42px;
        border-bottom: 1px dotted #e5e5e5;
        width: 426px;
        padding-bottom: 6px;
        margin: 0px 36px 0px 36px;
  	}
  } 
`;

export const SiteList = styled.div`
	margin: 0 40px 0 40px;
	overflow: hidden;   
	.info{
		font-size: 14px;
		color: #555;
	}
	.footer{
		font-size: 14px;
		color: #555;
		margin: 18px 0;
	}
`;
export const SiteBtn = styled.div`
    border: 2px solid #dce4e6;
    color: #999;
    width: 90px;
    height: 40px;
    line-height: 38px;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    margin: 14px 14px 10px 0;
    cursor: pointer;
    &:hover{
    	color: #555;
    	border: 2px solid #00b38a;
    }
`;

export const SiteBtnActive = styled.div`
    border: 2px solid #00b38a;
    color: #555;
    width: 90px;
    height: 40px;
    line-height: 38px;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    margin: 14px 8px 8px 14px;
    cursor: pointer;
`;