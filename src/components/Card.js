function Card() {
    return (
        <div className="card">
            <div className="favorite">
            <img src="/img/heart.svg" alt="Unliked"/>
            </div>
            <img className="image" width={129} height={198} src="/img/bags/1.jpg" alt="Bags"/>
            <h5>Сумка Shoulder Pouch</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>6 990 руб.</b>
                </div>
                <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;