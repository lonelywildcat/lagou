import React, { Fragment, useState } from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { 
	SearchWrapper,
	SearchInput,
	SearchBox,
	SearchButton,
	HotSearch,
	SearchWord,
 } from './style';

const Search = (props) => {
	const [word, setWord] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleChange = (event) => {
		setWord(event.target.value);
	}

	const handleClick = () => {
		setRedirect(true);		
	}

	const handleOnKeyUp = (event) => {		
		if (event.keyCode === 13) {
			setRedirect(true);	
		}	
	}

	return(
		<Fragment>
			<SearchWrapper>
				<SearchBox>
					<SearchInput onChange={handleChange} onKeyUp={handleOnKeyUp} value={word}/>
					<SearchButton onClick={handleClick}>搜索</SearchButton>
				</SearchBox>
			<HotSearch>
				热门搜索：
				<SearchWord>Java面试</SearchWord>
				<SearchWord>架构设计</SearchWord>
				<SearchWord>数据分析</SearchWord>
				<SearchWord>PHP</SearchWord>
				<SearchWord>C++</SearchWord>
			</HotSearch>
			</SearchWrapper>
			{ redirect ? <RedirectPage url={`https://www.lagou.com/jobs/list_${word}`}/> : null}
		</Fragment>
	)	
}

class RedirectPage extends React.Component {
  componentDidMount(){
  	createHistory().push('/');
    window.location.replace(this.props.url)
  }
  render() {
  	return null
  }
}

export default Search;