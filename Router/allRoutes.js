import Route from "./Route.js";


//Définir ici vos routes

export const allRoutes = [

    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/photos", "Photos", "/pages/photos.html"),
    new Route("/signin", "Connexion", "/auth/signin.html"),
    new Route("/signup", "Inscription", "/auth/signup.html"),
    new Route("/account", "Mon compte", "/auth/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/auth/editPassword.html"),

  ];


//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";