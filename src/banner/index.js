import React, { Component } from 'react';
import {  
	BannerWrapper,
} from './style';
import Sidebar from './sidebar';
import Slideshow from './slideshow';


class Banner extends Component {
	render(){
		return (			
			<BannerWrapper>
				<Sidebar/>
				<Slideshow/>
			</BannerWrapper>					
			
		)
	}
}

export default Banner;