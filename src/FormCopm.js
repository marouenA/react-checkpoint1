import React from "react";
import {
  Button,
  Form,
  InputGroup,
  Col,
  Navbar,
  Nav,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormCopm = () => {
  return (
    <div>
      <div className="body">
        <Navbar className="navbar" bg="light" variant="light">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="navlink"><u><b>Home</b></u></Nav.Link>
            <Nav.Link href="#features"className="navlink"><u><b>Events</b></u></Nav.Link>
            <Nav.Link href="#pricing"className="navlink"><u><b>News</b></u></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
        <Form className="form1">
          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Adress</Form.Label>
              <Form.Control type="text" placeholder="Adress" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid adress.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>code</Form.Label>
              <Form.Control type="text" placeholder="Code" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Team</Form.Label>
              <Form.Control type="text" placeholder="Team" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Team name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
            ></Form.Group>
          </Form.Row>
          <Form.Group>
           <Form.Row>
             <Form.Group as={Col} md="3" controlId="validationCustom01"></Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback=
              "You must agree before submitting."
            />
            </Form.Row> 
          </Form.Group>
          <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom01"></Form.Group>
          <Button type="submit">Submit</Button>
          <Form.Group as={Col} md="1" controlId="validationCustom01"></Form.Group>
          <Button type="reset">Reset</Button>
          </Form.Row>

         
        </Form>
      </div>
    </div>
  );
};

export default FormCopm;
