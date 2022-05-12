import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <>

    <div className="header">
      <div className="text">Curations</div>

      <Navbar sticky="top" className="nav-links d-flex justify-content-between">
            <a> <Link to="/" className="nav-links">Search Images</Link></a>
            <a> <Link to="/components/add_new_board" className="nav-links">+ Add New Board</Link></a>
            <a> <Link to="/components/AllBoards" className="nav-links">All Boards</Link></a>
            {/* <li> <Link to="/components/Board">Board</Link></li> */}

      </Navbar>
    </div>
    </>
  )
}

export default Header