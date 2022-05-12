import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {removeBoard} from '../actions/removeBoard'

const AllBoards = () => {  

        //display the current boards
        const boardList = useSelector(state => state.board)  //added
        const dispatch = useDispatch();  //store.dispatch(action)


  let boards = [];
  for(let board in boardList) {
    boards.push({ title: board, board: boardList[board]});
  }

  return (
    <>
    
    <div  className="centered">
        <ul>
          {boards.map((board, index) =>{
            console.log(board)
            return <li key={index}><Link to={`/components/Board/${board.title}`}>{board.title}     </Link><a href="#" onClick={()=>dispatch(removeBoard(board.title))}>X</a></li>
              }
          )}
        </ul>
      </div>
    </>
  )

}
export default AllBoards



// return <li key={index}>{board.title}</li>


{/* <li> <Link to="/components/Board">Board</Link></li> */}