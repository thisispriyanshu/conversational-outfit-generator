import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ChatBox from './ChatBox';

const Dashboard: React.FC = () => {
  return (
    <Container fluid className="mainDashboard">
      <div className="text-center mb-5 dashBoardHeading font-size">FlipFind</div>
      <Row>
        <Col sm={4}>
          <div className="scrollable-cards">
            {[...Array(3).keys()].map(i => (
              <Card key={i} className="mb-4 text-center">
                <Card.Body>Card {i + 1}</Card.Body>
              </Card>
            ))}
          </div>
        </Col>
        <Col sm={8}>
          <div className='chat-box'>
            <ChatBox/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
