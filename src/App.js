import "./styles.css";
import { useState } from "react";

const translations = {
  en: {
    title: "Hello World",
    description: "This is a translation example.",
    button: "Click Me",
  },
  hi: {
    title: "नमस्ते दुनिया",
    description: "यह एक अनुवाद का उदाहरण है।",
    button: "क्लिक करें",
  },
  fr: {
    title: "Bonjour le monde",
    description: "Ceci est un exemple de traduction.",
    button: "Cliquez moi",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <h1>{translations[lang].title}</h1>
      <h1>{translations[lang].description}</h1>
      <h1>{translations[lang].button}</h1>
      <h3>Change Language:</h3>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}
