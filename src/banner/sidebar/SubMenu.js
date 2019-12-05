import React, { Component } from 'react';
import {
	SubMenuWrapper,
	SidebarSubMenuItem,
	SidebarSubMenuTitle,
	SidebarSubMenuListWrapper,
	SidebarSubMenuList,
} from './style';

class SubMenu extends Component{
	render() {
		const { data } = this.props;
		return (
			<SubMenuWrapper>				
				{data.map((item, index) => {
					return <SubMenuItem data={item} key={index}/>
				})}
			</SubMenuWrapper>
		)
	}
};

class SubMenuItem extends Component{
	render() {
		const { title, list } = this.props.data;				
		return (
			<SidebarSubMenuItem>
				<SidebarSubMenuTitle>{title}</SidebarSubMenuTitle>
				<SidebarSubMenuListWrapper>
				{list.map((item, index, array) =>
					<SidebarSubMenuList key={index} href={item.href}>
					 	{item.text}
					 	{index === array.length - 1  ? "" : <span className="span">|</span> } 
					</SidebarSubMenuList>)} 
				</SidebarSubMenuListWrapper>
			</SidebarSubMenuItem>

		)
	}
};

export default SubMenu;