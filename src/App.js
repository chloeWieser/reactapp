import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import BaseLayout from './components/layout/BaseLayout'
import Home from './components/Home';
import Board from './components/Board';
import AddNewBoard from './components/AddNewBoard';
import AllBoards from './components/AllBoards';
import './App.css';
import rootReducer from './reducers/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

const App = () => {


  const persistConfig ={
    key: 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)


  const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  let persistor = persistStore(store)

  return (
    <Provider store={store}>

        <PersistGate persistor={persistor} loading={null}>
          <Router>
              <BaseLayout>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/components/add_new_board" element={<AddNewBoard />}/>
                      <Route path="/components/AllBoards" element={<AllBoards />} />
                      {/* <Route path="/components/Board" element={<Board />} /> */}
                      <Route path="/components/Board/:board" element={<Board />} />
                  </Routes>
              </BaseLayout>
          </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
