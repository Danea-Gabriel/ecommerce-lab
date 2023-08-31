import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./app/store.js";
import { Provider } from "react-redux";
import { fetchProducts } from "./redux/productsSlice.js";
import { fetchArticles } from "./redux/articlesSlice.js";
import { PersistGate } from "redux-persist/integration/react";
import { app } from "./firebase.js";
import "react-toastify/dist/ReactToastify.css";

store.dispatch(fetchProducts());
if (store.getState().persisted.articles.data.length === 0) {
  store.dispatch(fetchArticles());
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
