import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {removeBoard} from '../actions/removeBoard'

const AllBoards = () => {  

        //display the current boards
        const boardList = useSelector(state => state.allBoards.boardTitles)  //added
        const counter = useSelector(state => state.count)
        const dispatch = useDispatch();  //store.dispatch(action)


  return (
    <>

    Display Boards
      <ul>
        {boardList.map((board, index) =>{
          console.log(board)
          return <li key={index}><Link to={`/components/Board/${board.title}`}>{board.title}</Link><a href="#" onClick={()=>dispatch(removeBoard(board.id))}>X</a></li>
            }
        )}
      </ul>
      <h1>{counter}</h1>

    </>
  )

}
export default AllBoards



// return <li key={index}>{board.title}</li>


{/* <li> <Link to="/components/Board">Board</Link></li> */}