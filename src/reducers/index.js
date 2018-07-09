import { combineReducers } from 'redux';
import BooksReducers from './books';

const rootReducer = combineReducers({
  books: BooksReducers
});

export default rootReducer;
