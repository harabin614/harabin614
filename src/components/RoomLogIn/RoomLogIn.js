import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

const RoomLogIn = props => {
  const [user, setUser] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initChat());
  });
  const goRoom = () => {
    props.history.push("/chatroom");
    dispatch(actions.logUser(user));
    console.log(user);
  };

  return (
    <div>
      <Card
        bg="dark"
        style={{
          width: "300px",
          height: "200px",
          margin: "200px auto",
          color: "white"
        }}
      >
        <Card.Title>Chat Room</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Custom select Small</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                custom
                onChange={event => setUser(event.target.value)}
                value={user}
              >
                <option value={1}>user1</option>
                <option value={2}>user2</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Card.Body>
        <Button variant="success" onClick={goRoom}>
          Log To room
        </Button>
      </Card>
    </div>
  );
};

export default RoomLogIn;
