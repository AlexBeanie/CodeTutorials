import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };
  return (
    <Card>
      <CardBody title="Card Title" text="Card Text" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
