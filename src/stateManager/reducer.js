import { INIT_STATE } from '../server/initialData';
import { ACTIONS } from './actions';

let id = 2;
const idGenerator = () => {
  return ++id;
}

const ACTION_HANDLERS = {
  [ACTIONS.INITIAL_DATA_LOADED]: handleInitialDataLoaded,
  [ACTIONS.SELECT_CHAT]: handleChatSelect,
  [ACTIONS.SEND_MESSAGE]: handleSendMessage,
  [ACTIONS.SEARCH]: handleSearch
} 
export default function reducer(state, action) {

  return (ACTION_HANDLERS[action.type] || (() => state ))(state, action.payload)
}

function handleInitialDataLoaded(state, payload) {
  const {userId, selectedId, chatsList, chatsDetails} = payload;
  return{
    ...state,
    userId,
    selectedId,
    chatsList,
    chatsDetails
  }
}

function handleChatSelect(state, payload) {
  const { chatsList } = state;
      const chatId  =  payload;
      const newchatsList = handleUnreadMessages( chatId, chatsList )
      return {
        ...state,
        selectedId: payload,
        chatsList: newchatsList
      };
}

function handleUnreadMessages( id , data) {
  let index = data.findIndex(item => item.chatId === id);
  let newData = [...data];
  let newItem = {...newData[index]};
  newItem.unreadMessages = '';
  newData.splice(index, 1, newItem);
  return newData;
}

function handleSendMessage(state, payload){
  const { message , chatId} =  payload;
      const { chatsDetails } = state;
      const messages = chatsDetails.find(chat => chat.chatId === chatId).messages;
      const newMessages = [
        ...messages,
        {
            id: (idGenerator()).toString(),
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            userId: '1'
        }
    ];
      const newChatsDetails = handleChatDetail( newMessages, chatId, chatsDetails )
      
      return {
        ...state,
        chatsDetails: newChatsDetails,
      };
}

function handleChatDetail( messages, id, chatsDetails ) {
  
  let changedChatIndex = chatsDetails.findIndex(item => item.chatId === id);
  let newChatsDetails = [...chatsDetails];
  let newChangedChat = {...newChatsDetails[changedChatIndex]};
  newChangedChat.messages = messages;
  newChatsDetails.splice(changedChatIndex, 1, newChangedChat);
  return newChatsDetails;
}

function handleSearch(state, payload){
  const keyword =  payload;
  const {  chatsList } = INIT_STATE;
  
  const  newChatsList = chatsList.filter(item => (item.userName.toLowerCase().includes( keyword.toLowerCase())));
  return {
          ...state,
          chatsList: newChatsList
        };
}