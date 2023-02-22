import React from "react";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import Footer from "./Footer/Footer";

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
			<Projects />

			<Contact />
			<Footer />
		</div>
	);
};

export default App;
