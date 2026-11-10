document.addEventListener("click", (e) => {
    const { target } = e;
    if ( !target.matches("nav a") ){
        return;
    }
    e.preventDefault();
    urlRoute();
})


const urlRoute = (event) => {
    // capture event from user or from the browser.
    event = event || window.event;
    event.preventDefault();
    window.history.pushState( {}, "", event.target.href);
    urlLocationHandler();
}


const urlRoutes = {
    404: {
        template: "/templates/404.html",
        title: "",
        description: ""
    },
    "/": {
        template: "/templates/index.html"
        title: "",
        description: ""
    },
    "/about": {
        template: "/templates/about.html",
        title: "About",
        description: "Tell us more"
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "",
        description: ""
    },
    "/index": {
        template: "/templates/index.html",
        title: "",
        description: ""
    },
};

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0 )
    {
        location = "/";
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template)
                       .then( (response) => {
                           response.text();
                       });
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]')
            .setAttribute("content", route.description);
};


window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();

