import React, { useEffect, useState } from 'react'


export default function Pagination() {

  const [products , setProducts] = useState([]);
  const [page , setPage] = useState(1);


  const fetchProducts = async () =>{
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()
    if (data && data.products) {
      setProducts(data.products);
    }
  }
  console.log(products)

  useEffect(()=>{
    fetchProducts();
  },[]);

  function selectPageHandler(selectedPage){
    if (selectedPage >= 1 &&
      selectedPage <= products.length/10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
    
  }

  Math.cei
  return (
    <div>
  {products.length > 0 && (
    <div className="products">
      {products.slice(page *10 - 10, page*10).map((prod) => {
        return (
          <span className="product__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <h1>{prod.title}</h1>
          </span>
        );
      })}
    </div>
  )}

  {products.length > 0 && (
    <div className="pagination">
      <span onClick={()=> selectPageHandler(page - 1)} className={page>1 ? "" : "pagination__disable"}>{`<`}</span>
      
      {[...Array(products.length / 10)].map((_, i) => {
          return <span key={i} onClick={()=> selectPageHandler(i + 1)} className={page === i + 1 ? "pagination__selected" : ""} >{i + 1}</span>
        })}

      <span onClick={()=> selectPageHandler(page + 1)} className={page < products.length/10 ? "" : "pagination__disable"}>{`>`}</span>
    </div>
  )}
</div>

  )
}
