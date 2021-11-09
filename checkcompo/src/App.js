import './App.css';
import MyPhoto from './Components/Profile/ProfilePhoto';
import MyName from './Components/Profile/FullName';
import MyAdress from './Components/Profile/Adress';

function App() {
  return (
    <div className="App">
      <MyPhoto/>
      <MyName/>
      <MyAdress/>

    </div>
  );
}

export default App;
