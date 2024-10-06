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
import Popup from "./Components/Popup";
import MoreInfo from "./Layout/MoreInfo";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Sindex />}>
      <Route path="" element={<Home />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="new" element={<Account />} />
      <Route path="men" element={<Men />} />
      <Route path="men/:id" element={<MoreInfo />} />
    </Route>
  ))
  return (
    <>
      <GlobalStyles />
      <Popup />
      <RouterProvider router={router} />
    </>
  )
}

export default App
