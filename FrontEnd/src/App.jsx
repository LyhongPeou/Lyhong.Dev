import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Root from "./Pages/Root";
import ProjectPage from "./Pages/Projects";
import AboutPage from "./Pages/About";
import ClassPage from "./Pages/Classes";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/projects", element: <ProjectPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/classes", element: <ClassPage />}
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
