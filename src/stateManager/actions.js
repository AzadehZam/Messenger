function createAction( type, payload){
    return({
        type: type,
        payload: payload
    })
}
export const selectChat = (id) => createAction('CHAT_SELECTED', id);