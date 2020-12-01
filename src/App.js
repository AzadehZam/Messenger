import React, {useReducer } from 'react';
import { CHATS_LIST_DATA, CHATS_DETAILS } from './constants/const';
import './App.scss';
// import MessagesList from './components/messagesList';
import ChatsList from './components/chatsList';
import Chat from './components/chat';
import reducer from './stateManager/reducer';
import DispatchContext from './context/dispatch';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchBox from './components/SearchBox';

// export const DispatchContext = createContext();

function App() {

  const [{ selectedId, chatsListData, chatsDetails }, dispatch] = useReducer(reducer, {
    selectedId: 0,
    chatsListData: CHATS_LIST_DATA,
    chatsDetails: CHATS_DETAILS
  })

  return (
    <DispatchContext.Provider value={dispatch}>
      <Container fluid className='vh-100 d-inline-block'>
        <Jumbotron className='h-100'>
          <Row className=' h-100'>
            <Col className='h-100 d-inline-block' md={4}>
              <div className='my-3'>
                <SearchBox  />
              </div>
              <div className='my-3'>
              <ChatsList data={chatsListData} />
              </div>
               
            </Col>
            <Col className='align-bottom' md={8}>
              <Chat id={selectedId} chatsDetails={chatsDetails}  />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      {/* <div>
        <ChatsList data={CHATS_LIST_DATA} />
        <Chat id={selectedId} />
      </div> */}
    </DispatchContext.Provider>
  );
}

export default App;

// <MessagesList data={USERS_MESSAGES_DATA[0]} />