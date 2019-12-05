import React, { Fragment, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styleGlobal';
import { BrowserRouter as Router } from "react-router-dom";
import { ContentWrapper, BackToTop } from './style'
import IconFont from './static/iconfont'
import Header from './header';
import Search from './search';
import Banner from './banner';
import Job from './job';
import Links from './links';

const handleClick = () => {  
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const App = () => {
  const [showBackTop, setShowBackTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', changeScrollTopShow);    
    return () => {
      window.removeEventListener('scroll', changeScrollTopShow);
    };
  });

  const changeScrollTopShow = () => {
    if (document.documentElement.scrollTop > 100) {
      setShowBackTop(true)
    } else {
      setShowBackTop(false)
    }
  };

  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <IconFont />
        <Router>
          <Header />
          <Search />
          <ContentWrapper>
            <Banner />
            <Job />
            <Links />
          </ContentWrapper>
          {showBackTop ? 
            <BackToTop onClick={handleClick}/> 
            : 
            null
          }          
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
