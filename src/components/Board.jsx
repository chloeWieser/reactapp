import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Routes, Route, useParams } from "react-router-dom";
import { removeFromBoard } from '../actions/removeFromBoard';



const BoardItems = () => {


  const {board} = useParams();
  const dispatch = useDispatch();

  const selectedBoardItems = useSelector(state => state.board) //an array of objects 


  console.log(selectedBoardItems[board])


  return (
    
    <>
    <div  className="centered">

    <h2>{board}</h2>
      <div>
        {
          selectedBoardItems[board].length === 0 
          ? 
          <div>'{board}' board is empty</div>
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
                      <img className="product img"src={item.src.medium} alt="" />
                    </div>

                    <div>{item.photographer}</div>
                  </div>

                  <div>

                    <button className="removeButton" onClick={() => dispatch(removeFromBoard(board, item.id))}>Remove</button>
                  </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default BoardItems


