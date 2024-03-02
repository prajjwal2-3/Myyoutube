import "./App.css";
import Header from "./Header";
import Maincon from "./Maincon";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Watchpage from "./Watchpage";
import { Provider } from "react-redux";
import { store } from "../Utils/Appstore";
import Error from "./Error";
function App() {
  return (
    <Provider store={store}>
      <div className="App bg-zinc-900">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Maincon />,
      },
      {
        path: "/watch/:id",
        element: <Watchpage />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
