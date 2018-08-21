import Person from "@material-ui/icons/Person";

import SignIn from "views/SignIn/LoginContainersjsx";
import SignUp from "views/SignUp/SignUp.jsx";

const loginedRoutes = [
  {
    path: "/sign-in",
    sidebarName: "SignIn",
    navbarName: "SignIn",
    icon: Person,
    component: SignIn
  },
  {
    path: "/sign-up",
    sidebarName: "SignUp",
    navbarName: "SignUp",
    icon: Person,
    component: SignUp
  },
/*
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }*/
];

export default loginedRoutes;