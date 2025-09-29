import type { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function CardListing({ products }: Props) {
  return (
    <div className="card-listing-container ml-120 mt-20">
      <div className="card-listing-items">
          {
            products.map((product) => (
              <div key={product.id} className="card-listing-item mb-10" >
                <h4>{product.name} </h4>
                <p>R$ {product.price.toFixed(2)}</p>
              </div>
            ))
          }
      </div>
    </div>
  );
}
