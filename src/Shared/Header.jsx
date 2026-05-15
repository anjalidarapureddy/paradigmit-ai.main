import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import down from "/src/Images/Services/downarrow.png";
import up from "/src/Images/Services/uparrow.png";
import aiLogo from "/src/Images/ParadigmaiLogo.svg";
import search from "/src/Images/search.png";
import menu from "/src/Images/menu.png";
import arrowRight from "/src/Images/arrow_right.svg";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenDropdown("");
    setShowSearch(false);
    setMobileOpen(false);
    setMobileSub("");
  }, [location.pathname]);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About - Company", path: "/about/company" },
    { name: "About - Leadership", path: "/about/leadership" },
    { name: "About - Certifications", path: "/about/certifications" },
    { name: "CDM", path: "/ClinicalDataManagement" },
    {
      name: "Services - Unified Multi-Agent AI Platform",
      path: "/services/multiagent",
    },
    { name: "Services - Sovereign AI Box", path: "/services/enterprise" },
    {
      name: "Services - Digital Public Services",
      path: "/services/publicservice",
    },
    { name: "Partners - Cisco", path: "/partners/cisco" },
    { name: "Partners - Google", path: "/partners/google" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const filteredPages = pages.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowSearch(false);
        setMobileOpen(false);
        setMobileSub("");
        setOpenDropdown("");
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/ClinicalDataManagement"))
      return "clinicalDataManagement";
    if (path.startsWith("/services")) return "services";
    if (path.startsWith("/partners")) return "partners";
    if (path === "/contactus") return "contact";
    return "";
  };

  const activeTab = getActiveTab();

  const navItem = (isActive) =>
    `relative transition font-medium px-3 py-2 ${
      isActive
        ? "text-[#2286FE] font-semibold"
        : "text-gray-800 hover:text-[#2286FE]"
    }`;

  const handleSearchToggle = () => {
    setShowSearch((s) => !s);
    setOpenDropdown("");
    setMobileOpen(false);
    setMobileSub("");
    if (!showSearch) setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md backdrop-blur-md transition-all duration-300">
      <div className="flex flex-col items-center w-full transition-all duration-300">
        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-3 gap-4 md:gap-8">
          {/* LOGO */}
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => {
              setOpenDropdown("");
              setMobileOpen(false);
            }}
          >
            <img src={aiLogo} alt="ParadigmIT" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex gap-4 lg:gap-6 font-satoshi items-center">
            <NavLink
              to="/"
              className={navItem(activeTab === "home")}
              onClick={() => setOpenDropdown("")}
            >
              Home
            </NavLink>

            {/* ABOUT DESKTOP */}
            <button
              className={`${navItem(activeTab === "about")} flex items-center gap-1`}
              onClick={() => {
                setOpenDropdown((v) => (v === "about" ? "" : "about"));
                setShowSearch(false);
                setMobileOpen(false);
                setMobileSub("");
              }}
            >
              About Us
              <img
                src={openDropdown === "about" ? up : down}
                className="w-3 h-3"
                alt=""
              />
            </button>

            {/* SERVICES DESKTOP */}
            <button
              className={`${navItem(activeTab === "services")} flex items-center gap-1`}
              onClick={() => {
                setOpenDropdown((v) => (v === "services" ? "" : "services"));
                setShowSearch(false);
                setMobileOpen(false);
                setMobileSub("");
              }}
            >
              AI Solutions
              <img
                src={openDropdown === "services" ? up : down}
                className="w-3 h-3"
                alt=""
              />
            </button>

            {/* CDM DESKTOP */}
            <NavLink
              to="/ClinicalDataManagement"
              className={navItem(activeTab === "clinicalDataManagement")}
              onClick={() => setOpenDropdown("")}
            >
              CDM
            </NavLink>

            {/* PARTNERS DESKTOP */}
            <button
              className={`${navItem(activeTab === "partners")} flex items-center gap-1`}
              onClick={() => {
                setOpenDropdown((v) => (v === "partners" ? "" : "partners"));
                setShowSearch(false);
                setMobileOpen(false);
                setMobileSub("");
              }}
            >
              Partners
              <img
                src={openDropdown === "partners" ? up : down}
                className="w-3 h-3"
                alt=""
              />
            </button>

            <Link
              to="/contactus"
              className={navItem(activeTab === "contact")}
              onClick={() => setOpenDropdown("")}
            >
              Contact us
            </Link>
          </nav>

          {/* SEARCH ICON */}
          <img
            src={search}
            alt="Search"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition"
            onClick={handleSearchToggle}
          />

          {/* MOBILE HAMBURGER MENU */}
          <button
            className="md:hidden block"
            onClick={() => {
              setMobileOpen((v) => !v);
              if (mobileOpen) setMobileSub("");
              setOpenDropdown("");
              setShowSearch(false);
            }}
            aria-label="Toggle menu"
          >
            <img src={menu} alt="Menu" className="w-7 h-7" />
          </button>
        </div>

        {/* SEARCH BAR */}
        {showSearch && (
          <div className="w-full border-t border-gray-200 bg-white px-4 sm:px-6 md:px-8 py-2">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-2xl sm:text-3xl md:text-4xl font-light border-none outline-none placeholder-gray-400 focus:outline-none"
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-2xl px-4"
                >
                  ×
                </button>
              </div>

              {searchQuery && (
                <div className="mt-4 max-h-80 overflow-y-auto">
                  {filteredPages.length > 0 ? (
                    filteredPages.map((page, index) => (
                      <Link
                        key={index}
                        to={page.path}
                        onClick={() => {
                          setShowSearch(false);
                          setSearchQuery("");
                        }}
                        className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-800 hover:text-[#2286FE] transition text-lg"
                      >
                        {page.name}
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500 px-4 py-3">No results found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileOpen && !showSearch && (
          <div className="md:hidden w-full bg-white border-t shadow-md px-6 py-4">
            <nav className="flex flex-col space-y-3">
              <NavLink
                to="/"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileSub("");
                }}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive ? "text-[#2286FE]" : "text-gray-800"
                  }`
                }
              >
                Home
              </NavLink>

              {/* ABOUT MOBILE */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-2 font-medium text-gray-800"
                  onClick={() =>
                    setMobileSub((s) => (s === "about" ? "" : "about"))
                  }
                >
                  <span>About Us</span>
                  <img
                    src={mobileSub === "about" ? up : down}
                    className="w-3 h-3"
                    alt=""
                  />
                </button>
                {mobileSub === "about" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <NavLink
                      to="/about/company"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Company
                    </NavLink>
                    <NavLink
                      to="/about/leadership"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Leadership
                    </NavLink>
                    <NavLink
                      to="/about/certifications"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Certifications
                    </NavLink>
                    <a
                      href="https://techbharat.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      TechBharat
                    </a>
                  </div>
                )}
              </div>

              {/* SERVICES MOBILE */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-2 font-medium text-gray-800"
                  onClick={() =>
                    setMobileSub((s) => (s === "services" ? "" : "services"))
                  }
                >
                  <span>AI Solutions</span>
                  <img
                    src={mobileSub === "services" ? up : down}
                    className="w-3 h-3"
                    alt=""
                  />
                </button>
                {mobileSub === "services" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <NavLink
                      to="/services/multiagent"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Unified Multi-Agent AI Platform
                    </NavLink>
                    <NavLink
                      to="/services/enterprise"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Sovereign AI Box
                    </NavLink>
                    <NavLink
                      to="/services/publicservice"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Digital Public Services
                    </NavLink>
                    <a
                      href="https://pathsetter.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      AI Project Management
                    </a>
                    <a
                      href="https://paradigmitcyber.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Cybersecurity AI
                    </a>
                    <a
                      href="https://paradome.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Defence AI
                    </a>
                  </div>
                )}
              </div>

              {/* CDM MOBILE - THIS WAS MISSING! */}
              <NavLink
                to="/ClinicalDataManagement"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileSub("");
                }}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive ? "text-[#2286FE]" : "text-gray-800"
                  }`
                }
              >
                CDM
              </NavLink>

              {/* PARTNERS MOBILE */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-2 font-medium text-gray-800"
                  onClick={() =>
                    setMobileSub((s) => (s === "partners" ? "" : "partners"))
                  }
                >
                  <span>Partners</span>
                  <img
                    src={mobileSub === "partners" ? up : down}
                    className="w-3 h-3"
                    alt=""
                  />
                </button>
                {mobileSub === "partners" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <NavLink
                      to="/partners/cisco"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Cisco
                    </NavLink>
                    <NavLink
                      to="/partners/google"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-gray-700 hover:text-[#2286FE]"
                    >
                      Google
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/contactus"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileSub("");
                }}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive ? "text-[#2286FE]" : "text-gray-800"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        )}

        {/* DESKTOP DROPDOWNS */}
        {openDropdown && !showSearch && (
          <div className="hidden md:flex w-full justify-center px-4 sm:px-8 pb-4 pt-2 border-t border-gray-200">
            {/* ABOUT */}
            {openDropdown === "about" && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <div className="w-36 bg-gray-50 p-6 flex items-center justify-center border-r">
                  <h3 className="text-[#2286FE] font-semibold">About us</h3>
                </div>
                <div className="w-60 py-2 flex flex-col">
                  {[
                    { to: "/about/company", label: "Company" },
                    { to: "/about/leadership", label: "Leadership" },
                    { to: "/about/certifications", label: "Certifications" },
                    {
                      to: "https://techbharat.ai/",
                      label: "TechBharat",
                      external: true,
                    },
                  ].map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.to}
                      target={item.external ? "_blank" : "_self"}
                      className="flex items-center justify-between px-4 py-3 hover:text-[#2286FE] group"
                    >
                      {item.label}
                      <img
                        src={arrowRight}
                        className="w-5 opacity-0 group-hover:opacity-100 transition"
                        alt=""
                      />
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            {/* SERVICES */}
            {openDropdown === "services" && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <div className="w-40 bg-gray-50 p-6 flex items-center justify-center border-r">
                  <h3 className="text-[#2286FE] font-semibold">AI Solutions</h3>
                </div>
                <div className="w-80 py-2 flex flex-col">
                  {[
                    {
                      to: "/services/multiagent",
                      label: "Unified Multi-Agent AI Platform",
                    },
                    { to: "/services/enterprise", label: "Sovereign AI Box" },
                    {
                      to: "/services/publicservice",
                      label: "Digital Public Services",
                    },
                    {
                      to: "https://pathsetter.ai/",
                      label: "AI Infrastructure Project Management",
                      external: true,
                    },
                    {
                      to: "https://paradigmitcyber.com/",
                      label: "Cybersecurity AI",
                      external: true,
                    },
                    {
                      to: "https://paradome.in/",
                      label: "Defence AI",
                      external: true,
                    },
                  ].map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.to}
                      target={item.external ? "_blank" : "_self"}
                      className="flex items-center justify-between px-4 py-3 hover:text-[#2286FE] group"
                    >
                      {item.label}
                      <img
                        src={arrowRight}
                        className="w-5 opacity-0 group-hover:opacity-100 transition"
                        alt=""
                      />
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            {/* PARTNERS */}
            {openDropdown === "partners" && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <div className="w-32 bg-gray-50 p-6 flex items-center justify-center border-r">
                  <h3 className="text-[#2286FE] font-semibold">Partners</h3>
                </div>
                <div className="w-60 py-2 flex flex-col">
                  {[
                    { to: "/partners/cisco", label: "Cisco" },
                    { to: "/partners/google", label: "Google" },
                  ].map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.to}
                      className="flex items-center justify-between px-4 py-3 hover:text-[#2286FE] group"
                    >
                      {item.label}
                      <img
                        src={arrowRight}
                        className="w-5 opacity-0 group-hover:opacity-100 transition"
                        alt=""
                      />
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}