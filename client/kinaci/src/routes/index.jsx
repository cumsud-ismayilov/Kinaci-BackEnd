import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import HomePage from "../pages/homePage";
import Contact from "../pages/contact";
import Comments from "../pages/comments";
import Blog from "../pages/blog";
import About from "../pages/about";
import Possessions from "../pages/possessions";
import Service from "../pages/service";
import ForSale from "../pages/forSale";
import ForRent from "../pages/forRent";
import FreeProperty from "../pages/freeProperty";
import EstateInvestments from "../pages/estateInvestments";
import StudyTour from "../pages/studytour";
import SalesServices from "../pages/salesService";
import OnlineTour from "../pages/onlineTour";
import SelectionPortfolio from "../pages/selectionPortfolio";
import Support from "../pages/support";
import ProductCardDetail from "../pages/productCardDetail";
import SoldPossessions from "../pages/soldPossesions";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import Properties from "../admin/Properties";
import AdminContacts from "../admin/contacts";
import NewsDetail from "../pages/newsCardDetail"
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductCardDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/news/:id",
        element: <NewsDetail />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/possessions",
        element: <Possessions />,
      },
      {
        path: "/forSale",
        element: <ForSale />,
      },
      {
        path: "/forRent",
        element: <ForRent />,
      },
      {
        path: "/soldPossessions",
        element: <SoldPossessions />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/freeProperty",
        element: <FreeProperty />,
      },
      {
        path: "/estateInvestments",
        element: <EstateInvestments />,
      },
      {
        path: "/studyTour",
        element: <StudyTour />,
      },
      {
        path: "/salesServices",
        element: <SalesServices />,
      },
      {
        path: "/onlineTour",
        element: <OnlineTour />,
      },
      {
        path: "/selectionPortfolio",
        element: <SelectionPortfolio />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
      {
        path: "properties",
        element: <Properties />,
      },
      { path: "contacts", element: <AdminContacts /> },
    ],
  },
]);
