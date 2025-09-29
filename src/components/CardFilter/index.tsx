import { useState } from "react";
import "./styles.css";

type FormData = {
  precoMin: number;
  precoMax: number;
}

type Props = {
  onFilter: Function;
}

export default function CardFilter({ onFilter }: Props) {

  const [formData, setFormData] = useState<FormData>({
    precoMin: 0,
    precoMax: 0
  });

  function handleInputChange(event: any) {
    const name = event.target.name;
    const value = Number(event.target.value); // conversão para número
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(formData.precoMin || 0, formData.precoMax || Number.MAX_VALUE);
  }


  return (
    <div className="card-filter-container ml-120 mt-20">
      <form className="card-filter-form" onSubmit={handleSubmit}>
        <input 
            name="precoMin"
            value={formData.precoMin || ''}
            type="text" 
            placeholder="Preço mínimo" 
            onChange={handleInputChange}
        />
        <input 
            name="precoMax"
            value={formData.precoMax || ""}
            type="text" 
            placeholder="Preço máximo" 
            onChange={handleInputChange}
        />
        <button className="card-filter-button mt-20">Filtrar</button>
      </form>
    </div>
  );
}
