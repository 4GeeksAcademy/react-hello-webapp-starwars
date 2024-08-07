import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Card = ({ item, type }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.uid === item.uid);

    const handleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorite(item);
        } else {
            actions.addFavorite({ ...item, type });
        }
    };

    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} 
                className="card-img-top" 
                alt={item.name || item.title}
                onError={(e) => e.target.src='https://via.placeholder.com/150'}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name || item.title}</h5>
                <Link to={`/${type}/${item.uid}`} className="btn btn-primary">
                    Learn more
                </Link>
                <button onClick={handleFavorite} className="btn btn-warning ml-2">
                    {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div>
        </div>
    );
};

export default Card;