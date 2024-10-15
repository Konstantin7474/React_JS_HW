/* import logo from './logo.svg'; */
import "./App.css";
/* import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; */
/* import Message from "./components/Message"; */
/* import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage"; */
/* import { ThemeSwitcher } from "./components/ThemeSwitcher"; */
/* import CommentList from "./components/CommentList"; */
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import Form from "./components/Form/Form";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Message text="тест текст" />
        <CommentList />
        <BrowserRouter>
        <header className="App-header">
          <ul className="list">
            <li>
              <Link to="/" className="link">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                О нас
              </Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <ThemeSwitcher/> */}
        <Form />
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
