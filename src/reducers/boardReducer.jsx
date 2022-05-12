import {ADD_TO_BOARD, ADD_NEW_BOARD, REMOVE_BOARD} from '../actions/types'
// []
//we wire this up by importing this into the reducers index.js, to combine it
const boardReducer = (state, action) => {

    //initialize our state 

    // state = {
    //  plants: [{},{},{}], 
    //  dogs: []
   // }


   // state = {}

   //state["plants"] = []
   //
    if(state === undefined){
        state = {

        }
    }


    switch(action.type){

        case ADD_NEW_BOARD: 

            //adding a new key to the state object
            // board = new key in state 

            //check to see if key(board) already exists in our state

            if (state[action.data.title]){
                
                return {
                    ...state, //if board name is already there we don't wnat to create  new board so just return same state
                }
            }
            else{
                
                return {
                    ...state, 
                    [action.data.title] : []
                }
            }


        case ADD_TO_BOARD: 

            console.log("inside of reducer adding to board")
            console.log("title", action.title)
            // board name, data
            /*

                return {
                    type: ADD_TO_BOARD, 
                    data: {
                        title: "plants", 
                        photo: item
                    }
                }

            */

            // let newBoardItems = [...state.boardItems] //copying whatever is in state 
            // newBoardItems.push({...action.photo, quantity: 1})


           
            return {
                ...state,
                [action.title]: [...state[action.title], action.photo]
            }


        case "REMOVE_FROM_BOARD":
            return{
                ...state,
                [action.data.boardTitle]: state[action.data.boardTitle].filter(photo =>{
                    return photo.id !== action.data.itemId
                })
            }
            

        case REMOVE_BOARD:
            console.log(state)

            delete state[action.data.title];

            return {
                ...state,
            };

        default:
            return state;
    }
}


export default boardReducer