const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            listFavorite: [],
            mensaje: "",
            personajes: [],
            planetas: [],
            vehiculos: [],
            detallePeople: {},
            detallePlanet: {},
            detalleVehicle: {},
            colorFavorite: "far fa-heart"
        },
        actions: {
            // Use getActions to call a function within a fuction
            addFavorite: (item) => {
                let store = getStore()
                if (store.listFavorite.includes(item)) {
                    getActions().deleteFavorite(item);
                } else {
                    setStore({
                        listFavorite: [...store.listFavorite, item],
                        mensaje: "visually-hidden"
                    }, )

                }
            },


            deleteFavorite: (id) => {
                let store = getStore()
                setStore({
                    listFavorite: store.listFavorite.filter((item) => item !== id)
                })

                if (store.listFavorite.length === 0) {
                    setStore({
                        mensaje: ""
                    })
                }
            },

            getListPeople: () => {
                try {
                    fetch('https://swapi.dev/api/people/', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => response.json()).then((data) => {
                        console.log(data.results);
                        setStore({
                            personajes: data.results
                        })
                    });
                    //
                } catch (e) {
                    console.log(e);
                }

            },

            getListPlanet: () => {
                try {
                    fetch('https://swapi.dev/api/planets/', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => response.json()).then((data) => {
                        console.log(data);
                        setStore({
                            planetas: data.results
                        })
                    });
                    //
                } catch (e) {
                    console.log(e);
                }

            },

            getListVehicle: () => {
                try {
                    fetch('https://swapi.dev/api/vehicles/', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => response.json()).then((data) => {
                        console.log(data);
                        setStore({
                            vehiculos: data.results
                        })
                    });
                    //
                } catch (e) {
                    console.log(e);
                }

            },

            getDetailPeople: (id) => {
                try {
                    fetch('https://swapi.tech/api/people/' + id, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => response.json()).then((data) => {
                        console.log(data);
                        setStore({
                            detallePeople: data.result.properties
                        })
                    });
                    //
                } catch (e) {
                    console.log(e);
                }
            },

            getDetailPlanet: (id) => {
                try {
                    fetch('https://swapi.tech/api/planets/' + id, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => response.json()).then((data) => {
                        console.log(data);
                        setStore({
                            detallePlanet: data.result.properties
                        })
                    });
                    //
                } catch (e) {
                    console.log(e);
                }
            },

            getDetailVehicle: (id) => {
                try {
                    fetch('https://swapi.tech/api/vehicles/' + id, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => response.json()).then((data) => {
                        console.log(data);
                        setStore({
                            detalleVehicle: data.result.properties
                        })
                    });
                    //
                } catch (e) {
                    console.log(e);
                }
            },

            changeColor: (item) => {
                let store = getStore()
                if (store.listFavorite.includes(item)) {
                    return "fa fa-heart text-danger fs-4";
                } else {
                    return "far fa-heart text-danger fs-4"
                }
            },

            changeOpacity: (item) => {
                let store = getStore()
                if (store.listFavorite.includes(item)) {
                    return "opacity-100";
                } else {
                    return ""
                }
            }





        }
    };
};

export default getState;