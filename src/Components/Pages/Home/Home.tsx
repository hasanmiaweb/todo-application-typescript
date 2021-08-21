import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TotalTodo from "../TotalTodo/TotalTodo";
const shortid = require("shortid");

interface addItemInt {
  id: string;
  name: string;
  email: string;
  mobile: string;
  hobby: string;
}

const Home = () => {
  const [addItem, setAddItem] = useState<addItemInt>({
    id: shortid.generate(),
    name: "",
    email: "",
    mobile: "",
    hobby: "",
  });

  const handleChange = (e: any) => {
    setAddItem({ ...addItem, [e.target.name]: e.target.value });
  };

  const [itemList, setItemList] = useState<addItemInt[]>([]);

  const handleBtn = (e: any) => {
    e.preventDefault();
    setItemList([...itemList, addItem]);
    setAddItem({
      id: shortid.generate(),
      name: "",
      email: "",
      mobile: "",
      hobby: "",
    });
    // console.log(addItem);
  };

  const handleEdit = (id: string) => {
    const newItem: any = itemList.find((item) => item.id === id);

    setAddItem(newItem);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h1 className="p-3 headline">Todo Application TypeScript</h1>
            <hr />
            <br />
            <div className="form-list card p-3 mb-3">
              <Form onSubmit={handleBtn}>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="Name"
                      name="name"
                      value={addItem.name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={addItem.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col>
                    <Form.Control
                      type="number"
                      name="mobile"
                      value={addItem.mobile}
                      required
                      placeholder="Mobile"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      required
                      name="hobby"
                      value={addItem.hobby}
                      placeholder="Hobby"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Button type="submit" className="btn btn-dark form-control">
                  Add List
                </Button>
              </Form>
            </div>
            <br />
            <h1 className="headline py-2 text-center">
              {itemList.length ? "Total List" : ""}
            </h1>
            {itemList.map((signleItem, tests) => (
              <TotalTodo
                handleEdit={handleEdit}
                key={tests + 1}
                id={signleItem.id}
                name={signleItem.name}
                email={signleItem.email}
                mobile={signleItem.mobile}
                hobby={signleItem.hobby}
              />
            ))}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
