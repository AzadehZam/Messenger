import React from 'react';
import { useDispatch } from '../context/dispatch';
import { selectChat } from '../stateManager/actions';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import { DispatchContext } from '../App';

export default function ChatsListItem({ text, time, userName, unreadMessages, id }) {

    const dispatch = useDispatch();
    // const dispatch = useContext(DispatchContext);

    return (
        <Container className='p1'onClick={() => dispatch(selectChat(id))}>
        <Row>
            <Col md={7}>
            <span className='font-weight-bold'>{userName}</span>
            </Col>
            <Col md={5}>
            <span className='chatTime float-right'>{time}</span>
            </Col>
        </Row>
        <Row >
            <Col md={9}>
            <div className='chatText'>{text}</div>
            </Col>
            <Col md={3}>
            <span className='badge badge-success font-weight-bold success'>{unreadMessages}</span>
            </Col>
        </Row>
        
      </Container>
        // <div className='chatsListItem' onClick={() => dispatch(selectChat(id))}>
        //     <h6>{sender}</h6>
        //     <div className='chatText'>{text}</div>
        //     <span>{unreadMessages}</span>
        //     <div className='chatTime'>{time}</div>
        // </div>
    )
}