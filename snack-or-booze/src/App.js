import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Snack from "./MenuItem";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function getMenus() {
            let snacks = await SnackOrBoozeApi.getSnacks();
            let drinks = await SnackOrBoozeApi.getDrinks();
            setSnacks(snacks);
            setDrinks(drinks);
            setIsLoading(false);
        }
        getMenus();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar snacks={snacks} drinks={drinks} />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home snacks={snacks} />
                        </Route>
                        <Route exact path="/snacks">
                            <Menu menuType={snacks} title="Snacks" />
                        </Route>
                        <Route exact path="/drinks">
                            <Menu menuType={drinks} title="Drinks" />
                        </Route>
                        <Route path="/snacks/:id">
                            <Snack items={snacks} cantFind="/snacks" />
                        </Route>
                        <Route path="/drinks/:id">
                            <Snack items={drinks} cantFind="/drinks" />
                        </Route>
                        <Route>
                            <p>Hmmm. I can't seem to find what you want.</p>
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
