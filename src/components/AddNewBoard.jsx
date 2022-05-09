import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch, useSelector} from 'react-redux'//added
import {addNewBoard} from '../actions/addNewBoard'

const AddNewBoard = () => {

  const [title, setTitle] = useState("")

  const dispatch = useDispatch()  //dispatch is used to run the action
  const boards = useSelector(state => state.boardTitles)

    // show the current boardTitles

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewBoard(uuidv4(),title))

  }

  return (
    <>
      Add New Board 
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add New Board</button>
      </form>

      <br /> 

    </>
  )
}

export default AddNewBoard
