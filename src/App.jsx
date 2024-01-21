import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={`intro/`} element={<Content />} />
                <Route path={`intro/:notionPageId`} element={<Content />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;