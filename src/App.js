import './App.css';
import Header from './Header/Header';
import Input from './Input/Input';
import Slot from './Slot/Slot';

function App() {
  return (
    <div className="app">
        <img
          className="app__background"
          alt=""
          src="https://miro.medium.com/max/3200/1*I6UkvxUjvceCo9rWHIZJdA.png"
        />
       <div className="app__main">
         <Header/>
         <Input/>
       </div>
       
    </div>
  );
}

export default App;
