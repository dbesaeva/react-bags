import React from 'react';
import styles from './Card.module.scss';

function Card({id, onFavorite, title, price, imageUrl, onPlus, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFaforite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({id, title, price, imageUrl});
        setIsFavorite(!isFaforite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFaforite ? "/img/heart-liked.svg" : "/img/heart.svg"} alt="Unliked"/>
            </div>
            <img className={styles.image} width={129} height={198} src={imageUrl} alt="Bags"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    );
}

export default Card;