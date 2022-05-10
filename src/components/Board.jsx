import React from 'react'
import {useSelector} from 'react-redux'



const BoardItems = () => {

  const boardItems = useSelector(state => state.board.boardItems) //an array of objects 
  const numberOfItems = useSelector(state =>  state.board.numberOfItems); 

  return (
    <>
      <div>
        {
          boardItems.length === 0 
          ? 
          <div>Board is empty</div>
          : 
          <div>

          </div>
        }
      </div>


        <div className="imageBlock row">
          {
            boardItems.map(item =>{
              return <div key={item.id} className="col-4 mb-5 product">

                  <div>
                    <div>
                      <img class = "product img"src={item.src.medium} alt="" />
                    </div>

                    <div>{item.photographer}</div>
                  </div>

                  <div>

                    <button class = "removeButton">Remove</button>
                  </div>
              </div>
            })
          }
        </div>

    </>
  )
}

export default BoardItems


