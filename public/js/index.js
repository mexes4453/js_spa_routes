console.log("js is loaded");

const router = async () => {

    // array of route objects
    const routes = [
                      { path: "/", view: () => console.log("Viewing Dashboard") },
                      { path: "/post", view: () => console.log("Viewing posts") },
                      { path: "/settings", view: () => console.log("Viewing settings") }
                   ];

    // Test each route for potential match
    const matchRoutes = routes.map( route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    let matchRoute = matchRoutes.find( route => route.isMatch );
        
    console.log( matchRoutes );
};


document.addEventListener( "DOMContentLoaded", () => {
    router();
});
