export const showCity = () => ({
		type: "SHOW_CITY",
});

export const clickLogin = () => ({
		type: "CLICK_LOGIN",
});

export const clickReg = () => ({
		type: "CLICK_REG",
});

export const clickCloseLog = () => ({
		type: "CLICK_CLOSE_LOG",
});

export const clickSwitchLogin = () => ({
		type: "SWITCH_LOGIN",
});

export const clickLogFormLeft = () => ({
		type: "CLICK_LOG_FORM_LEFT",
});

export const clickLogFormRight = () => ({
		type: "CLICK_LOG_FORM_RIGHT",
});

export const clickRegInLog = () => ({
		type: "CLICK_REG_IN_LOG",
});

export const focusMobileNum = () => ({
		type: "FOCUS_MOBILE_NUM",
});

export const blurMobileNum = () => ({
		type: "BLUR_MOBILE_NUM",
});

export const clickLogArrow = () => ({
		type: "CLICK_LOG_ARROW",
});

export const selectedLogCode = (code) => ({
		type: "SELECTED_LOG_CODE",
		code
});

export const focusLogPsw = () => ({
		type: "FOCUS_LOG_PSW",
});

export const blurLogPsw = () => ({
		type: "BLUR_LOG_PSW",
});

export const switchLogin = () => ({
		type: "SWITCH_LOGIN_TO_MOBILE",		
});

export const clickCloseReg = () => ({
		type: "CLICK_CLOSE_REG",		
});

export const switchReg = () => ({
		type: "SWITCH_REG",		
});

export const clickSeekJob = () => ({
		type: "CLICK_SEEK_JOB",		
});

export const clickHiring = () => ({
		type: "CLICK_HIRING",		
});

export const focusReg = (id) => ({
		type: "FOCUS_REG",	
		id	
});

export const blurReg = (id) => ({
		type: "BLUR_REG",	
		id	
});

export const clickRegArrow = (id) => ({
		type: "CLICK_REG_ARROW",	
		id	
});

export const selectedCode = (code, id) => ({
		type: "SELECTED_CODE_REG",	
		code,
		id	
});

export const focusPswReg = (id) => ({
		type: "FOCUS_PSW_REG",			
		id	
});

export const blurPswReg = (id) => ({
		type: "BLUR_PSW_REG",			
		id	
});

export const switchRegInWechat = () => ({
		type: "SWITCH_REG_IN_WECHAT",
});

export const clickLoginInReg = () => ({
		type: "CLICK_LOGIN_IN_REG",
});

