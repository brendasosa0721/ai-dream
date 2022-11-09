import { useState } from "react";
import { QUERY_CREATION } from "../utils/queries";
import { useLazyQuery } from '@apollo/react-hooks';
import InputForm  from '../components/CreationForm/inputForm';

export default function Logos() {
  // const [promptInput, setPromptInput] = useState("");
  // const [prompt, {loading, data, error}] = useLazyQuery(QUERY_CREATION,{
  //   variables : {promptInput: promptInput}
  //   }
  // );

  // let result;
  // async function onSubmit(event) {
  //   prompt();
  //   event.preventDefault();
  // }
  // if (!loading) {
  //   result = data?.api.data;
  //   console.log(result);
  // }
  return (
    <div>
      <InputForm></InputForm>
    </div>
    // <div>
      
    //   <h1>Logo Generator </h1>
    //   <main>
    //     <h3>Enter logo design concept</h3>
    //     <form onSubmit={onSubmit}>
    //       <input
    //         type="text"
    //         name="logo"
    //         placeholder="Enter description"
    //         value={promptInput}
    //         onChange={(e) => setPromptInput(e.target.value)}
    //       />
    //       <input type="submit" value="Generate image" />
    //     </form>
    //     {result?.data.length > 0 ? (
    //     <>
    //       <hr />
    //       <div>
    //         <img src={result.data[0].url} alt="logo design concept" />
    //       </div>
    //     </>
    //     ):''}
    //   </main>
    // </div>
  );
}
