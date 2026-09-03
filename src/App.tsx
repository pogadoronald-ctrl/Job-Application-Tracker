import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AddApplication from "./pages/AddApplication";

export default function App(){
  return(
    <BrowserRouter>
      <Routes >
        <Route element={<AppLayout />} > 
          <Route path="/" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/add" element={<AddApplication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}