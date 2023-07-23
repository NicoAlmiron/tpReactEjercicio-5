import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareas);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  };

  const borrarTarea = (index) => {
    let listaTareasFiltrada = listaTareas.filter(
      (itemListaTarea, i) => index !== i
    );
    setListaTareas(listaTareasFiltrada);
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex my-3" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese aqui su tarea"
            autoFocus
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          ></Form.Control>
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
        <ListaTareas
          paqueteTareas={listaTareas}
          borrarTarea={borrarTarea}
        ></ListaTareas>
      </Form>
    </>
  );
};

export default FormularioTareas;
