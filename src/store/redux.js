import { combineReducers } from 'redux';
import{ reducer as sidebarReducer } from '../banner/sidebar/store/';
import{ reducer as slideShowReducer } from '../banner/slideshow/store/';
import{ reducer as jobReducer } from '../job/store/';
import{ reducer as headReducer } from '../header/store'

const redux = combineReducers({
	sidebar: sidebarReducer,
	slideshow: slideShowReducer,
	job: jobReducer,
	header: headReducer
})

export default redux;