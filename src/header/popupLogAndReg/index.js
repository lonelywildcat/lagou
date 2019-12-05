import React from 'react';
import { useSelector } from 'react-redux';
import { 
	PopupLogAndReg,
	ContentWrapper
} from './style';
import LoginContent from './LoginContent'
import RegContent from './RegContent'

const PopupLoginAndReg = (props) => {	
	const logOrReg = useSelector(state => state.header.logOrReg);
	return (				
		<PopupLogAndReg showLogAndReg={props.showLogAndReg}>
			<ContentWrapper>				
				{logOrReg === "login" ? <LoginContent/> : null}
				{logOrReg === "reg" ? <RegContent/> : null}
			</ContentWrapper>
		</PopupLogAndReg>
	)
};

export default PopupLoginAndReg;