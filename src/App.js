import AppBarNav from "./components/nav/AppBarNav";
import Home from "./components/pages/home/Home";
import AddNew from "./components/pages/addNew/AddNew";
import Detail from "./components/pages/detail/Detail";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/pages/edit/Edit";

function App() {
  return (
    <div>
      <AppBarNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/addNew" element={<AddNew />}></Route>
      </Routes>
    </div>
  );
}

export default App;
