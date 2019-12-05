import React, { useState }  from 'react';
import { 
	LinksWrapper, 
	TabWrapper, Tab, 
	ContentWrapper, 
	LinksList, 
	Expansion,
	LinkItem 
} from './style';

const linkListContent = [
	"拉勾网", "教师网", "招聘app","下载", "求职网站", "java课", "架构课", 
	"招聘系统", "中大网校", "教师招聘", "人人都是产品经理", "新疆人才网", 
	"研究报告", "互联网的一些事", "人才招聘网", "互联网的一些事", "人才招聘网",
	"找工作", "中国考试网", "生意经商业", "百科装修效果图", "招聘网", "中华考试网",
	"杭州招聘", "上海招聘", "法律咨询", "徐州英才网", "考研网", "语文学习网", 
	"智联招聘", "职业圈", "股城财经", "法律咨询网", "兼职吧", "招聘网","爱问共享资料",
	"百姓网", "招聘", "会计网", "服装人才网", "创意服务外包","西陆军事", "中公公务员网",
	"校找工作", "招聘网", "前瞻网", "安徽招聘网", "台州人才网", "教师网", "苏州人才网",
	 "苏州人才网", "教师网", "重庆人才网", "中国会计网", "齐鲁人才网", "邮编生活网",
	 "义乌人才网", "培训网", "更多"]

const Links = (props) => {
	const [expand, setExpand] = useState(false);
	const handleClick = () => {
		expand ? setExpand(false) : setExpand(true)
	}
	return (
		<LinksWrapper>
			<TabWrapper>
				<Tab >友情链接</Tab>
			</TabWrapper>
			<ContentWrapper>
				<LinksList>
					{
						expand ?
						linkListContent.map((item, index) => {
							return <LinkItem key={index} >{item}</LinkItem>
						})
						:
						linkListContent.slice(0, 14).map((item, index) => {
							return <LinkItem key={index} >{item}</LinkItem>
						})						
					}
				</LinksList>
				<Expansion expand={expand} onClick={handleClick}>
					{expand ? "收起" : "展开"}
					<span className="iconfont" >&#xe70a;</span>
				</Expansion>
			</ContentWrapper>
		</LinksWrapper>
	)
}

export default Links;