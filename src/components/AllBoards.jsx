import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const AllBoards = () => {  

        //display the current boards
        const boardList = useSelector(state => state.allBoards.boardTitles)  //added
        const counter = useSelector(state => state.count)


  return (
    <>

    Display Boards
      <ul>
        {boardList.map((allBoards, index) =>{
          return <li key={index}>{allBoards.title}</li>
            }
        )}
      </ul>
      <h1>{counter}</h1>

    </>
  )

}
export default AllBoards
