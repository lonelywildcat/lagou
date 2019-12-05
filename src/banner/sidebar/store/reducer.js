import produce from "immer";
import menuContents from "./menuContents";

const iniState = menuContents;
const calculateIndex = (id) => {
	return Number(id.slice(4)) - 1
}

const reducer = (state = iniState, action) => {
	switch(action.type) {
		case "MOUSE_ENTER":						
			return produce(state, draft => {
				draft[calculateIndex(action.id)].active = true;
			})
		case "MOUSE_LEAVE":
			return produce(state, draft => {
				draft[calculateIndex(action.id)].active = false;
			})	
		default:
			return state;
	}
};
export default reducer;