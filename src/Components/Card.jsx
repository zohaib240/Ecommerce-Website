import React from 'react'
    
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    
    function BasicExample({img,title,description}) {
      return (
        <Card className='align' style={{ width: '18rem' }}>
          <Card.Img className='w-50' variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Show more</Button>
          </Card.Body>
        </Card>
      );
    } 
    
    export default BasicExample;
    
