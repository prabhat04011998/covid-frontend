import {Table,Form,Button,Row,Col, Container} from 'react-bootstrap';

export default function addData(){
    return (
        <Container>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Resource Person/Organization Name</Form.Label>
    <Form.Control type="text" placeholder="Prabhat Sharma / IIT JAMMU" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Mobile No.</Form.Label>
    <Form.Control type="No." placeholder="+91 9876543210" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Proper Address</Form.Label>
    <Form.Control type="text" placeholder="block 7 jati nagrota" />
  </Form.Group>
 
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Resource Tag</Form.Label>
    <Form.Control as="select">
      <option>Plasma Donar</option>
      <option>Oxygen Cylinder</option>
      <option>Blood Bank</option>
      <option>Remedisivir</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
  <Button variant="primary"> Submit</Button>
</Form>
        </Container>
    )
}