if (module.hot) {
  module.hot.accept()
}

import React from "react";
import ReactDOM from "react-dom";
import App from "App";

// TODO: figure out a good way to manage this shit.
require("../css/main.less");

const Wargarble = {
	init() {
		const mountNode = document.getElementById("wargarble");
		ReactDOM.render(<App />, mountNode);
	},
};

if (
	document.readyState === "complete" ||
	document.readyState === "interactive" ||
	document.readyState === "loaded"
) {
	Wargarble.init();
} else {
	document.addEventListener("DOMContentLoaded", Wargarble.init);
}
