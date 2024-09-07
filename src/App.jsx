import Sindex from "./Layout/Sindex";
import { GlobalStyles } from "./Components/StyledComponents/Global";
import Login from "./Layout/Login";
import Home from "./Layout/Home";
import Men from "./Layout/Men";
import { MenLoader } from "./Hooks/MenLoader";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Account from "./Layout/Account";
import { ProductProvider } from "./Contexts/ProductContext";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Sindex />}>
      <Route path="" element={<Home />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="new" element={<Account />} />
      <Route path="men" element={<Men />} loader={MenLoader} />
    </Route>
  ))
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
