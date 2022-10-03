import { BrowserRouter, Outlet, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { SideBar } from './components/sidebar/SideBar';
import { Body } from './components/body/Body';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <SideBar/>
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
