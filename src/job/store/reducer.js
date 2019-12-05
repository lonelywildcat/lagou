import produce from "immer";

const iniState = {
	"activeTab": "hot",
	"hotJob": [],
	"newJob": []
}

const reducer = (state = iniState, action) => {	
	switch (action.type) {
		case "CLICK_TAB":
			return produce(state, draft => {
			 	draft.activeTab = action.activeTab
			})
		case "MOUSE_ENTER_HR_ICON":	
			if (state.activeTab === "hot"){
				return produce(state, draft => {
					draft.hotJob[action.index].enterIcon = true;			 	
				})
			} else if (state.activeTab === "new") {
				return produce(state, draft => {
					draft.newJob[action.index].enterIcon = true;			 	
				})
			}
			break;
		case "MOUSE_LEAVE_HR_ICON":			
			if (state.activeTab === "hot"){
				return produce(state, draft => {
					draft.hotJob[action.index].enterIcon = false;			 	
				})
			} else if (state.activeTab === "new") {
				return produce(state, draft => {
					draft.newJob[action.index].enterIcon = false;			 	
				})
			}
			break;
		case "MOUSE_ENTER_HR_INFO":	
			if (state.activeTab === "hot"){
				return produce(state, draft => {
					draft.hotJob[action.index].enterInfo = true;			 	
				})
			} else if (state.activeTab === "new"){
				return produce(state, draft => {
					draft.newJob[action.index].enterInfo = true;			 	
				})
			}
			break;
		case "MOUSE_LEAVE_HR_Info":			
			if (state.activeTab === "hot"){
				return produce(state, draft => {
					draft.hotJob[action.index].enterInfo = false;			 	
				})
			} else if (state.activeTab === "new"){
				return produce(state, draft => {
					draft.newJob[action.index].enterInfo = false;			 	
				})
			}
			break;
		case "GET_JOB_DATA":
			return produce(state, draft => {
				draft.hotJob = action.content.hotJob;
				draft.newJob = action.content.newJob;
			})						
		default:
			return state;
	}
}

export default reducer;