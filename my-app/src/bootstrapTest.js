import {Container, Row, Col, Button} from 'react-bootstrap';

const BootstrapTest = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        <Button variant="secondary">Secondary</Button>{' '}
      </Row>
    </Container>
  )
}

export default BootstrapTest;