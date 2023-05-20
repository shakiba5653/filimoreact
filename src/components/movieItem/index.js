import './style.css'
export default function MovieList(props) {
    function renderMovies() {
        return props.listName.map(function (item, index) {
            return (
                <li className="movieBox" key={index}>
                    <div className='imageContent'>
                        <img src={item.image} />
                        <div className='content'>
                            <p>{item.type} {item.year}</p>
                            <p>{item.rating}</p>
                            <p>{item.subtitle}</p>
                            <p>{item.imdb}</p>
                            <img className="playIcon" src={item.play} />
                        </div>
                    </div>
                    <h3 className="title">{item.title}</h3>
                    <p className="update">{item.update}</p>
                </li>
            )
        })
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <ul className='movieBoxes'>{renderMovies()}</ul>
        </div>
    )
}  