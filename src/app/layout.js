
'use client'
import localFont from "next/font/local";
import { useState, useEffect} from "react";
import "./globals.css";
import "../../public/css/vendor.css"
import "../../public/style.css"

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
    return <>Prerendered</>
  }

  return (
    <html lang="pt-br">
      <head>
        {css}
      </head>
      <body>
        <header id="header"> 
          <nav id="primary-header" className="navbar navbar-expand-lg py-3">
            <div className="container-lg">
              <a className="navbar-brand" href="#">
                <img src="/images/main-logo.png" className="logo img-fluid"/>
              </a>
              <button className="navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false">
                <svg className="navbar-icon" width="60" height="60">
                  <use href="#navbar-icon"></use>
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
                      <a className="nav-link fw-semibold active p-0" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0 dropdown">
                      <a className="nav-link fw-semibold p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Serviços</a>
                      <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                        <li><a href="services.html" className="dropdown-item">Services <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="services-single.html" className="dropdown-item">Service-Details <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                      </ul>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0">
                      <a className="nav-link fw-semibold p-0" href="contact.html">Contato</a>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0">
                      <a className="nav-link p-0 fw-bold text-uppercase"
                        href="https://templatesjungle.gumroad.com/l/beauty-and-nail-salon-website-template"
                        target="_blank">LOGIN</a>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0">
                      <a className="nav-link p-0 fw-bold text-uppercase"
                        href="https://templatesjungle.gumroad.com/l/beauty-and-nail-salon-website-template"
                        target="_blank">CADASTRE-SE</a>
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
        <section id="services" class="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}}>
          {/* "background-image: url(images/background-1.jpg); background-size: cover; background-repeat: no-repeat; background-position: center;" */}
          <div class="container-lg padding-medium">
            <div class="section-title text-center mb-5">
              <h2 class="display-4 fw-normal">Services we Offer</h2>
            </div>

            <div class="row g-lg-5 my-0">
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img5.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Hydra Facial</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img3.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Art Nail & Effects</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img7.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Paraffin For Nail Hands</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img8.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Glitter For Nail Art</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img2.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Classic Nail Manicure</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img1.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Eyelashes Extensions</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img4.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Pedicure</h4>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 my-4">
                <div class="bg-white   p-3 text-center ">
                  <a href="services-single.html">
                    <div class="zoom-effect">
                      <img src="images/service-img6.jpg" class="img-fluid " alt="image"/>
                    </div>
                  </a>
                  <a href="services-single.html" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                    <h4 class="mt-3 m-0">Deep Paraffin Waxing</h4>
                  </a>
                </div>
              </div>

            </div>

            <div className="text-center">
              <a className="btn btn-primary mt-5" href="services.html">See All Services</a>
            </div>

          </div>
        </section>


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
