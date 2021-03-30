/* 
1. Erstellt eine Seite "Suche".
2. Auf der Seite soll ein Text-Eingabefeld sein, 
dessen Inhalt an die API /api/uppercase gesendet werden soll.
3. Die Antwort soll in einem strong-Element mit der Klasse
big-text angezeigt werden.

*/

import { useState } from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";


export default function Suche() {

  const [bigText, setBigText] = useState("");
  
  return <Layout title="Suche"><strong className="big-text">{bigText}</strong>
  <Search setBigText={setBigText}/></Layout>;
}