import {ADD_NEW_BOARD} from './types'

export const addNewBoard = (id, title) => {
    return {
        type : ADD_NEW_BOARD,
        data: {
            id,
            title
    }
}
}