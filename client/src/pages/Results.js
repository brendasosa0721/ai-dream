import { useState } from "react";
import generateImage from "../utils/api"

export default function Results() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await generateImage({
      prompt: promptInput
    });
    const data = await response;
    setResult(data);
    setPromptInput("");
  }

  return (
    <div>
      
      <h1>Logo Generator</h1>
      <main>
        <h3>Enter logo design concept</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="logo"
            placeholder="Enter description"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type="submit" value="Generate image" />
        </form>
        {result?.data.data.length > 0 ? (
        <>
          <hr />
          <div>
            <img src={result.data.data[0].url} alt="logo design concept" />
          </div>
        </>
        ):''}
      </main>
    </div>
  );
}
