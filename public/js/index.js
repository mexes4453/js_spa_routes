import view_home from "../views/view_home.js"

console.log("js is loaded");

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};



const router = async () => {

    // array of route objects
    const routes = [
                      { path: "/", view: () => view_home},
                      { path: "/post", view: () => console.log("Viewing posts") },
                      { path: "/settings", view: () => console.log("Viewing settings") }
                   ];

    // Test each route for potential match and returns an array of objects containing routes
    const matchRoutes = routes.map( route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let matched = matchRoutes.find( route => route.isMatch );
    if (!matched)
    {
        matched = {
            route: routes[0],
            isMatch: true
        };
    }
        
    //console.log( matchedRoute.route.view() );
    /* replacing the above line with new version */
    const view = new matched.route.view();
    // Update the page content 
    document.querySelector("#app").innerHTML = await view.getHtml();
};



/**
 * Allows user to navigate over the history by using the back and forward 
 * buttons on the browser */
window.addEventListener("popstate", router);



/**
 * Allows user to navigate with setting new url on the browser url widget */
document.addEventListener( "DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {

        // checks if the target has the attribute "data-link" 
        if (e.target.matches("[data-link]"))
        {
            e.preventDefault();
            navigateTo(e.target.href);
        };
    });
    router();
});

