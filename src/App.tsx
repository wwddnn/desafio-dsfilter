import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextList } from "./utils/context-list";


function App() {

  // Estado global
  const [contextList, setContextList] = useState<number>(0);

  // Provider
  return (
    <ContextList.Provider value={{ contextList, setContextList }}>
    <>
      <Header />
      <ListingBody />
    </>
    </ContextList.Provider>
  );
}

export default App;
