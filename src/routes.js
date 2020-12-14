import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Datatable from "views/Datatable.jsx";
import Reset from "views/Account.jsx";
import Firebase from 'views/FireBaseData.jsx'
import Session from "components/DataFromFire/Session"
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-plugin",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/dataTabel",
    name: "Prova DataTable",
    icon: "pe-7s-joy",
    component: Datatable,
    layout: "/admin"
  },
  {
    path: "/reset",
    name: "Reset Password",
    icon: "pe-7s-lock",
    component: Reset,
    layout: "/admin"
  },
  {
    path: "/data",
    name: "Data from Firebase",
    icon: "pe-7s-piggy",
    component: Firebase,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "FreeDashBoard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/free"
  },

  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/free"
  },

  {
    path: "/session",
    component: Session,
    layout: "/admin"
  }
];

export default dashboardRoutes;
