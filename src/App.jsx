import { Routes, Route } from "react-router-dom";
import Header from "./Shared/Header";
import Home from "./Pages/Home";

import Services from "./Pages/Services";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";
import Multiagent from "./Pages/Multiagent";


import Enterprise from "./Pages/Enterprise";
import Publicservice from "./Pages/Publicservice";
import Leadership from "./Pages/Leadership";
import Company from "./Pages/Company";
import Cisco from "./Pages/Cisco";
import Google from "./Pages/Google";
import Contactus from "./Pages/Contactus";
import Certifications from "./Pages/Certifications";
import ClinicalData from "./Pages/ClinicalData";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/company" element={<Company />}  />
          <Route path="/clinicalDataManagement" element={<ClinicalData />} />
          <Route path="/partners/cisco" element={<Cisco />}  />    
          <Route path="/partners/google" element={<Google />}  />     
          <Route path="/about/leadership" element={<Leadership />}  />
          <Route path="/about/certifications" element={<Certifications />}  />
          <Route path="/services" element={<Services />} />
          <Route path="/services/multiagent" element={<Multiagent />} />
          <Route path="/services/enterprise" element={<Enterprise />} />
          <Route path="/services/publicservice" element={<Publicservice />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/contactus" element={<Contactus />}  />
        </Routes>
      </main>
    </>
  );
}

export default App;
