import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListingPage from "./Pages/ProductListingPage";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route
              path="/description/:name"
              element={<ProductDescriptionPage />}
            />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
