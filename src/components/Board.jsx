import React from 'react'
import {useSelector} from 'react-redux'
import { Routes, Route, useParams } from "react-router-dom";



const BoardItems = () => {


  const {board} = useParams();

  const boardItems = useSelector(state => state.board.boardItems) //an array of objects 
  const selectedBoardItems = useSelector(state => state.board) //an array of objects 


  console.log(selectedBoardItems[board])


  return (
    
    <>

    <h2>{board}</h2>
      <div>
        {
          selectedBoardItems[board].length === 0 
          ? 
          <div>Board is empty</div>
          : 
          <div>

          </div>
        }
      </div>


        <div className="imageBlock row">
          {
            selectedBoardItems[board].map(item =>{
              return <div key={item.id} className="col-4 mb-5 product">

                  <div>
                    <div>
                      <img className = "product img"src={item.src.medium} alt="" />
                    </div>

                    <div>{item.photographer}</div>
                  </div>

                  <div>

                    <button className = "removeButton">Remove</button>
                  </div>
              </div>
            })
          }
        </div>

    </>
  )
}

export default BoardItems


