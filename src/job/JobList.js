import React , { Fragment, Component } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { 
	JobListItemWrapper,
	JobListTop,
	Headline,
	Requirement,
	Label,
	JobListBottom,
	HrInfoWrapper,
	HrInfoArrow,
	HrInfoCombine,
	HrinfoContent
} from './style';


class JobList extends Component {
	componentDidMount() {
		this.props.getJobData();
	}	
	render() {
		let renderData;
		if (this.props.data.activeTab === "hot"){
			renderData = this.props.data.hotJob;
		} else if (this.props.data.activeTab === "new"){
			renderData = this.props.data.newJob;
		}		
		const { handleMouseEnterIcon, handleMouseLeaveIcon, handleMouseEnterInfo, handleMouseLeaveInfo } = this.props;
		return (
			<Fragment>
				{renderData.map((item, index) => {
					return (
						<JobListItem 
							data={item} 
							key={index} 
							index={index}
							handleMouseEnterIcon={handleMouseEnterIcon}
							handleMouseLeaveIcon={handleMouseLeaveIcon}
							handleMouseEnterInfo={handleMouseEnterInfo}
							handleMouseLeaveInfo={handleMouseLeaveInfo}
						/>)

				})}
			</Fragment>
		)
	}		
}

const JobListItem = (props) => {	
	const { position, time, salary, label, requirement, href, logo, company, introduction,
			 enterIcon, enterInfo, avatar, hr, title, minacode } = props.data;
	const { handleMouseEnterIcon, handleMouseLeaveIcon, handleMouseEnterInfo, handleMouseLeaveInfo } = props;
	return (	
		<JobListItemWrapper>
			<JobListTop>
				<Headline>
					<a className="position" href={href}>{position}</a>
					<span className="time">{"[" + time +"发布]"}</span>
					<div className="hr">
						<span 
							className="iconfont"
							onMouseEnter={handleMouseEnterIcon(props.index)}
							onMouseLeave={handleMouseLeaveIcon(props.index)}
						>
							&#xe62d;
						</span>							
						<HrInfo 
							show={enterInfo || enterIcon}
							index={props.index}
							avatar={avatar}
							hr={hr}
							title={title}
							minacode={minacode}
							handleMouseEnterInfo={handleMouseEnterInfo}
							handleMouseLeaveInfo={handleMouseLeaveInfo}
						/> 							
					</div>				
					<span className="salary">{salary}</span>
				</Headline>
				<Requirement>{requirement}</Requirement>
				<Label>
					{label.map((item, index) =>{
						return <span className="label" key={index}>{item}</span>
					})}
				</Label>
			</JobListTop>
			<JobListBottom>
				<a className="logo" href={href}>
					<img className="img" src={logo} alt=""/>
				</a>
				<div className="companyInfo">
					<div className="company">{company}</div>
					<div className="introduction">{introduction}</div>
				</div>
			</JobListBottom>
			
		</JobListItemWrapper>
	)
}

const HrInfo = (props) => {
	const {index, show, avatar, hr, title, minacode, handleMouseEnterInfo, handleMouseLeaveInfo } = props;
	return (
		<HrInfoCombine
			onMouseEnter={handleMouseEnterInfo(index)}
			onMouseLeave={handleMouseLeaveInfo(index)}
			show={show}
		>
			<HrInfoWrapper index={index}>
				<HrinfoContent>
					<img className="avatar" src={avatar} alt=""/>
					<div className="hr">{hr}</div>
					<div className="title">{title}</div>
					<img className="minacode" src={minacode} alt=""/>
					<div className="hi">Hi，对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！</div>
				</HrinfoContent>
			</HrInfoWrapper>
			<HrInfoArrow index={index}/>
		</HrInfoCombine>
	)
}

const mapState = (state) => {
	return {
		data: state.job		
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleMouseEnterIcon : (index) => () => dispatch(actionCreators.mouseEnterIcon(index)),
		handleMouseLeaveIcon : (index) => () => dispatch(actionCreators.mouseLeaveIcon(index)),
		handleMouseEnterInfo : (index) => () => dispatch(actionCreators.mouseEnterInfo(index)),
		handleMouseLeaveInfo : (index) => () => dispatch(actionCreators.mouseLeaveInfo(index)),
		getJobData: () => dispatch(actionCreators.getJobData())
	}
}

export default connect(mapState, mapDispatch)(JobList);