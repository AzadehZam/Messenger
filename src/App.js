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
import Spinner from './components/Spinner';

function App() {

  const [{ userId, selectedId, chatsList, chatsDetails, loading }, dispatch] = useThunkReducer(reducer, {
    userId: '1',
    selectedId: null,
    chatsList: [],
    chatsDetails: [],
    loading: true
  });

  console.log(loading)

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
          {loading && <Spinner loading={loading}/>}
          {!loading && <Row className=' h-100'>
            <Col className='w-100 h-100 d-block side-bar border border-secondary rounded' >
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
          </Row>}
        </Jumbotron>
      </Container>
    </DispatchContext.Provider>
  );
}

export default App;
