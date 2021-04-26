import {Table,Form,FormControl,Button,Row,Col} from 'react-bootstrap';

export default function Home() {
  return (
    <div style={{marginTop:'4%',marginBottom:'4%'}}>
    <Row>
      <Col>
      <Form inline style={{marginBottom:'25px',text:'center'}} >
          <Form.Label>City : </Form.Label>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
    </Col>
    <Col>
    <Form inline style={{marginBottom:'25px',text:'center'}} >
          <Form.Label>Tag : </Form.Label>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        </Col>
    </Row>
    
    
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
    
  );
}

