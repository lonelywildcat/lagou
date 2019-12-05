import React , { Component } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { 
	TabWrapper, 
	Tab
} from './style';

class JobTab extends Component {
	render() {
		const { activeTab, clickTab } = this.props;					
		return (
			<TabWrapper>
				<Tab 
					className='hot' 
					active={activeTab} 
					onClick={clickTab('hot')}
				>
					24Hour热门
				</Tab>
				<Tab 
					className='new' 
					active={activeTab}  
					onClick={clickTab('new')}
				>
					最新职位
				</Tab>
			</TabWrapper>
		)

	}
}

const mapState = (state) => {
	return {
		activeTab: state.job.activeTab
	}
};

const mapDispatch = (dispatch) => {
	return {
		clickTab: (tab) => () => dispatch(actionCreators.clickTab(tab))		
	}
}

export default connect(mapState, mapDispatch)(JobTab);