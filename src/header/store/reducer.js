import produce from 'immer';

const iniState = {
	showCity: false,
	showLogAndReg: false,
	logOrReg: "",
	login:{
		mobileLogin: true,
		animStartPos: 0,
		animStopPos: 0,
		selectedLogCode: "0086",
		showMobileInput: true,
		focusMobileNum: false,
		dropDown: false,
		focusLogVeriPsw: false,
	},
	reg:{
		mobileReg: true,
		seekjob: true,
		animStartPos: 0,
		animStopPos: 0,
		left: {
			selectedCode:"0086",
			focus: false,
			dropDown: false,
			focusPsw: false,
		},
		right: {
			selectedCode:"0086",
			focus: false,
			dropDown: false,
			focusPsw: false,
		}
	}
};

const resetLoginAnim = (state, draft) => {
	if (state.login.animStopPos === 0) {
		draft.login.animStartPos = 0;
		draft.login.animStopPos = 0;
	} else {
		draft.login.animStartPos = -440;
		draft.login.animStopPos = -440;
	}
}
const resetRegAnim = (state, draft) => {
	if (state.reg.animStopPos === 0) {
		draft.reg.animStartPos = 0;
		draft.reg.animStopPos = 0;
	} else {
		draft.reg.animStartPos = -440;
		draft.reg.animStopPos = -440;
	}
}

const reducer = (state = iniState, action) => {
	switch (action.type) {
		case "SHOW_CITY":
			return produce( state, draft => {
				draft.showCity = !state.showCity;
			})
		case "CLICK_LOGIN":
			return produce( state, draft => {
				draft.showLogAndReg = true;
				draft.logOrReg = "login"
			})
		case "CLICK_REG":
			return produce( state, draft => {
				draft.showLogAndReg = true;
				draft.logOrReg = "reg"
			})
		case "CLICK_CLOSE_LOG":
			return produce( state, draft => {
				draft.showLogAndReg = false;
				resetLoginAnim(state, draft); 
			})
		case "SWITCH_LOGIN":
			return produce( state, draft => {
				draft.login.mobileLogin = false;
				resetLoginAnim(state, draft);
			})
		case "CLICK_LOG_FORM_LEFT":
			return produce( state, draft => {
				draft.login.showMobileInput = false;
				draft.login.animStartPos = 0;
				draft.login.animStopPos = -440;
			})
		case "CLICK_LOG_FORM_RIGHT":
			return produce( state, draft => {
				draft.login.showMobileInput = true;
				draft.login.animStartPos = -440;
				draft.login.animStopPos = 0;
			})
		case "CLICK_REG_IN_LOG":
			return produce( state, draft => {
				draft.logOrReg = "reg";
				resetLoginAnim(state, draft);
			})
		case "FOCUS_MOBILE_NUM":
			return produce( state, draft => {
				draft.login.focusMobileNum = true;
				draft.login.dropDown = false;
			})
		case "BLUR_MOBILE_NUM":
			return produce( state, draft => {
				draft.login.focusMobileNum = false;				
			})
		case "CLICK_LOG_ARROW":
			return produce( state, draft => {
				draft.login.dropDown = !state.login.dropDown;				
			})
		case "SELECTED_LOG_CODE":
			return produce( state, draft => {
				draft.login.selectedLogCode = action.code;	
				draft.login.dropDown = false;			
			})
		case "FOCUS_LOG_PSW":
			return produce( state, draft => {				
				draft.login.focusLogVeriPsw = true;			
			})
		case "BLUR_LOG_PSW":
			return produce( state, draft => {				
				draft.login.focusLogVeriPsw = false;			
			})
		case "SWITCH_LOGIN_TO_MOBILE":
			return produce( state, draft => {				
				draft.login.mobileLogin = true;			
			})
		case "CLICK_CLOSE_REG":
			return produce( state, draft => {
				draft.showLogAndReg = false;
				resetRegAnim(state, draft);
			})
		case "SWITCH_REG":
			return produce( state, draft => {
				draft.reg.mobileReg = false;
				resetRegAnim(state, draft);
			})
		case "CLICK_SEEK_JOB":
			return produce( state, draft => {
				draft.reg.seekjob = true;
				draft.reg.animStartPos = -440;
				draft.reg.animStopPos = 0;
			})
		case "CLICK_HIRING":
			return produce( state, draft => {
				draft.reg.seekjob = false;
				draft.reg.animStartPos = 0;
				draft.reg.animStopPos = -440;
			})
		case "FOCUS_REG":
			return produce( state, draft => {
				draft.reg[action.id].focus = true;
				draft.reg[action.id].dropDown = false;
			})
		case "BLUR_REG":
			return produce( state, draft => {
				draft.reg[action.id].focus = false;				
			})
		case "CLICK_REG_ARROW":
			return produce( state, draft => {
				draft.reg[action.id].dropDown = !state.reg[action.id].dropDown;				
			})
		case "SELECTED_CODE_REG":
			return produce( state, draft => {
				draft.reg[action.id].selectedCode = action.code;				
				draft.reg[action.id].dropDown = false;				
			})
		case "FOCUS_PSW_REG":
			return produce( state, draft => {					
				draft.reg[action.id].focusPsw = true;				
			})
		case "BLUR_PSW_REG":
			return produce( state, draft => {					
				draft.reg[action.id].focusPsw = false;				
			})
		case "SWITCH_REG_IN_WECHAT":
			return produce( state, draft => {					
				draft.reg.mobileReg = true;				
			})
		case "CLICK_LOGIN_IN_REG":
			return produce( state, draft => {					
				draft.logOrReg = "login";
				resetRegAnim(state, draft);				
			})
		default:
			return state;
	}
}

export default reducer;