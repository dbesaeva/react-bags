function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
            <img src="/img/heart.svg" alt="Unliked"/>
            </div>
            <img className="image" width={129} height={198} src={props.imageUrl} alt="Bags"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price} руб.</b>
                </div>
                <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;