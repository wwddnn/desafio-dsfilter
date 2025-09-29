import './styles.css';
import { useContext, useEffect, useState } from 'react';
import * as productService from '../../services/product-service';
import { type ProductDTO } from '../../models/product';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import { ContextList } from '../../utils/context-list';

type QueryParams = {
  min: number;
  max: number;
}

export default function ListingBody() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  // contexto global
  const { contextList, setContextList } = useContext(ContextList);


  const [queryParams, setQueryParams] = useState<QueryParams>({
    min: 0,
    max: Number.MAX_VALUE
  });
 
  useEffect(() => {
    const price = productService.findByPrice(queryParams.min, queryParams.max);
    setProducts(price);
    setContextList(price.length); // contexto global
  }, [queryParams]);

  function handleFilter(min: number, max: number) {
    setQueryParams({...queryParams, min: min, max: max});
  }

  return (
    <>
      <main>
        <section>
          <CardFilter onFilter={handleFilter} />
          <CardListing products={products}/>
        </section>
      </main>
    </>
  );
}
