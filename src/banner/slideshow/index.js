import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {  
	SlideShowWrapper,
	SlidePic,
	Slider,
	Indicators,
	Dot
} from './style';
import slide01 from '../../static/slideshow/s1.jpg'
import slide02 from '../../static/slideshow/s2.jpg'
import slide03 from '../../static/slideshow/s3.jpg'
import slide04 from '../../static/slideshow/s4.jpg'

class SlideShow extends Component{

	componentDidMount() {
		this.slideInterval = setInterval(this.autoSlide, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.slideInterval);
	}

	autoSlide = () => {
		if (new Date() - this.props.lastAnimationTime < 3000) {
			return;
		}
		this.props.handleClick("right")();
	}

	handleMouseEnter = () => {
		clearInterval(this.slideInterval);
	}

	handleMouseLeave = () => {
		this.slideInterval = setInterval(this.autoSlide, 3000);		
	}

	render() {		
		const { currentPic, handleClick, startAt, stopAt, handleAnimationFinished, selectSlide } = this.props;
		return (
			<SlideShowWrapper 
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<Slider  startAt={startAt} stopAt={stopAt} onAnimationEnd={handleAnimationFinished}>
					<SlidePic img={slide04}/>
					<SlidePic img={slide01}/>
					<SlidePic img={slide02}/>
					<SlidePic img={slide03}/>
					<SlidePic img={slide04}/>
					<SlidePic img={slide01}/>
				</Slider>
				<span className="iconfont left" onClick={handleClick("left")} >&#xe70a;</span>
				<span className="iconfont right" onClick={handleClick("right")} >&#xe70a;</span>
				<Indicators>
					<Dot className="dot" currentPic={currentPic} id = "1" onClick={selectSlide(1)}></Dot> 
					<Dot className="dot" currentPic={currentPic} id = "2" onClick={selectSlide(2)}></Dot> 
					<Dot className="dot" currentPic={currentPic} id = "3" onClick={selectSlide(3)}></Dot> 
					<Dot className="dot" currentPic={currentPic} id = "4" onClick={selectSlide(4)}></Dot> 
				</Indicators>
			</SlideShowWrapper>
		)
	}
}

const mapState = (state) => {
	return {		
		currentPic: state.slideshow.currentPic,			
		startAt: state.slideshow.startAt,
		stopAt: state.slideshow.stopAt,
		lastAnimationTime: state.slideshow.lastAnimationTime,
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleClick: (button) => () => dispatch(actionCreators.click(button)),			
		handleAnimationFinished: () => dispatch(actionCreators.animationFinished()),
		selectSlide: (slide) => () => dispatch(actionCreators.selectSlide(slide)) 
	}
}

export default connect(mapState, mapDispatch)(SlideShow);