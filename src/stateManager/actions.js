import { getInitialData } from "../server/initialData";

function createAction( type, payload){
    return({
        type: type,
        payload: payload
    })
}

export const ACTIONS = {
    INITIAL_DATA_LOADED: 'INITIAL_DATA_LOADED',
    SELECT_CHAT: 'SELECT_CHAT',
    SEND_MESSAGE: 'SEND_MESSAGE',
    SEARCH: 'SEARCH'
}

export const selectChat = (chatId) => createAction('SELECT_CHAT', chatId);

export const sendMessage = ({ message, chatId }) => createAction('SEND_MESSAGE', { message, chatId });

export const search = ( keyword ) => createAction('SEARCH', keyword );

export const fetchInitData = () => {
   return (dispatch) => {
        getInitialData().then( res => 
            dispatch({type: 'INITIAL_DATA_LOADED', payload: res})
            
        )
    }
}
