import './App.css';
import MainPage from './components/MainPage';
import Userstate from './context/Userstate';

function App() {
  return (
    <>
    <Userstate>
      <MainPage/> 
    </Userstate> 
    </>
  );
}

export default App;
