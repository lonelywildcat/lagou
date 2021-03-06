import styled, { keyframes }  from 'styled-components';
import headerIcon from '../../static/popup-sprite.png';

export const RegContentWrapper = styled.div`
	float: left;	
	width: 440px;
	background-color: #fefefe;
	margin: 8px 8px;	
	border-radius: 3px;
`;

export const Header = styled.div`
	height: 120px;	
	.wechat{
		display: inline-block;		
		width: 60px;
		height: 60px;
		background-image: url(${headerIcon});
	    background-repeat: no-repeat;
	    background-position: -440px -268px;
	    cursor: pointer;
	    &:hover{
	    	background-position: -334px -330px;
	    }
	}
	.hint{
		position: relative;
		top: -40px;
		left: 14px;
		display: inline-block;	
		font-size: 8px;
		padding: 4px 8px;
		cursor: pointer;
		color: #999;
		box-shadow: 0 0 4px 2px rgba(0,0,0,.05);
	}
	.close{
		cursor: pointer;
		display: inline-block;
		position: relative;
		top: -40px;		
		left: 250px;

	}
	.logo{
		position: relative;
		margin: auto;
		top: -10px;
		width: 100px;
		height: 50px;
		background-image: url(${headerIcon});
	    background-repeat: no-repeat;
	    background-position: -334px -268px;
	    
	}
`;

export const SwitchInput = styled.div`		
	width: 440px;
	height: 46px;
	overflow: hidden;
`;

export const Tab = styled.div`		
	float: left;
	height: 40px;
	line-height: 40px;
	color: #666;
	font-weight: 700;
	cursor: pointer;
	&.seekjob{
		margin-left: 50px;
		color: ${props => props.seekjob ? "#333" : "#666"}
		border-bottom: ${props => props.seekjob ? "3px solid #000" : ""}
		
	}
	&.hiring{
		margin-left: 50px;
		color: ${props => props.seekjob ? "#666" : "#333"}
		border-bottom: ${props => props.seekjob ? "" : "3px solid #000"}
	}
`;

const animation = (props) => {
  return keyframes`
  	0% {
    	left: ${props.start + "px"};
    }
    100% {
    	left: ${props.stop + "px"};
  	}  
  `
}

export const Slider = styled.div`
	position: relative;
	left: -440px;
	width: 880px;
	height: 165px;	
	animation: ${props => animation(props)} .3s ease-in forwards; 
`;

export const LeftInput = styled.div`
	float: left;	
	width: 440px;	
`;

export const RightInput = styled.div`
	float: left;	
	width: 420px;	
`;

export const InputMobileWrapper = styled.div`
	position: relative;
	margin: 18px 50px 10px 50px;		
	width: 316px;
	height: 54px;		
`;

export const SelectAreaCode = styled.div`
	position: absolute;	
	width: 78px;
	height: 50px;
	line-height: ${props => props.focus ? "48px" : "50px"};		
	font-size: 14px;
	color: #333;
	padding-left: ${props => props.focus ? "13px" : "14px"};
	box-sizing: border-box;		
	background-color: ${props => props.focus ? "rgb(255, 255, 255)" : "rgb(244, 244, 244)"};
	border-left: ${props => props.focus ? "1px solid #00b38a" : "1px solid rgb(244, 244, 244)"}
	border-top: ${props => props.focus ? "1px solid #00b38a" : "1px solid rgb(244, 244, 244)"}
	border-bottom: ${props => props.focus ? "1px solid #00b38a" : "1px solid rgb(244, 244, 244)"}
	border-right: ${props => props.focus ? "1px solid 1px solid rgb(255, 255, 255)" : "1px solid rgb(244, 244, 244)"}
`;

export const Arrow = styled.div`
	position: absolute;
	top: 16px;
	left: 62px;
	.iconfont{
		position: relative;
		font-size: 8px;
		color: #333;
		display: inline-block;
		transform: ${props => props.dropDown ? "rotate(-90deg)" : "rotate(90deg)"};
	}
`;

export const InputMobileNum = styled.input`		
		float: left;
		left: -4px;		
		font-size: 14px;
		padding-left: 84px;
		box-sizing: border-box;
		width: 316px;
		height: 50px;
		border: 1px solid rgb(244, 244, 244);
		background-color: rgb(244, 244, 244);
		&:focus{
			background-color: rgb(255, 255, 255);			
			border: 1px solid #00b38a;
			outline: 0;
		}
		&::placeholder{
			padding-left: 0px;
		}
`;

export const DropDownWrapper = styled.div`
	width: 184px;
	position: absolute;
	top: 50px;
	height: 220px;	
	overflow-y: scroll;
	z-index: 5;
`;

export const DropDownItem = styled.div`
	height: 38px;
	line-height: 38px;
	position: relative;
	overflow: hidden;
	color: ${props => props.disable ? "#999" : "#555"};
	background-color: #fff;
	border-left: 1px solid #e8e8e8;
	font-size: 14px;
	&:hover{
		background-color: ${props => props.disable ? "rgb(255, 255, 255)" : "rgb(244, 244, 244)"};		
	}
	.left{
		display: inline-block;
		float: left;	
		padding-left: 14px;	
	}
	.right{
		display: inline-block;
		float: right;
		padding-right: 14px;	
	}
`;

export const InputMobilePswWrapper = styled.div`
	position: relative;
	margin: 18px 50px 10px 50px;		
	width: 316px;
	height: 54px;	
`;

export const InputMobilePsw = styled.input`
		float: left;		
		font-size: 14px;
		width: 230px;
		height: 50px;
		border: 1px solid rgb(244, 244, 244);
		background-color: rgb(244, 244, 244);
		&:focus{
			background-color: rgb(255, 255, 255);			
			border-left: 1px solid #00b38a;
			border-top: 1px solid #00b38a;
			border-bottom: 1px solid #00b38a;			
			outline: 0;
		}
		&::placeholder{
			padding-left: 14px;
		}
`;

export const GetVerifyCode = styled.div`
	float: left;		
	font-size: 14px;
	width: 82px;
	height: 52px;
	line-height: ${props => props.focusPsw ? "50px" : "52px"};
	color: #00b38a;
	cursor: pointer;	
	background-color: ${props => props.focusPsw ? "rgb(255, 255, 255)" : "rgb(244, 244, 244)"};
	border-top: ${props => props.focusPsw ? "1px solid #00b38a" : "rgb(244, 244, 244)"}
	border-right: ${props => props.focusPsw ? "1px solid #00b38a" : "1px solid rgb(244, 244, 244)"}
	border-bottom: ${props => props.focusPsw ? "1px solid #00b38a" : "1px solid rgb(244, 244, 244)"}	
`;

export const RegBtn = styled.div`
	position: relative;
	width: 312px;
	height: 50px;
	line-height: 50px;
	color: #fff;
	margin-left: 54px;
	margin-top: 14px;
	text-align: center;
	background-color: #00b38a;
	border-radius: 4px;
	cursor: pointer;
	&:hover{
		background-color: rgb(53, 198, 163)
	}
`;

export const LoginBtn = styled.div`
	position: relative;
	width: 312px;
	height: 50px;
	line-height: 50px;
	color: #666;
	margin-left: 54px;
	margin-top: 6px;
	text-align: center;	
	border-radius: 4px;
	cursor: pointer;
	&:hover{
		color: #00b38a;
	}
`;

export const WechatRegContent = styled.div`
	width: 420px;	
	.wechat{
		display: inline-block;		
		width: 60px;
		height: 60px;
		background-image: url(${headerIcon});
	    background-repeat: no-repeat;
	    background-position: -406px -340px;
	    cursor: pointer;
	    &:hover{
	    	background-position: -334px -402px;
	    }
	}
	.hint{
		position: relative;
		top: -40px;
		left: 14px;
		display: inline-block;	
		font-size: 8px;
		padding: 4px 8px;
		cursor: pointer;
		color: #999;
		box-shadow: 0 0 4px 2px rgba(0,0,0,.05);
	}
	.close{
		cursor: pointer;
		display: inline-block;
		position: relative;
		top: -40px;		
		left: 250px;

	}
	.reg{
		position: relative;
	    margin-top: 0px;
	    font-size: 18px;
	    color: #333;
	    text-align: center;
	    font-weight: bolder;
	}
	.code{		
		display: block;
		width: 180px;
		height: 180px;		
		margin: 30px auto 0;
	}
	.scan{
		height: 22px;
		text-align: center;
		line-height: 22px;		
		font-size: 14px;
		margin-top: 16px;
		margin-bottom: 12px;
	}
	.login{		
		width: 312px;
		height: 50px;
		line-height: 50px;
		color: #666;		
		margin: 28px auto 42px;
		text-align: center;	
		border-radius: 4px;
		cursor: pointer;
		text-align: center;
	}
`;