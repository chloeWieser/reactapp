
import {combineReducers} from 'redux'
import boardReducer from './boardReducer'




const rootReducer = combineReducers({
    board: boardReducer,
    // allBoards: allBoardsReducer
})


export default rootReducer