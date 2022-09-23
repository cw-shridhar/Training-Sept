import './App.css';
import { Cardview } from './components/Cardview.js';
import {Provider} from 'react-redux'
import store from './redux/store.js'
function App() {
  return (
    <Provider store = {store}>
      <div>
        <Cardview/>
      </div>
    </Provider>
  );
}

export default App;
