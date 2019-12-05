import React, { Component, Fragment } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
	SidebarMenu,
	SidebarMenuTitle,
	SidebarMenuList,
} from './style';
import SubMenu from './SubMenu';

class Menu extends Component{
	render() {
		const {data, id, handleMouseEnter, handleMouseLeave} = this.props;		
		return (
			<SidebarMenu 
				onMouseEnter={handleMouseEnter(id)}
				onMouseLeave={handleMouseLeave(id)} 
				active={data.active}
			>
				<SidebarMenuTitle className="title">{data.title}</SidebarMenuTitle>
				<MenuList list={data.list} />
				<span className="iconfont">&#xe70a;</span>
				{data.active ? <SubMenu data={data.submenu}/> : null}
			</SidebarMenu>
		)
	}
};

class MenuList extends Component{
	render() {		
		return(
			<Fragment>			
				{this.props.list.map((item, index) => {
					return (
						<SidebarMenuList className="list" key={index} href={item.href}>
							{item.text}
						</SidebarMenuList>
					)
				})}
			</Fragment>			
		)
	}
};

const mapDispatch = (dispatch) => {	
	return {		
		handleMouseEnter: (id) => () => dispatch(actionCreators.mouseEnter(id)),
		handleMouseLeave: (id) => () => dispatch(actionCreators.mouseLeave(id))
	}
};

export default connect(null, mapDispatch)(Menu);