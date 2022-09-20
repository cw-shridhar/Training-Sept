import './App.css';
import { RegistrationForm } from './RegistrationForm';
import { BrowserRouter, Switch, Route, Link, Routes} from 'react-router-dom'
import { Login } from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<RegistrationForm/>}/>
          <Route path="/login" element= {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
