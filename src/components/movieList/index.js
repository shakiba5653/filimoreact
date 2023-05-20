import "./style.css";

export default function MovieList(props) {
    function renderMovies() {
        return props.data.map(function (movie, i) {
            return (
                <li className="movieBox" key={i}>
                    <a href={movie.link}>
                        <div className="info">
                            <img src={movie.imageUrl} />
                            <div className="Play">
                                <i className="fa-solid fa-play"></i>
                            </div>
                            <div className="text">
                                <h3>{movie.text}</h3>
                            </div>
                        </div>
                    </a>
                </li>
            )
        })
    }
    return (

        <div className="filimoBox verticalPadding">
            <h2 className="title">{props.title}</h2>
            <ul className="special">
                {renderMovies()}
            </ul>
        </div>

    )
}