import { BrowserRouter, Routes } from "react-router-dom";
import Homepage from "../Homepage";

function App(){
    return(
       <BrowserRouter>
       <Routes path="/*">
       <Route path="/" element={<Homepage/>}></Route>
       </Routes>
       </BrowserRouter>
    );
}