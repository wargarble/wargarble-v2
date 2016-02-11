require('babel-register')({
  "presets": ["es2015", "react"]
});

const React = require("react");
const app = React.createElement(require("./containers/App").default);
const fs = require("fs");
const reactDOMServer = require("react-dom/server");
const path = require("path");

fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, html) => {
	if (err) {
		console.error("Couldn't find index.html, returning.");
		return;
	}

	html = html.replace(
		new RegExp("<div id=\"wargarble\"></div>"),
		`
		<div id="wargarble">
			${reactDOMServer.renderToString(app)}
		</div>
		`
	);

	console.log(html);
});
