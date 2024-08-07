import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const DetailView = ({ type }) => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItem(data.result.properties);
            } catch (error) {
                console.error('Error fetching data:', error);
                setItem(null);  // Manejo de errores
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, uid]);

    const imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`;

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : item ? (
                <div className="card mb-3">
                    <img 
                        src={imageUrl} 
                        className="card-img-top" 
                        alt={item.name || item.title} 
                        onError={(e) => e.target.src='https://via.placeholder.com/150'}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.name || item.title}</h5>
                        <p className="card-text">
                            {Object.entries(item).map(([key, value]) => (
                                <div key={key}>
                                    <strong>{key.replace('_', ' ')}:</strong> {value}
                                </div>
                            ))}
                        </p>
                    </div>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default DetailView;