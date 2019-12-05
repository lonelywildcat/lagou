import React from 'react';
import { 
	PopupCityWrapper,
	Content,
	SiteList,
	SiteBtn,
	SiteBtnActive
} from './style';


const PopupCity = (props) => {
	return(
		<PopupCityWrapper showCity={props.showCity}>
			<Content>
				<div className="title">
					<span className="switch">切换城市</span>
					<span 
						className="iconfont close" 
						onClick={props.handleClickCity}
					>
						&#xe621;
					</span>
				</div>
				<div className="greeting"> 
					<div className="line1">
						亲爱的用户您好：
					</div>
					<div className="line2">
						切换城市分站，让我们为您提供更准确的职位信息。
					</div>
				</div>
				<SiteList>
					<div className="info">
						<span>点击进入</span>
						<SiteBtnActive>全国站</SiteBtnActive>
						<span>or&nbsp;切换到以下城市</span>	
					</div>
					<div className="list">
						<SiteBtn>北京站</SiteBtn>
						<SiteBtn>上海站</SiteBtn>
						<SiteBtn>杭州站</SiteBtn>
						<SiteBtn>广州站</SiteBtn>
						<SiteBtn>深圳站</SiteBtn>
						<SiteBtn>成都站</SiteBtn>
						<SiteBtn>武汉站</SiteBtn>
						<SiteBtn>江苏站</SiteBtn>
					</div>
					<div className="footer">
						其他城市正在开通中，敬请期待～
					</div>
				</SiteList>
			</Content>
		</PopupCityWrapper>
	)
}

export default PopupCity;