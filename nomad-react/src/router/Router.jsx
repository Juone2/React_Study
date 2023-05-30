import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "../Movie/Home";
import Detail from '../Movie/Detail';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes> 
    </BrowserRouter> 
  )
}

export default Router;