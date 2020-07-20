import React from "react";

export default function Preview(props) {

	function changeText(e) {
		props.changeEditorText(e.target.value)
	}

	return (
		<textarea id="editor" onChange={ changeText } value={ props.text }></textarea>
	)
}