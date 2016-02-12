require('babel-register')({
  "presets": ["es2015", "react"]
});

const fs = require("fs");
const path = require("path");

const React = require("react");
const reactDOMServer = require("react-dom/server");

const app = React.createElement(require("./containers/App").default);
const indexSource = path.join(__dirname, "index.html");
const indexDist = path.join(__dirname, "index.html");

fs.readFile(path.join(indexSource), "utf8", (err, html) => {
	if (err) {
		console.error("Couldn't find index.html, returning.");
		return;
	}

	html = html.replace(
		new RegExp("<div id=\"wargarble\"></div>"),
		`<div id="wargarble">
			${reactDOMServer.renderToString(app)}
		</div>`
	);

	fs.writeFile(indexDist, html);
});
