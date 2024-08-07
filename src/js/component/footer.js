import React from 'react';

// Puedes añadir imágenes o íconos específicos de Star Wars si están disponibles.
export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center bg-dark text-light">
        <div className="container">
            <p className="mb-0">
                <span role="img" aria-label="star-wars">
                    🌌
                </span>{" "}
                Made in a galaxy far, far away with <i className="fa fa-heart text-danger" /> by{" "}
                <a 
                    href="http://www.4geeksacademy.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light"
                >
                    Lucas Caneo
                </a>
            </p>
            <p className="mt-2">
                <a 
                    href="https://www.starwars.com"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-light"
                >
                    Star Wars Official Site
                </a>
            </p>
        </div>
    </footer>
);
