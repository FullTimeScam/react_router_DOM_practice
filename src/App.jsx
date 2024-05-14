import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import A from "./pages/a";
import Detail from "./pages/Detail";
import NotFound404 from "./pages/404NotFound";

const App = () => {
  return (
    <BrowserRouter>
      {/* 브라우저 라우터로 감싸면 가장 최상위에 적용됨 */}
      {/* 1. 라우터(BrowserRouter) 불러주고 */}
      <Routes>
        {/* 2. 폴더링(Routes) 시작하고 폴더링 할거다 = Routes 컴포넌트는 URL 경로에 따라 어떤 컴포넌트를 렌더링할지 정의함 */}
        {/* 3. 폴더(Route)를 만든다 */}
        <Route path="/" element={<Home />} />
        <Route path="/A" element={<A />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
