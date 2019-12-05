import React, { Fragment, useCallback }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../store';
import { 
	RegContentWrapper,
	Header,
	SwitchInput,
	Tab,
	Slider,
	LeftInput,
	RightInput,
	InputMobileWrapper,
	SelectAreaCode,
	Arrow,
	InputMobileNum,
	DropDownWrapper,
	DropDownItem,
	InputMobilePswWrapper,
	InputMobilePsw,
	GetVerifyCode,
	RegBtn,
	LoginBtn,
	WechatRegContent
} from './styleReg';
import areaCode from "./areaCode"

const RegContent = (props) => {	
	const mobileReg = useSelector(state => state.header.reg.mobileReg);
	return (
		<Fragment>		
			{mobileReg ? <MobileReg/> : <WechatReg />}	
		</Fragment>	
	)
};

const MobileReg = (props) => {
	const dispatch = useDispatch();
 	const handleClickCloseReg = useCallback(
 		() => dispatch(actionCreator.clickCloseReg()),
    	[dispatch]
  	);
 	const handleSwitchReg = useCallback(
 		() => dispatch(actionCreator.switchReg()),
    	[dispatch]
  	);

	return (
		<RegContentWrapper >
			<Header>
				<div 
					className="wechat" 	
					onClick={handleSwitchReg}				
				>
				</div>
				<div 
					className="hint" 
					onClick={handleSwitchReg}
				>
					微信快速注册
				</div>
				<span 
					className="iconfont close" 
					onClick={handleClickCloseReg}
				>
					&#xe621;
				</span>
				<div className="logo"></div>
			</Header>
			<RegForm/>
		</RegContentWrapper>
	)
};

const RegForm = (props) => {
	const dispatch = useDispatch();
	const seekjob = useSelector(state => state.header.reg.seekjob);
	const animStartPos = useSelector(state => state.header.reg.animStartPos);
	const animStopPos = useSelector(state => state.header.reg.animStopPos);	

 	const handleClickSeekJob = useCallback(
 		() => dispatch(actionCreator.clickSeekJob()),
    	[dispatch]
  	);
 	const handleClickHiring = useCallback(
 		() => dispatch(actionCreator.clickHiring()),
    	[dispatch]
  	);
 	const handleClickLogin = useCallback(
 		() => dispatch(actionCreator.clickLoginInReg()),
    	[dispatch]
  	);

	return(
		<Fragment>
			<SwitchInput>
				<Tab 
					className="seekjob" 
					seekjob={seekjob}
					onClick={handleClickSeekJob}
				>
					找工作
				</Tab>
				<Tab 
					className="hiring" 
					seekjob={seekjob}
					onClick={handleClickHiring}
				>
					我要招人
				</Tab>
			</SwitchInput>
			<Slider
				start={animStartPos} 
				stop={animStopPos}
			>
				<LeftInput>
					<InputMobile 						
						id="left"
					/>
					<InputVerifyCode id="left"/>
				</LeftInput>
				<RightInput>
					<InputMobile 						
						id="right"
					/>
					<InputVerifyCode id="right"/>
				</RightInput>
			</Slider>
			<RegBtn>注册</RegBtn>
			<LoginBtn onClick={handleClickLogin}>直接登录</LoginBtn>
		</Fragment>
	)
}

const InputMobile = (props) => {
	const dispatch = useDispatch();
	const selectedCode = useSelector(state => state.header.reg[props.id].selectedCode);	
	const focus = useSelector(state => state.header.reg[props.id].focus);	
	const dropDown = useSelector(state => state.header.reg[props.id].dropDown);	

 	const handleFocus = useCallback(
 		(id) => dispatch(actionCreator.focusReg(id)),
 		[dispatch]
  	);
 	const handleBlur = useCallback(
 		(id) => dispatch(actionCreator.blurReg(id)),
 		[dispatch]
  	);
 	const handleClick = useCallback(
 		(id) => dispatch(actionCreator.clickRegArrow(id)),
 		[dispatch]
  	);

	return (
		<InputMobileWrapper>
			<SelectAreaCode	
			onClick={() => handleClick(props.id)} 			
			focus={focus}
			>
				{selectedCode}
			</SelectAreaCode>
			<Arrow 
			dropDown={dropDown}
			onClick={() => handleClick(props.id)} 
			>
				<span className="iconfont" >&#xe70a;</span>
			</Arrow>
			{ dropDown ? <DropDown id={props.id}/> : null}
			<InputMobileNum 
				onFocus={() => handleFocus(props.id)} 
				onBlur={() => handleBlur(props.id)}
				placeholder="请输入常用手机号"
			/>
		</InputMobileWrapper>
	)
};

const DropDown = (props) => {
	const dispatch = useDispatch();
 	const handleSelectedCode = useCallback(
 		(code, id) => {
			if (code){
			dispatch(actionCreator.selectedCode(code, id))
			}
		},[dispatch]
  	);

	return(
		<DropDownWrapper>
			{areaCode.map((item, index) => {
				return (
						<DropDownItem  
							key={index}
							disable={item.disable} 
							onClick={() => handleSelectedCode(item.Code, props.id)}
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
	const focusPsw = useSelector(state => state.header.reg[props.id].focusPsw);

 	const handleFocusPsw = useCallback(
 		(id) => dispatch(actionCreator.focusPswReg(id)),
 		[dispatch]
  	);
 	const handleBlurPsw = useCallback(
 		(id) => dispatch(actionCreator.blurPswReg(id)),
 		[dispatch]
  	);

	return (
		<InputMobilePswWrapper>
			<InputMobilePsw 
				placeholder="请输入验证码" 
				onFocus={() => handleFocusPsw(props.id)}
				onBlur={() => handleBlurPsw(props.id)}
			/>
			<GetVerifyCode focusPsw={focusPsw}>获取验证码</GetVerifyCode>
		</InputMobilePswWrapper>
	)
};

const WechatReg = (props) => {
	const dispatch = useDispatch();
 	const handleClickClose = useCallback(
 		(id) => dispatch(actionCreator.clickCloseReg(id)),
 		[dispatch]
  	);
 	const handleSwitchReg = useCallback(
 		(id) => dispatch(actionCreator.switchRegInWechat(id)),
 		[dispatch]
  	);
 	const handleClickLogin = useCallback(
 		(id) => dispatch(actionCreator.clickLoginInWechat(id)),
 		[dispatch]
  	);

	return (
		<RegContentWrapper>
			<WechatRegContent>
				<div 
					className="wechat"
					onClick={handleSwitchReg}
				> 
				</div>
				<div 
					className="hint"
					onClick={handleSwitchReg}
				>
					手机号码注册
				</div>
				<span 
					className="iconfont close" 
					onClick={handleClickClose}
				>
					&#xe621;
				</span>				
				<div className="reg">注册</div>
				<div className="code">
					<img  src="minacode/weixin.png" alt=""/>
				</div>
				<div className="scan">
					微信快速注册
				</div>
				<div className="login" onClick={handleClickLogin}>
					直接登录
				</div>
			</WechatRegContent>			
		</RegContentWrapper>
	)
}

export default RegContent;