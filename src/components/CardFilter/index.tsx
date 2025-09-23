import "./styles.css";

export default function CardFilter() {
  return (
    <div className="card-filter-container ml-120 mt-20">
      <form className="card-filter-form">
        <input 
            type="text" 
            placeholder="Preço mínimo" 
        />
        <input 
            type="text" 
            placeholder="Preço máximo" 
        />
        <button className="card-filter-button mt-20">Filtrar</button>
      </form>
    </div>
  );
}
