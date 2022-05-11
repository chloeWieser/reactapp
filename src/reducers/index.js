
import {combineReducers} from 'redux'
import boardReducer from './boardReducer'
import allBoardsReducer from './allBoardsReducer'



const rootReducer = combineReducers({
    board: boardReducer,
    // allBoards: allBoardsReducer
})


export default rootReducer