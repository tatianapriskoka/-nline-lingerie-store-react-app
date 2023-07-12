import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import Root from "./routes/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice.js";
import { fetchColors } from "./features/colorSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path='catalog/:gender/:category?' element={<MainPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </>
  )
)

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchColors());
  useEffect(() => {
    dispatch(fetchNavigation());
  }, [dispatch]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;
