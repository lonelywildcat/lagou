import styled from 'styled-components';

export const SearchWrapper = styled.div`
	height: 132px;
	min-width: 1263px;
	background-color: rgb(242 245 244);
	position: relative;	
`;

export const SearchBox = styled.div`	
	position: absolute;
	top: 25%;
	left: 13%
`;

export const SearchInput = styled.input.attrs({
	placeholder: "搜索职位、公司或地点"
})`
    width: 762px;
    height: 20px;
    line-height: 20px;
    float: left;
    font-size: 16px;
    padding: 12px 16px;
    margin: 0;
    border: 1px solid #E8E8E8;
    border-right: 0;
    float:left;
    &:focus{
    	border-color: #00b38a;
    	outline: 0;
    }
`;

export const SearchButton = styled.div`
	width: 142px;
	height: 46px;
	background-color: #00b38a;
	float: left;
	line-height: 46px
	font-size: 18px;
	color: #fff;
	text-align: center;
	cursor: pointer;
	&:hover{
		background-color: rgb(0 165 127)
	}
`;

export const HotSearch = styled.div`
	position: absolute;
	top: 65%;
	left: 13%
    font-size: 14px;
    color: #777;
`;

export const SearchWord = styled.a`
    font-size: 14px;
    color: #00b38a;
    padding-left: 14px;
`;