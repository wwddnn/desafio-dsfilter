import { useContext } from "react";
import "./styles.css";
import { ContextList } from "../../utils/context-list";

export default function Header() {

  // contexto global
  const { contextList, setContextList } = useContext(ContextList);

  return (
    <header className="dsfilter-header">
      <div className="dsfilter-title">
        <h1>DSFilter</h1>
      </div>
      <div className="dsfilter-product-count">
        <p>{contextList} produto(s)</p>
      </div>
    </header>
  );
}
