import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from './card';

const FavoritesList = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1>Favorites</h1>
            <div className="row">
                {store.favorites.length > 0 ? (
                    store.favorites.map((item, index) => (
                        <div key={index} className="col-4">
                            <Card item={item} type={item.type} />
                        </div>
                    ))
                ) : (
                    <p>No existen favoritos agregados!.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesList;
