import './App.css';
import MainPage from './components/MainPage';
import Userstate from './context/Userstate';

function App() {
  return (
    <>
    {/* everything inside userstate can use usercontext */}
    <Userstate>
      {/* main page is basically the home page of website */}
      <MainPage/> 
    </Userstate> 
    </>
  );
}

export default App;
