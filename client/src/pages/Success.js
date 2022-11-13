
import React from "react";
import { QUERY_PRODUCT } from "../utils/queries.js";
import { useQuery } from '@apollo/react-hooks';
export default function Success() {

  
  localStorage.setItem('item', '636c69070ac827fc701f3684')
  let item = localStorage.getItem('item');
  localStorage.removeItem('item');

  const { loading, data: productData } = useQuery(QUERY_PRODUCT, {
    variables : {id: item}
    });


  return (
    <div>
      TERds

    </div>
  )
}