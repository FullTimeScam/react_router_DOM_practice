import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import Detail from "./pages/Detail";
import NotFound404 from "./pages/404NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      {/* 브라우저 라우터로 감싸면 가장 최상위에 적용됨 */}
      {/* 1. 라우터(BrowserRouter) 불러주고 */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          <Route path="/coin/:id" element={<Detail />} />
        </Route>
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
