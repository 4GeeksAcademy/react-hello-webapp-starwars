const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            fetchPeople: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error('Error fetching people:', error);
                }
            },
            fetchVehicles: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles');
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error('Error fetching vehicles:', error);
                }
            },
            fetchPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets');
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error('Error fetching planets:', error);
                }
            },
            addFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] });
            },
            removeFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.uid !== item.uid) });
            }
        }
    };
};

export default getState;
