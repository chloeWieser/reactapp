import {ADD_TO_BOARD} from './types'

export const addToBoard = (item) => {
    console.log(item)
    return {
        type: ADD_TO_BOARD, 
        photo: item
    }
}
