import React from 'react';
import { useDispatch } from '../context/dispatch';
import { selectChat } from '../stateManager/actions';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ChatsListItem({ text, time, userName, unreadMessages, chatId }) {

    const dispatch = useDispatch();

    return (
        <Container className='p1'onClick={() => dispatch(selectChat(chatId))}>
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
    )
}