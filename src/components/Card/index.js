import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';
import { AppContext } from '../../App';

function Card({
    id, 
    onFavorite, 
    title, 
    price, 
    imageUrl, 
    onPlus, 
    favorited = false, 
    added = false,
    loading = false
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFaforite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, price, imageUrl});
    };

    const onClickFavorite = () => {
        onFavorite({id, title, price, imageUrl});
        setIsFavorite(!isFaforite);
    }

    return (
        <div className={styles.card}>
            {loading ? (
            <ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
            ) : (
            <>
                <div className={styles.favorite} onClick={onClickFavorite}>
                {onFavorite && <img src={isFaforite ? "/img/heart-liked.svg" : "/img/heart.svg"} alt="Unliked"/>}
                </div>
                <img className={styles.image} width={129} height={198} src={imageUrl} alt="Bags"/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                    </div>
                    {onPlus && <img 
                        className={styles.plus} 
                        onClick={onClickPlus} 
                        src={isItemAdded(id) ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} 
                        alt="Plus"
                    />}
                </div>
            </>        
            )}
        </div>
    );
}

export default Card;