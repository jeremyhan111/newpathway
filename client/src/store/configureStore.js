import { createStore, combineReducers } from 'redux';
import { localeReducer as locale, initialize, addTranslation } from 'react-localize-redux';
import header from './../translations/header';
import landing from './../translations/landing';

export default () => {
	const store = createStore(
		combineReducers({
			locale
		}),
	);

	const languages = ['en', 'zh', 'ko', 'ja'];

	store.dispatch(initialize(languages, { defaultLanguage: 'en'}));
	store.dispatch(addTranslation(header));
	store.dispatch(addTranslation(landing));

	return store;
};