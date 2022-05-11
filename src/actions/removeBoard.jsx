import {REMOVE_BOARD} from './types'

export const removeBoard = (id, title) => {
    return {
        type : REMOVE_BOARD,
        data: {
            id,
            title
    }
}
}