import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTarea, index }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button variant="danger" onClick={() => borrarTarea(index)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
