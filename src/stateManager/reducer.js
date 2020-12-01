import { CHATS_LIST_DATA } from '../constants/const';

export default function reducer(state, action) {
  switch (action.type) {

    case 'CHAT_SELECTED': {
      const { chatsListData } = state;
      const id  =  action.payload;
      const newChatsListData = handleUnreadMessages( id, chatsListData )
      return {
        ...state,
        selectedId: action.payload,
        chatsListData: newChatsListData
      };
    }

    case 'MESSAGE_SENT': {
      const { newMessages , id} =  action.payload;
      const { chatsListData, chatsDetails } = state;
      const newChatsDetails = handleChatDetail( newMessages, id, chatsDetails )
      const newChatsListData = handleChatsListData( newMessages, id, chatsListData )
      return {
        ...state,
        chatsDetails: newChatsDetails,
        chatsListData: newChatsListData
      };
    }

    case 'SEARCH': {
      const keyword =  action.payload;
      const newChatsListData = handleSearch( keyword, CHATS_LIST_DATA )
      return {
        ...state,
        chatsListData: newChatsListData
      };
    }

    default: {
      return state;
    }
  }
}

function handleChatDetail( messages, id, chatsDetails ) {
  
  let changedChatIndex = chatsDetails.findIndex(item => item.userId === id);
  let newChatsDetails = [...chatsDetails];
  let newChangedChat = {...newChatsDetails[changedChatIndex]};
  newChangedChat.messages = messages;
  newChatsDetails.splice(changedChatIndex, 1, newChangedChat);
  return newChatsDetails;
}


function handleChatsListData( messages, id, chatsListData ) {
  
  let changedChatIndex = chatsListData.findIndex(item => item.id === id);
  let newChatsListData = [...chatsListData];
  let newChatListItem = {...newChatsListData[changedChatIndex]};
  newChatListItem.text = messages[messages.length-1].text;
  newChatListItem.time = messages[messages.length-1].time;
  newChatsListData.splice(changedChatIndex, 1, newChatListItem);
  return newChatsListData;
}


function handleUnreadMessages( id , data) {
  let index = data.findIndex(item => item.id === id);
  let newData = [...data];
  let newItem = {...newData[index]};
  newItem.unreadMessages = '';
  newData.splice(index, 1, newItem);
  return newData;
}

function handleSearch(keyword, data){
  
  const newData = data.filter(item => (item.userName.toLowerCase().includes( keyword.toLowerCase() )));
  return newData;
}