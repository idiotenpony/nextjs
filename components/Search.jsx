import { useState, useEffect } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

export default function Search({ setBigText }) {
  /* das ist der State für den */
  const [text, setText] = useState("");

  const debouncedText = useDebouncedValue(text, 600);

  useTextFetch(text, setBigText, debouncedText);

  return (
    <form className="filter" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Suchbegriff eingeben:</label>
      <input
        id="search"
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

function useTextFetch(text, setBigText, debouncedText) {
  useEffect(() => {
    async function fetchBigText() {
      try {
        const response = await fetch(`/api/uppercase?text=${debouncedText}`);

        if (!response.ok) {
          throw new Error("Fehler beim Laden der Daten!");
        }

        const searchData = await response.json();
        setBigText(searchData.bigText);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBigText();
  }, [text, setBigText, debouncedText]);
}
