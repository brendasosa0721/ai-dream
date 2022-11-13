
import React from "react";
import { QUERY_PRODUCT } from "../utils/queries.js";
import { useQuery } from '@apollo/react-hooks';
import { Routes, Route, useParams } from "react-router-dom";



export default function Success() {
let {sessionId} = useParams();
console.log("session id", sessionId)


  // localStorage.setItem('item', '636c69070ac827fc701f3684')
  // let item = localStorage.getItem('item');
  // localStorage.removeItem('item');

  // const { loading, data: productData } = useQuery(QUERY_PRODUCT, {
  //   variables : {id: item}
  //   });


  return (
    <div style={{ fontSize: "50px" }}>
           Now showing post {sessionId}
         </div>
  )
}