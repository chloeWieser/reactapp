import { REMOVE_BOARD } from './types'

export const removeBoard = (title) => {
    return {
        type: REMOVE_BOARD,
        data: {
            title
        }
    }
}