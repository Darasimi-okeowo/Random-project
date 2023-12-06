import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Lagos", "Ibadan", "Cross-river", "Akure", "Abuja"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <br />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
      )}
      <br />
      <Button onClick={() => setAlertVisible(true)}>Primary Button</Button>
    </div>
  );
}

export default App;
