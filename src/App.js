import logo from './logo.svg';
import './App.css';
// import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// import testReducer from './reducers/testReducer';
import Test from './Test';
import store from './store';
import Student from './Student';
import Product from './Product';
import SingleProduct from './constant/SingleProduct';

function App() {
  // const store = legacy_createStore(testReducer)
  return (
    <div>
    <Provider store={store}>
    <Test/>
    <Student/>
     <Product/>
     <SingleProduct/>
    </Provider>

    
    </div>
  );
}

export default App;
