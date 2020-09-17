import React from "react";
import { Card, Button, CardTitle, Col,CardText , Form, FormGroup, Label, Input } from 'reactstrap';
function TimeForm(props){
const submitText = props.title? 'Update' : 'Create';
    return (
        <div >
        <Card className="col-12 offset-md-4 col-md-4 p-4 mt-4 border border-primary">
        <Form>
        <FormGroup row className="my-5">
        <Label className="col-4" >Title</Label>
        <Col >
        <Input  type='text' defaultValue={props.title} />
        </Col>
        </FormGroup>
        <FormGroup row className="my-5"> 
        <Label className="col-4 ">Project</Label>
        <Col>
        <Input type='text' defaultValue={props.project} />
        </Col>
        </FormGroup>
        <div >
        <Button className="bg-primary" >
        {submitText}
        </Button>
        <Button  className="offset-1 bg-danger">
        Cancel
        </Button>
        </div>
        </Form>
        </Card>
</div>
    )
}
export default TimeForm;