import React from "react";

export default function Preview(props) {
	return (
		<div id="preview" dangerouslySetInnerHTML={{ __html: props.text }} ></div>
	)
}