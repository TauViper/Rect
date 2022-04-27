import React, { FC, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { Chats } from './components/pages/Chats';
import { Header } from './components/Header/Header';
import { ChatList } from './components/pages/ChatList';
import { Profile } from './components/pages/Profile';
import { store } from './store';
import { defaultContext, ThemeContext } from './store/utils/ThemeContext';

export interface Chats {
  id: string;
  name: string;
}
const initialChats: Chats[] = [{
  id: "1",
  name: 'chat',
}]


export const App: FC = () => {
  const [chatList, setChatList] = useState<Chats[]>(initialChats);
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        < BrowserRouter >

          <Routes>
            <Route path='/' element={<Header />} />

            <Route path='/Chats'>
              <Route index element={<ChatList chatList={chatList} onAddChat={setChatList} />} />
              <Route path=':chatId' element={<Chats />} />
            </Route>
            <Route path='/Profile' element={<Profile />} />
            <Route path='*' element={<div className="ErrorPage">
              <h2>Page not found.</h2>
              <h4 className="ErrorPage__message">Our apologies, this is almost certainly not the page you were looking for.</h4>
              <h4 className="ErrorPage__secondaryMessage">Please try the search tool, above, or visit our  <Link to="/">Home Page</Link>.</h4>
              <a className="Link" href="/"></a>
            </div>} />
          </Routes>
        </BrowserRouter >
      </ThemeContext.Provider>
    </Provider >
  )
};
