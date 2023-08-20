import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ChatBox from './ChatBox';
import axios from 'axios';



const Dashboard: React.FC = () => {
  const [imageData, setImageData] = useState([]); // State to hold the image data

  // Function to update the imageData state
  const updateImageData = (data: []) => {
    setImageData(data);
  };


  return (
    <Container fluid className="mainDashboard">
      <div className="text-center mb-5 dashBoardHeading font-size">FlipFind</div>
      <Row>
        <Col sm={4}>
          <div className="scrollable-cards">
            <div className="text-center mb-3">Similar Images</div>
            <div className="text-center mb-3">Click on the image to view the product</div>
            <div className="text-center mb-3">Please wait for a min after image generation to get similar products</div>
            <Card className="mb-4 text-center">
              <Card.Body>
                {imageData.slice(0, 5).map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`${index + 1}`}
                    style={{ width: '100%', marginBottom: '10px' }}
                  />
                ))}
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm={8}>
          <div className='chat-box'>
            <ChatBox onUpdateImageData={updateImageData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
