import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";

import store from "redux/store";
import Layout from "components/layouts/layout";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
