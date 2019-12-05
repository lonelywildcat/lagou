import styled from 'styled-components';

export const JobWrapper = styled.div`
	margin: 0 0 0 20px;
	width: 1263px;
	overflow: hidden;
`;

export const TabWrapper = styled.div`	
	width: 1225px;
	overflow: hidden;
	border-bottom: 1px solid #E8E8E8;
	margin-bottom: 30px;
`;

export const Tab = styled.div`	
	margin-right: 34px;
	float: left;	
	height: 22px;	
	padding: 14px 0;
	cursor: pointer;	
	&.hot{
		width: 90px;
		color: ${props => props.active === "hot" ? "" : "#999"};
		border-bottom: ${props => props.active === "hot" ? "2px solid #000" : ""};
	}
	&.new{
		width: 64px;
		color: ${props => props.active === "new" ? "" : "#999"};
		border-bottom: ${props => props.active === "new" ? "2px solid #000" : ""};
	} 	
`;

export const JobListItemWrapper = styled.div`	
	width: 389px;
	height: 200px;
	float: left;	
	margin-left: 4px;	
	border: 1px solid #EAEEED;
	margin-right: 20px;
	margin-bottom: 20px;
	&:hover{
		border: 1px solid white;
		box-shadow: 0 0 4px 2px rgba(0,0,0,.09);
	}
`;

export const JobListTop = styled.div`	
	width: 370px;	
	height: 105px;
	margin-left: 18px;
	border-bottom: 1px dashed #E0E0E0;
`;

export const Headline = styled.div`	
	margin-top: 20px
	width: 360px;
	height: 20px;	
	line-height: 18px;
	.position{
		float: left;
		color: #333;
		padding-right: 12px;
		font-size: 16px;
		text-decoration:none 
	}
	.time {
		float: left;
		color: #999;
		font-size: 14px;
		line-height: 18px;
		padding-right: 12px;
	}
	.hr{
		position: relative;
		float: left;
		display: inline-block;
	}
	.iconfont{				
		cursor: pointer;
		color: #00b38a;
		line-height: 18px;
		font-size: 18px;
	}
	.salary{
		float: right;
		color: #fa6041;
		line-height: 18px;
		font-size: 16px;
	}
`;

export const Requirement = styled.div`		
	font-size: 14px;
	color: #777;
	margin-top: 12px;
`;

export const Label = styled.div`	
	overflow: hidden;
	margin-top: 14px;	
	font-size: 14px;	
	.label{
		display: inline-block;		
		color: #999;
		padding: 4px 12px;
		margin: 0 12px 5px 0;
		border: 1px solid #F0F0F0;
	}
`;

export const JobListBottom = styled.div`	
	width: 350px;
	overflow: hidden;
	.logo{
		display: inline-block;
		margin-top: 14px;
		margin-left: 14px;
	}
	.img{
		width: 40px;
		height: 40px;
	}
	.companyInfo{
		display: inline-block;
		margin-left: 12px;
	}
	.company{
		font-size: 14px;
		padding: 12px 0;
		color: #555;
	}
	.introduction{
		font-size: 14px;
		color: #999;
	}
`;

export const HrInfoCombine = styled.div`
	display: ${props => props.show ? "initial" : "none"};
`;

export const HrInfoWrapper = styled.div`			
	width: 344px;
	height: 168px;
	background-color: white;
	position: absolute;
	top: -30px;
	left: ${props => ((props.index + 1) % 3 !== 0 ? "40px" : "-375px")};
	border: 1px solid #dce4e6;
	z-index: 1;
`;

export const HrInfoArrow = styled.div`		
	width: 14px;
	height: 14px;
	background-color: white;
	position: absolute;
	top: 0px;
	left: ${props => ((props.index + 1) % 3 !== 0 ? "32px" : "-37px")};
	border-bottom: ${props => ((props.index + 1) % 3 !== 0 ? "1px solid #dce4e6" : "")};
	border-left: ${props => ((props.index + 1) % 3 !== 0 ? "1px solid #dce4e6" : "")};
	border-top: ${props => ((props.index + 1) % 3 !== 0 ? "" : "1px solid #dce4e6")};
	border-right: ${props => ((props.index + 1) % 3 !== 0 ? "" : "1px solid #dce4e6")};
	z-index: 2;
	transform: rotate(45deg);	
`;

export const HrinfoContent = styled.div`
	width: 198px;
	height: 168px;
	overflow: hidden;		
	.avatar{
		display: block;		
		position: absolute;
		left: 14px;
		top: 14px;
		width: 66px;
		height: 66px;
		border-radius: 50%;
	}
	.hr{
		position: absolute;
		top: 16px;
		left: 96px;
	    font-size: 18px;
	    line-height: 30px;
	    color: #333;
	}
	.title{
		position: absolute;
		top: 46px;
		left: 96px;
	    font-size: 14px;
	    line-height: 24px;
	    color: #666;
	}
	.minacode{
		position: absolute;
		top: 25px;
		left: 208px;
		width: 118px;
		height: 118px;
	}
	.hi{
		position: absolute;
	    font-size: 14px;
        color: #333;
        width: 192px;
        left: 14px;
        top: 92px;
	}
`;

export const MoreBtn = styled.a.attrs({
	href: "https://www.lagou.com/zhaopin/",
	target: "_blank"
})`
	float: left;
	position: relative;
	left: 33%;			
    display: block;
    width: 387px;
    height: 42px;
    line-height: 42px;
    margin: 0 auto 0;
    background: #FFF;
    border: 1px solid #00B38A;
    font-size: 16px;
    color: #00b38a;
    text-align: center;
    transition: background .3s,color .1s;
    text-decoration: none;    
    &:hover{
    	background: #00B38A;
    	color: #fff;
    }
`;