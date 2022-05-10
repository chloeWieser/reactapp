import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";

const AllBoards = () => {  

        //display the current boards
        const boardList = useSelector(state => state.allBoards.boardTitles)  //added
        const counter = useSelector(state => state.count)


  return (
    <>

    Display Boards
      <ul>
        {boardList.map((board, index) =>{
          console.log(board)
          return <li key={index}><Link to="/components/Board">{board.title}</Link></li>
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