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
            You have <em>{numberOfItems}</em> items on your board
          </div>
        }
      </div>


        <div className="row board-items">
          {
            boardItems.map(item =>{
              return <div key={item.id} className="col-12 d-flex flex-column">

                  <div className="d-flex">
                    <div>
                      <img src={item.src.medium} alt="" />
                    </div>

                    <div>{item.photographer}</div>
                  </div>

                  <div>

                    <button className="btn btn-warning">Remove</button>
                  </div>
              </div>
            })
          }
        </div>

    </>
  )
}

export default BoardItems