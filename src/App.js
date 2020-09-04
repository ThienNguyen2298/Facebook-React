import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useStateValue } from './contextApi/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    //BEM
    <div className="app">
      {/*https://www.youtube.com/watch?v=B-kxUMHBxNo*/}
      {
        !user ? (<Login></Login>) : (
        <>
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Widgets></Widgets>
          </div>
        </>)
      }
    </div>
  );
}

export default App;
