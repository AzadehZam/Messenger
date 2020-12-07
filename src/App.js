import React, { useReducer } from 'react';
import { INIT_STATE } from './constants/const';
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



function App() {
  console.log(INIT_STATE);
  


  const [{ userId, selectedId, chatsList, chatsDetails }, dispatch] = useReducer(reducer, INIT_STATE)
 
  
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
                <ChatsList chatsList={chatsList}  chatsDetails={chatsDetails}/>
              </div>

            </Col>
            <Col className='align-bottom' md={8}>
              {selectedId && <Chat chatId={selectedId} userId={userId} chatsDetails={chatsDetails} />}
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </DispatchContext.Provider>
  );
}

export default App;
