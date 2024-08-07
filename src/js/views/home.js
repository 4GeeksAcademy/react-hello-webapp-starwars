import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../component/card';

const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1>People</h1>
            <div className="row">
                {store.people.map(person => (
                    <div key={person.uid} className="col-4">
                        <Card item={person} type="characters" />
                    </div>
                ))}
            </div>
            <h1>Vehicles</h1>
            <div className="row">
                {store.vehicles.map(vehicle => (
                    <div key={vehicle.uid} className="col-4">
                        <Card item={vehicle} type="vehicles" />
                    </div>
                ))}
            </div>
            <h1>Planets</h1>
            <div className="row">
                {store.planets.map(planet => (
                    <div key={planet.uid} className="col-4">
                        <Card item={planet} type="planets" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
