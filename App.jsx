import Header from './components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './Context/ThemeContext';

const App = () => {

  return (
     <>
      <Header />
      <Outlet />
     
    </>
  );
};

export default App;