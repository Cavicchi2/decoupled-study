import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ArticleFullDisplay from "../Pages/ArticleFullDisplay";
import Homepage from '../Pages/Homepage'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/view/article/:id" element={<ArticleFullDisplay />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Router;