import React from 'react'  


import About from './About'
import { Table ,Card,CardBody,CardTitle,FormText,CardSubtitle,CardText,Button,Form,Row,Col,FormGroup,Label,Input,} from 'reactstrap';

class Demo extends React.Component {  
  render() {  
    return <div>
  

  <Card
  >
    <CardBody>
      
    <Form>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
     Title:
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
      
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
     Author:
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
     
        type="password"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
  Price:
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
       
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
     Rating:
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
       
        type="password"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
     Cover:
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
      
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
     ISBN:
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
       
        type="password"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
    Description:
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
       
        type="email"
      />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={10}
    >
  
    </Label>
    <Col sm={2}>
    <div>
  <Button
    color="primary"
    href="/">
   Save
  </Button>
</div>
    </Col>
  </FormGroup>


</Form>
     
     
    </CardBody>
  </Card>

     
    </div>  
  }  
}  
export default Demo  