import React from 'react';
import { Card } from 'react-bootstrap';
import './Mypost.css';

const Mypost = ({src, title , text , }) => {
    return (
        <>
            <Card style={{ width:"24rem" , height: '24rem', marginRight: '20px' , border: 'none', margintop: '20px'}}  >
                <div className="myimgcontainer">
                <Card.Img variant="top" src={src} className="myimg"  />    
                </div>
                <Card.Body className="rtl mycardbody">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Mypost;