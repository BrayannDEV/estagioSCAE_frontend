
'use client'
import localFont from "next/font/local";
import { useState, useEffect} from "react";
import "./globals.css";
import '../../public/template/css/fontawesome-free/css/all.min.css'
import "../../public/css/vendor.css"
import "../../public/style.css"
import { AuthProvider } from './context/userContext.js'

const css = 
<>
<link rel="stylesheet" type="text/css" href="css/vendor.css"/>;
<link rel="stylesheet" type="text/css" href="style.css"></link>;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"></link>;
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>;
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Jost:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"></link>;
</>



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <>Carregando</>
  }

  return (
    <html lang="pt-br">
      <head>
        {css}
      </head>
      <body>
          <AuthProvider>
          <div>
            
            <header id="header"> 
              <nav id="primary-header" className="navbar navbar-expand-lg py-3">
                <div className="container-lg">
                  <a className="navbar-brand" href="/">
                    <img src="/images/main-logo.png" className="logo img-fluid"/>
                  </a>
                  <button className="navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false">
                    <svg className="navbar-icon" width="60" height="60">
                      <use src="#navbar-icon"></use>
                    </svg>
                  </button>
                  <div className="header-bottom offcanvas offcanvas-end" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                    <div className="offcanvas-header px-4 mt-3 ">
                      <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"
                        data-bs-target="#bdNavbar"></button>
                    </div>
                    <div className="offcanvas-body align-items-center justify-content-end">
                      <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item px-3 py-2 py-lg-0">
                          <a className="nav-link fw-semibold p-0" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-3 py-2 py-lg-0">
                          <a className="nav-link fw-semibold p-0" href="/agendamento">Agendar</a>
                        </li>
                        <li className="nav-item px-3 py-2 py-lg-0">
                          <a className="nav-link p-0 fw-bold text-uppercase" href="/login">LOGIN/CADASTRO</a>
                        </li>
                        <li className="nav-item search-dropdown py-2 py-lg-0 ms-3 ms-lg-5 dropdown">
                          <a className="nav-link p-0 search dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-expanded="false">
                            <svg className="search text-primary " width="24" height="24">
                              <use href="#search"></use>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 p-3 shadow">
                            <li className="position-relative d-flex align-items-center p-0">
                              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-primary position-absolute end-0" type="submit">
                                <svg className="search" width="24" height="24">
                                  <use href="#search"></use>
                                </svg>
                              </button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <div>
              {children}
            </div>
            <footer id="footer">
            <div className="container-lg padding-medium">
              <div className="row ">
                <div className="col-md-4 my-4 ">
                  <div className="footer-menu">
                    <a className="navbar-brand" href="/">
                      <img src="../images/main-logo.png" className="logo img-fluid"/>
                    </a>
                    <p className="mt-4"></p>
                  </div>
                </div>
                <div className="col-md-2 my-2 ">
                  <div className="footer-menu">
                    <h5 className="text-uppercase fw-bold  mb-2">Horarios</h5>
                    <ul className="info list-unstyled mt-2">
                      <li className="clock mb-2 align-items-center">
                        <p className="mt-4">Segunda a Sábado</p>
                        <p className="mt-4">8:00 - 18:00</p>
                        <p className="mt-4">Domingo: fechado</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 my-2 ">
                  <div className="footer-menu">
                    <h5 className="text-uppercase fw-bold  mb-2">Endereço:</h5>
                    <ul className="info list-unstyled mt-2">
                      <li className="clock text-capitalize mb-2 align-items-center">
                        <p className="mt-4">Maria graça mele, 227</p>
                        <p className="mt-4">Servante II</p>
                      </li>
                      <li className="location text-capitalize mb-2 align-items-center">
                        <p className="mt-4">Presidente Prudente, SP</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 my-2 ">
                  <div className="footer-menu">
                    <h5 className="text-uppercase fw-bold  mb-2">contato:</h5>
                    <ul className="info list-unstyled mt-2">
                      <li className="phone text-capitalize mb-2 align-items-center">
                        <p className="mt-4">+55 (18)99689-5025</p>
                      </li>
                      <li className="email  mb-2 align-items-center">
                        <p className="mt-4">@dellas_nails_art</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray border-top">
              <div className="text-center py-4">
                <p className="mb-0">Dellas Nails Art</p>
              </div>
            </div>
          </footer>
          
          </div>
          </AuthProvider>

        <script src="/js/jquery-1.11.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"></script>
        <script type="text/javascript" src="/js/plugins.js"></script>
        <script type="text/javascript" src="/js/script.js"></script>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </body>
      
    </html>
  );
}
