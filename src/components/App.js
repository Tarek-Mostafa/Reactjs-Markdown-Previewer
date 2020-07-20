import React, { useState } from "react";
import marked from "marked";

export default function App() {
   
const initialText = "## Title";

   const [ text, setText ] = useState(initialText);

   marked.setOptions({
      breaks: true,
   });

   function mark(e) {
      setText(e.target.value);
   }

   return (
        <div className="markdownContainer">
           <h1 className="title">Markdown Previewer (Reactjs)</h1>
           <textarea id="editor" onChange={ mark } value={ text }></textarea>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }} ></div>
        </div>
   )
}