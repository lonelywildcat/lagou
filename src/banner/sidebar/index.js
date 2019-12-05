import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  
	SidebarWrapper,
} from './style';
import Menu from './Menu'

class Sidebar extends Component {
	render() {		
		return (			
			<SidebarWrapper>
				{this.props.data.map((item, index) => {
					return (
						<Menu data={item} key={index} id={item.id} />
					)
				})}
			</SidebarWrapper>
		)
	}
};

const mapState = (state) => {
	return {
		data: state.sidebar
	};
};

export default connect(mapState, null)(Sidebar);