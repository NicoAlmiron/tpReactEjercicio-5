import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTareas from "./components/FormularioTareas";

function App() {
  return (
    <>
      <Container>
        <article className="text-center text-danger">
          <h1 className="display-3 my-4"> Mi Lista de Tareas</h1>
        </article>
        <FormularioTareas></FormularioTareas>
      </Container>
      <footer className="text-center bg-dark text-light py-4 fixed-bottom">
        <p>Todos los derechos reservados &copy; 2023 </p>
      </footer>
    </>
  );
}

export default App;
