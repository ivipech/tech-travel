import { ListOption } from "./components";

const customStyle = (backColor = "#909") => ({
  backgroundColor: backColor,
  margin: "20px 30px",
});

function App() {
  return (
    <ul>
      <ListOption className="" tiempo="frio">
        Lunes
      </ListOption>
      <ListOption>Martes</ListOption>
      <ListOption>Miercoles</ListOption>
    </ul>
  );
}

export default App;
