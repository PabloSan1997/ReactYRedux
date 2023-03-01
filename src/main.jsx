import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import App from './App'
import "./index.css"
import { pokemonReducer} from './reduces/pokemons'
const store = createStore(pokemonReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <App />
   </Provider>
);

