import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import A from "./pages/a";

const App = () => {
  return (
    <BrowserRouter>
      {/* 브라우저 라우터로 감싸면 가장 최상위에 적용됨 */}
      <Routes>
        {/* 폴더링 할거다 = Routes 컴포넌트는 URL 경로에 따라 어떤 컴포넌트를 렌더링할지 정의함 */}
        <Route path="/" element={<Home />} />
        {/* 폴더 */}
        <Route path="/A" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
