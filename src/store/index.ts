import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ChatsState, chatReducer } from './chats/reducer';
import { profileReducer, ProfileState } from './profile/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export interface StoreState {
  profile: ProfileState;
  chats: ChatsState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
}

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
