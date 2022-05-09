import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/components/add_new_board">Add New Board</Link></li>
            <li> <Link to="/components/AllBoards">All Boards</Link></li>
            <li> <Link to="/components/Board">Board</Link></li>

        </ul>
    </>
  )
}

export default Header