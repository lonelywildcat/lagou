import React, { Fragment, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../store';
import { 
	LoginContentWrapper,
	Header,
	Slider,
	LeftInput,
	InputEmail,
	InputEmailPsw,
	RightInput,
	InputMobileWrapper,
	SelectAreaCode,
	InputMobileNum,
	InputMobilePswWrapper,
	InputMobilePsw,
	GetVerifyCode,
	DropDownWrapper,
	Arrow,
	DropDownItem,
	SwitchInput,
	LoginBtn,
	RegBtn,
	WechatLoginContent
} from './style';
import areaCode from "./areaCode";

const LonginContent = (props) => {	
	const mobileLogin = useSelector(state => state.header.login.mobileLogin);
	return (
		<Fragment>		
			{ mobileLogin ? <MobileLogin/> : <WechatLogin /> }	
		</Fragment>	
	)
};

const MobileLogin = (props) => {
	const dispatch = useDispatch();
 	const handleClickCloseLog = useCallback(
 		() => dispatch(actionCreator.clickCloseLog()),
    	[dispatch]
  	);
 	const handleSwitchLogin = useCallback(
 		() => dispatch(actionCreator.clickSwitchLogin()),
    	[dispatch]
  	);

	return (
		<LoginContentWrapper >
			<Header>
				<div 
					className="wechat" 
					onClick={handleSwitchLogin}
				>
				</div>
				<div 
					className="hint" 
					onClick={handleSwitchLogin}
				>
					微信快速登录
				</div>
				<span 
					className="iconfont close" 
					onClick={handleClickCloseLog}
				>
					&#xe621;
				</span>
				<div className="logo"></div>
			</Header>
			<LoginForm/>
		</LoginContentWrapper>
	)
};

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const animStartPos = useSelector(state => state.header.login.animStartPos);
	const animStopPos = useSelector(state => state.header.login.animStopPos);
	const showMobileInput = useSelector(state => state.header.login.showMobileInput);

 	const handleClickLogFormLeft = useCallback(
 		() => dispatch(actionCreator.clickLogFormLeft()),
    	[dispatch]
  	);
 	const handleClickLogFormRight = useCallback(
 		() => dispatch(actionCreator.clickLogFormRight()),
    	[dispatch]
  	);
 	const handleClickRegInLog = useCallback(
 		() => dispatch(actionCreator.clickRegInLog()),
    	[dispatch]
  	);

	return (
		<Fragment>
			<Slider 				 
				start={animStartPos} 
				stop={animStopPos}				
			>
				<LeftInput>
					<InputEmail placeholder="请输入常用手机号/邮箱"/>
					<InputEmailPsw placeholder="请输入密码"/>
				</LeftInput>
				<RightInput>
					<InputMobile/>
					<InputVerifyCode/>
				</RightInput>
			</Slider>
			<SwitchInput>
				{
					showMobileInput ?					
					<div className="Left">
						<div 
							className="mobile" 
							onClick={handleClickLogFormLeft}
						>
							手机验证码登录
						</div>
						<div className="forgot">忘记密码?</div>
					</div>
					:				
					<div className="right">
						<div 
							className="psw"
							onClick={handleClickLogFormRight}
						>
							密码登录
						</div>
					</div>
				}
			</SwitchInput>
			<LoginBtn>登录</LoginBtn>
			<RegBtn onClick={handleClickRegInLog}>立即注册</RegBtn>
		</Fragment>
	)
};

const InputMobile = (props) => {
	const dispatch = useDispatch();
	const selectedLogCode = useSelector(state => state.header.login.selectedLogCode);
	const focusMobileNum = useSelector(state => state.header.login.focusMobileNum);
	const dropDown = useSelector(state => state.header.login.dropDown);	

 	const handleFocusMobileNum = useCallback(
 		() => dispatch(actionCreator.focusMobileNum()),
    	[dispatch]
  	);
 	const handleBlurMobileNum = useCallback(
 		() => dispatch(actionCreator.blurMobileNum()),
    	[dispatch]
  	);
 	const handleClickLogArrow = useCallback(
 		() => dispatch(actionCreator.clickLogArrow()),
    	[dispatch]
  	);

	return (
		<InputMobileWrapper>
			<SelectAreaCode				
				focus={focusMobileNum} 
				onClick={handleClickLogArrow}
			>
				{selectedLogCode}
			</SelectAreaCode>
			<Arrow 
				dropDown={dropDown} 
				onClick={handleClickLogArrow}
			>
				<span className="iconfont" >&#xe70a;</span>
			</Arrow>
			{ dropDown ? <DropDown/> : null}
			<InputMobileNum 
				onFocus={handleFocusMobileNum} 
				onBlur={handleBlurMobileNum}
				placeholder="请输入常用手机号"
			/>
		</InputMobileWrapper>
	)
};

const DropDown = (props) => {
	const dispatch = useDispatch();

 	const handleSelectedLogCode = useCallback(
 		(code) => {
 			if (code) {
 				dispatch(actionCreator.selectedLogCode(code))
 			} 			
 		},
    	[dispatch]
  	);

	return(
		<DropDownWrapper>
			{areaCode.map((item, index) => {
				return (
						<DropDownItem  
							key={index}
							disable={item.disable} 
							onClick={() => handleSelectedLogCode(item.Code)}
						>
							<span className="left">{item.area}</span>
							<span className="right">{item.Code}</span>
						</DropDownItem>
					)
					
			})}
		</DropDownWrapper>
	)
};

const InputVerifyCode = (props) => {
	const dispatch = useDispatch();
	const focusLogVeriPsw = useSelector(state => state.header.login.focusLogVeriPsw);
	
	const handleFocusLogPsw = useCallback(
 		() => dispatch(actionCreator.focusLogPsw()) 			
 		,[dispatch]
  	);
	const handleBlurLogPsw = useCallback(
 		() => dispatch(actionCreator.blurLogPsw()) 			
 		,[dispatch]
  	);

	return (
		<InputMobilePswWrapper>
			<InputMobilePsw 
				placeholder="请输入验证码" 
				onFocus={handleFocusLogPsw}
				onBlur={handleBlurLogPsw}
			/>
			<GetVerifyCode focusPsw={focusLogVeriPsw}>获取验证码</GetVerifyCode>
		</InputMobilePswWrapper>
	)
};

const WechatLogin = (props) => {
	const dispatch = useDispatch();
	const handleClickCloseLog = useCallback(
 		() => dispatch(actionCreator.clickCloseLog()) 			
 		,[dispatch]
  	);
	const handleSwitchLogin = useCallback(
 		() => dispatch(actionCreator.switchLogin()) 			
 		,[dispatch]
  	);
	const handleClickReg = useCallback(
 		() => dispatch(actionCreator.clickRegInLog()) 			
 		,[dispatch]
  	);

	return (
		<LoginContentWrapper>
			<WechatLoginContent>
				<div 
					className="wechat"
					onClick={handleSwitchLogin}
				> 
				</div>
				<div 
					className="hint"
					onClick={handleSwitchLogin}
				>
					手机密码登录
				</div>
				<span 
					className="iconfont close" 
					onClick={handleClickCloseLog}
				>
					&#xe621;
				</span>				
				<div className="login">登录</div>
				<div className="code">
					<img  src="minacode/weixin.png" alt=""/>
				</div>
				<div className="scan">
					微信扫一扫，快速登录
				</div>
				<div onClick={handleClickReg} className="register">
					立即注册
				</div>
			</WechatLoginContent>			
		</LoginContentWrapper>
	)
};

export default LonginContent;