import { Button, Col, Row } from "react-bootstrap";

interface addItemProps {
  id: string;
  name: string;
  email: string;
  mobile: string;
  hobby: string;
  handleEdit: (id: string) => void;
}
const TotalTodo = ({
  id,
  name,
  email,
  mobile,
  hobby,
  handleEdit,
}: addItemProps) => {
  return (
    <div>
      <hr />
      <br />

      <div className="card p-2 text-center">
        <h5>
          Name: <strong>{name}</strong>
        </h5>
        <h5>
          Email: <strong>{email}</strong>
        </h5>
        <h5>
          Mobile: <strong>{mobile}</strong>
        </h5>
        <h5>
          Hobby: <strong>{hobby}</strong>
        </h5>
        <Row>
          <Col>
            <Button
              className=" btn btn-success form-control"
              onClick={() => handleEdit(id)}
            >
              Edit
            </Button>
          </Col>
          <Col>
            <Button className=" btn btn-danger form-control">Delete</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TotalTodo;
