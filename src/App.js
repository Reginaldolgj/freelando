import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstiloGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card children={<h1>Freelando</h1>}/>
      
    </ProvedorTema>
  );
}

export default App;
