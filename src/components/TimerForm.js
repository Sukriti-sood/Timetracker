import React, { useState } from "react";
import { Card, Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
function TimeForm(props){
    const[Ttitle,settitle]=useState(props.title);
    const[Tproject,setproject]=useState(props.project)

const Text = Ttitle? 'Update' : 'Create';
const submitText=Text;
function handleprojectChange(event){
    setproject(event.target.value);
}
function handletitleChange(event){
    settitle(event.target.value);
}
function handlesubmit(){
    props.onFormSubmit({
    id:props.id,
    title:Ttitle,
    project:Tproject
})
}
    return (
        <div >
        <Card className="col-12 offset-md-4 col-md-4 p-4 mt-4 border border-primary">
        <Form>
        <FormGroup row className="my-5">
        <Label className="col-4" >Title</Label>
        <Col >
        <Input  type='text' onChange={handletitleChange} value={Ttitle} />
        </Col>
        </FormGroup>
        <FormGroup row className="my-5"> 
        <Label className="col-4 ">Project</Label>
        <Col>
        <Input type='text' onChange={handleprojectChange} value={Tproject} />
        </Col>
        </FormGroup>
        <div >
        <Button className="bg-primary" onClick={handlesubmit}>
        {submitText}
        </Button>
        <Button  className="offset-1 bg-danger" onClick={props.onFormClose}>
        Cancel
        </Button>
        </div>
        </Form>
        </Card>
</div>
    )
}
export default TimeForm;