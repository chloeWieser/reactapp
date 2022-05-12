export const removeFromBoard = (boardTitle, itemId) => {
    return {
        type: 'REMOVE_FROM_BOARD',
        data: {
            boardTitle,
            itemId
        }
    }
}