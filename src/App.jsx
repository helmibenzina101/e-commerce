import { BrowserRouter as Router,Routes, Route } from "react-router-dom";




import Menu from "./componants/Menu";
import Editarticle from "./componants/Articles/Editarticle";
import Listearticles from "./componants/Articles/Listarticles";
import Insertarticle from "./componants/Articles/Insertarticle";
import Viewarticle from "./componants/categories/Viewcategorie";
import Viewcategorie from "./componants/categories/Viewcategorie";
import Listcategories from "./componants/categories/Listcategories";
import Insertcategorie from "./componants/categories/Insertcategorie";
import Insertscategorie from "./componants/scategories/Insertscategorie";
import Editcategorie from "./componants/categories/Editcategorie";
import Editscategorie from "./componants/scategories/Editscategorie";
import Viewscategorie from "./componants/scategories/Viewscategorie";
import Listearticlescard from "./componants/Client/Listearticlecard";

const App=() =>{
return (
  <div>
     
    <Router>
    <Menu />
      <Routes>
        <Route path="/articles" element={<Listearticles />} />
        <Route path="/articles/add" element={<Insertarticle />} />
        <Route path="/article/edit/:id" element={<Editarticle />} />
        <Route path="/article/view/:id" element={<Viewarticle />} />
        <Route path="/categories" element={<Listcategories />} />
        <Route path="/categories/add" element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}/>
        <Route path="/scategories" element={<Listcategories/>}/>
        <Route path="/scategories/add" element={<Insertscategorie/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
        <Route path="/client" element={<Listearticlescard/>}/>
        <Route path="/articlescard" element={<Listearticlescard/>}/>
      </Routes>
    </Router>
  </div>
);
}
export default App;