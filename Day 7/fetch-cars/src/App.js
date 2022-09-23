import './App.css';
import Cardview from './components/Cardview';
import store from './redux/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Cardview/>
      </div>
    </Provider>
  );
}

export default App;
