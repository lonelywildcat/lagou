import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from './store';
import { 
	HeaderWrapper,
	Logo,
	SuggestCity,
	NavBarMiddle,
	NavItem,
	NavBarRight,
	Passport,
	PassportIcon,
	PassportItem,
	AppDownload,
	AppIcon,
} from './style';
import PopupCity from './popupCity';
import PopupLoginAndReg from './popupLogAndReg';

const Header =(props) => {
	const dispatch = useDispatch();

	const showCity = useSelector(state => state.header.showCity);
	const showLogAndReg = useSelector(state => state.header.showLogAndReg);

 	const handleClickCity = useCallback(
 		() => dispatch(actionCreator.showCity()),
    	[dispatch]
  	);
 	const handleClickLogin = useCallback(
 		() => dispatch(actionCreator.clickLogin()),
    	[dispatch]
  	);
  	const handleClickReg = useCallback(
 		() => dispatch(actionCreator.clickReg()),
    	[dispatch]
  	);

	return (
		<HeaderWrapper>
			<Logo/>
			<SuggestCity>
				<span>全国站</span>
				<em 
					className="switch" 
					onClick={handleClickCity}
				>
					[切换城市]
				</em>										
			</SuggestCity>
			<NavBarMiddle>
				<NavItem className="active">首页</NavItem>
				<NavItem href="https://www.lagou.com/gongsi/">公司</NavItem>
				<NavItem href="https://xiaoyuan.lagou.com/">校园</NavItem>
				<NavItem href="https://yanzhi.lagou.com/">言职</NavItem>
				<NavItem href="https://kaiwu.lagou.com/">课程</NavItem>					
			</NavBarMiddle>					
			<NavBarRight> 
				<Passport>
					<PassportIcon/>
					<PassportItem onClick={handleClickLogin}>登录</PassportItem>
					<PassportItem className="span">|</PassportItem>
					<PassportItem onClick={handleClickReg}>注册</PassportItem>
				</Passport>
				<AppDownload href="https://www.lagou.com/app/download.html">
					<AppIcon className="icon"/>
					<span className="text">拉勾APP</span>
				</AppDownload>
				<NavItem href="https://easy.lagou.com/dashboard/index.htm?from=c_index">进入企业版</NavItem>
			</NavBarRight>
			<PopupCity showCity={showCity} handleClickCity={handleClickCity}/>
			<PopupLoginAndReg showLogAndReg={showLogAndReg}/>
		</HeaderWrapper>
	)	
} 

export default Header;