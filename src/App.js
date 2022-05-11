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

const App = () => {

  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


  return (
    <Provider store={store}>
      <Router>
          <BaseLayout>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/components/add_new_board" element={<AddNewBoard />}/>
                  <Route path="/components/AllBoards" element={<AllBoards />} />
                  <Route path="/components/Board" element={<Board />} />
                  <Route path="/components/Board/:board" element={<Board />} />
              </Routes>
          </BaseLayout>
      </Router>
    </Provider>
  )
}

export default App
