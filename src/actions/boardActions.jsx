import {ADD_TO_BOARD} from './types'

export const addToBoard = (boardName, item) => {
    console.log(item)
    console.log("in actions, title: ", boardName)
    console.log("in actions, photo: ", item)

    return {
        type: ADD_TO_BOARD, 
        title: boardName,
        photo: item
    }
}
