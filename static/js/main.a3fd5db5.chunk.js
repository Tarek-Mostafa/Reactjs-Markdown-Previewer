(this["webpackJsonpReactjs-Markdown-Preview"]=this["webpackJsonpReactjs-Markdown-Preview"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),i=t.n(r),s=t(4),l=t(1),c=t.n(l);function d(){const e=Object(a.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),n=Object(s.a)(e,2),t=n[0],r=n[1];return c.a.setOptions({breaks:!0}),o.a.createElement("div",{className:"markdownContainer"},o.a.createElement("h1",{className:"title"},"Markdown Previewer (Reactjs)"),o.a.createElement("textarea",{id:"editor",onChange:function(e){r(e.target.value)},value:t}),o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:c()(t)}}))}t(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},5:function(e,n,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.a3fd5db5.chunk.js.map