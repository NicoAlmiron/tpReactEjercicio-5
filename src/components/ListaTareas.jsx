import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ paqueteTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {paqueteTareas.map((tarea, i) => (
        <ItemTarea
          key={i}
          nombreTarea={tarea}
          borrarTarea={borrarTarea}
          index={i}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
