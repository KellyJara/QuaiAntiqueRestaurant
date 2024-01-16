import Route from "./Route.js";


//Définir ici vos routes

/*export const allRoutes = [

    new Route("/", "Accueil", "/pages/home.html", []),
    
    new Route("/signin", "Connexion", "/auth/signin.html", ["disconnected"], "/js/signin.js"),
    new Route("/signup", "Inscription", "/auth/signup.html", ["disconnected"], "/js/signupENSAYO.js"),
    new Route("/account", "Mon compte", "/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"["client"]),

  ];*/

  export const allRoutes = [
        new Route("/", "Accueil", "/pages/home.html", []),
        new Route("/photos", "Photos", "/pages/photos.html",[]),
        new Route("/signin", "Connexion", "/auth/signin.html", ["disconnected"], "/js/signin.js"),
        new Route("/signup", "Inscription", "/auth/signup.html", ["disconnected"], "/js/signupENSAYO.js"),
        new Route("/account", "Mon compte", "/auth/account.html", ["client", "admin"]),
        new Route("/editPassword", "Changement de mot de passe", "/auth/editPassword.html", ["client", "admin"]),
        new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
        new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
    ];


//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";