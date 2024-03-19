// components
import Section from "./components/Section";

// css
import "./App.css";

// json
import movies from "./assets/json/movies_rnexgr.json";

// img
import logoNetflix from "./assets/img/logoNetflix.png";

function App() {
	return (
		<>
			<header>
				<img src={logoNetflix} alt="" />
			</header>
			<main>
				<Section movies={movies} />
			</main>
		</>
	);
}

export default App;
