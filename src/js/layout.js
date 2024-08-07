import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import injectContext from '../js/store/appContext';
import Navbar from './component/navbar';
import { Footer } from './component/footer';
import Home from './views/home';
import FavoritesList from './component/favoritelist';
import DetailView from './component/detailview';



const Layout = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters/:uid" element={<DetailView type="characters" />} />
                    <Route path="/vehicles/:uid" element={<DetailView type="vehicles" />} />
                    <Route path="/planets/:uid" element={<DetailView type="planets" />} />
                    <Route path="/favorites" element={<FavoritesList />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default injectContext(Layout);