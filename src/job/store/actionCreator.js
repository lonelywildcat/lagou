import axios from 'axios';

export const clickTab = (tab) => ({
		type: "CLICK_TAB",
		activeTab: tab		
});

export const mouseEnterIcon = (index) => ({
		type: "MOUSE_ENTER_HR_ICON",
		index		
});

export const mouseLeaveIcon = (index) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({
					type: "MOUSE_LEAVE_HR_ICON",
					index		
				})
		}, 200)
	}
}

export const mouseEnterInfo = (index) => ({
		type: "MOUSE_ENTER_HR_INFO",
		index		
});

export const mouseLeaveInfo = (index) => ({
		type: "MOUSE_LEAVE_HR_Info",
		index		
});

export const getJobData = () => {
	return (dispatch) => {
		axios.get('/api/job.json')
		.then((res) => {
			dispatch({
				type: "GET_JOB_DATA",
				content: res.data
			})
		})
	}
};
	

