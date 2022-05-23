import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { request } from "graphql-request";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Page from "./pages/page/Page";

function App() {
	const [pages, setPages] = useState(null);

	useEffect(() => {
		const fetchPages = async () => {
			const { pages } = await request(
				"https://api-eu-central-1.graphcms.com/v2/cl3a5qe60007q01xmfuo8ga8x/master",
				`
        {
          pages {
            name
            id
            slug
            meta {
              title
              description
            }
          }
        }
        `
			);
			setPages(pages);
		};
		fetchPages();
	}, []);

	return (
		<div className="App">
			<Header pages={pages} />
			<Main pages={pages} />
			<footer></footer>
		</div>
	);
}

export default App;
