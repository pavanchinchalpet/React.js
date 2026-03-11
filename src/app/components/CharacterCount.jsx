import { useState } from "react";

function CharCount() {

  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="dammu unte rayi ra"
      />

      <p>Characters: {input.length}</p>
    </div>
  );
}

export default CharCount;