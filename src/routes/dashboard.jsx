// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Receipt from "@material-ui/icons/Receipt";
import SettingsIcon from "@material-ui/icons/SettingsApplications";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// /
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
/*import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";*/
import Reports from "views/Reports/Reports.jsx";
import Settings from "views/Settings/Settings.jsx";
import SignIn from "views/SignIn/SignIn.jsx";
import SignUp from "views/SignUp/SignUp.jsx";
import EmailVerify from "../views/EmailVerify/EmailVerify";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/reports",
    sidebarName: "Reports",
    navbarName: "Reports",
    icon: Receipt,
    component: Reports
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: SettingsIcon,
    component: Settings
  },
  {
    path: "/login",
    sidebarName: "SignIn",
    navbarName: "SignIn",
    icon: Person,
    component: SignIn
  },
  {
    path: "/register",
    sidebarName: "SignUp",
    navbarName: "SignUp",
    icon: Person,
    component: SignUp
  },
  {
    path: "/verify",
    sidebarName: "",
    navbarName: "",
    icon: "",
    component: EmailVerify
  },
  /*{
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },*/
  /*{
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },*/
  /*{
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },*/
  /*{
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },*/
  /*{
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },*/
  /*{
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },*/
  /*{
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },*/
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
