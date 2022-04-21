import { ListOption } from "./components";

function App() {
  const dias = [
    { id: 1, nombre: "Lunes" },
    { id: 2, nombre: "Martes" },
    { id: 3, nombre: "Miercoles" },
    { id: 4, nombre: "Jueves" },
    { id: 5, nombre: "Viernes" },
    { id: 6, nombre: "Sabado" },
    { id: 7, nombre: "Domingo" },
  ];

  return (
    <ul>
      {dias.map((day) => (
        <ListOption key={day.id}>{day.nombre}</ListOption>
      ))}
    </ul>
  );
}

export default App;
