import "./section.css";

const Section = (props) => {
	return (
		<>
			{props.movies.map((elem, index) => {
				return (
					<div key={index}>
						<h2>{elem.category}</h2>
						<nav className="carousel">
							{elem.images.map((movie, movieIndex) => {
								return <img key={movieIndex} src={movie} alt="movie" />;
							})}
						</nav>
					</div>
				);
			})}
		</>
	);
};

export default Section;
