import React , { Component } from 'react';
import { JobWrapper, MoreBtn } from './style';
import JobTab from './JobTab';
import JobList from './JobList';

class Job extends Component{
	render(){
		return(
			<JobWrapper>
				<JobTab />
				<JobList />
				<MoreBtn >查看更多</MoreBtn>
			</JobWrapper>
		)
	}
}

export default Job;