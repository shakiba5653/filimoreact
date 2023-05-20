import './style.css'
export default function Stars(props) {
    const { listName, title } = props
    function renderStars() {
        return listName.map(function (item, index) {
            const { image, name } = item
            return (
                <li key={index}>
                    <img className='starPhoto' src={image} />
                    <p>{name}</p>
                </li>
            )
        })
    }
    return (
        <div>
            <h2>{title}</h2>
            <ul className='starsList'>{renderStars()}</ul>
        </div>
    )
}