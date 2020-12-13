import React, { useEffect, useMemo } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import './App.scss';
import ChatsList from './components/chatsList';
import Chat from './components/chat';
import reducer from './stateManager/reducer';
import DispatchContext from './context/dispatch';
import { fetchInitData } from './stateManager/actions';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchBox from './components/SearchBox';

function App() {

  const [{ userId, selectedId, chatsList, chatsDetails }, dispatch] = useThunkReducer(reducer, {
    userId: '1',
    selectedId: null,
    chatsList: [],
    chatsDetails: []
  });

  useEffect(() => {
    dispatch(fetchInitData());
    
  }, [dispatch]);
  
  const selectedChat = useMemo(
    () => chatsList.find(chat => chat.chatId === selectedId),
    [chatsList, selectedId]
    );

    const selectedChatDatails = chatsDetails.find(item => item.chatId === selectedId);
  

  return (
    <DispatchContext.Provider value={dispatch}>
      <Container fluid className='vh-100 d-inline-block'>
        <Jumbotron className='h-100'>
          <Row className=' h-100'>
            <Col className='h-100 d-inline-block' md={4}>
              <div className='my-3'>
                <SearchBox />
              </div>
              <div className='my-3'>
                <ChatsList chatsList={chatsList} chatsDetails={chatsDetails} />
              </div>

            </Col>
            <Col className='align-bottom' md={8}>
              {selectedId && <Chat  chatId={selectedId} userName={selectedChat.userName} selectedChatDatails={selectedChatDatails} userId={userId}/>}
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </DispatchContext.Provider>
  );
}

export default App;
