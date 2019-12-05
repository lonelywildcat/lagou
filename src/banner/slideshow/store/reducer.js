import produce from "immer";

const iniState = {
	button: "right",
	currentPic: 1,
	startAt: -840,
	stopAt: -1680,
	lastAnimationTime: 0,
}

const jumpTo = (currentPic) => {
	if (currentPic === 5) {
		return 1
	}
	if (currentPic === 0) {
		return 4
	}
	return currentPic;
}

const calStartAt = (currentPic) => {
	return currentPic * (-840)
}

const calStopAt = (button, currentPic) => {
	if (button === "left") {
		return (currentPic - 1 ) * (-840)
	}
	if (button === "right") {
		return (currentPic + 1 ) * (-840)
	}
	if (typeof button === "number") {
		return button * (-840)
	}
}

const changeCurrentPic = (button, currentPic) => {
	if (button === "left"){
		return jumpTo(currentPic - 1);
	}
	if (button === "right"){
		return jumpTo(currentPic + 1);
	}
	if (typeof button === "number"){
		return jumpTo(button);
	}
}

const reducer = (state = iniState, action) => {
	switch(action.type) {
		case "MOUSE_CLICK":						
			return produce(state, draft => {
				draft.startAt = calStartAt(state.currentPic);
				draft.stopAt = calStopAt(action.button, state.currentPic);
				draft.button = action.button;
			})
		case "ANIMATION_FINISHED":						
			return produce(state, draft => {
				draft.currentPic = changeCurrentPic(state.button, state.currentPic);
				draft.lastAnimationTime = new Date();			
			})
		case "SELECT_SLIDE":						
			return produce(state, draft => {
				draft.button = action.button;
				draft.startAt = calStartAt(state.currentPic);
				draft.stopAt = calStopAt(action.button, state.currentPic);
			})
		default:
			return state;
	}
}

export default reducer;