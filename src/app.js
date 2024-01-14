import Home from "./views/pages/Home.js";
import Login from "./views/pages/Login.js";
import Game from "./views/pages/Game.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = [
    {path: "/", view: Home},
    {path: "/login", view: Login},
    {path: "/game", view: Game}
];

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.render();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});