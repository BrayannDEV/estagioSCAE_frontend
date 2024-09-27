
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

            <div className="text-center">
              <a className="btn btn-primary mt-5" style={{backgroundColor: "DF808F", border: "none", marginBottom: 100}} href="services.html">Agende seu horário</a>
            </div>

            <div class="section-title text-center mb-5">
              <h2 class="display-4 fw-normal">Serviços Oferecidos</h2>
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

          </div>
        </section>

        <section id="price" class="jarallax" style={{backgroundImage: "url(images/background-2.jpg)"}}>
        {/* "background-image: url(images/background-2.jpg); background-size: cover; background-repeat: no-repeat; background-position: center;" */}
          <div class="container-lg padding-medium">
            <div class="section-title text-center mb-5">
              <h2 class="display-4 fw-normal">Procedimentos e valores</h2>
            </div>

            <div class="row g-md-5 my-0">
              <div class="col-md-6 my-4">
                <div class="bg-white p-2 p-lg-5">
                  <div class="list-group rounded-0">
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img4.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Pedicure Tradicional</h4>
                            <h4 class="fw-semibold">R$30.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Pé com esmaltação normal, removível.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img2.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Manicure Tradicional</h4>
                            <h4 class="fw-semibold">R$25.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Mão com esmaltação normal, removível.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img4.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Pedicure em Gel</h4>
                            <h4 class="fw-semibold">$45.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Pé com esmalte que dura 10 à 15 dias e sai seco.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img3.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Manicure em Gel</h4>
                            <h4 class="fw-semibold">$35.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Mão com esmalte que dura 10 a 15 dias e sai seco.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img8.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Manutenção alongamento</h4>
                            <h4 class="fw-semibold">$100.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Somente manutenção do alongamento.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img8.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Blindagem</h4>
                            <h4 class="fw-semibold">$50.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Para ajudar a esmaltação tradicional durar mais.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img8.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Banho em Gel</h4>
                            <h4 class="fw-semibold">$70.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Para ajudar as unhas crescerem sem quebrar, não alonga.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 my-4">
                <div class="bg-white p-2 p-md-5">
                  <div class="list-group rounded-0">
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img2.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Esmaltação tradicional</h4>
                            <h4 class="fw-semibold">$15.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Somente a esmaltação normal sem cutícula.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img7.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Esmaltação em gel</h4>
                            <h4 class="fw-semibold">$15.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Somente a esmaltação que sairá seca.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img4.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Plástica dos pés + pedicure</h4>
                            <h4 class="fw-semibold">$70.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Procedimento que remove fissuras e calosidades + Pedicure.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img6.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Alongamento na fibra de vidro</h4>
                            <h4 class="fw-semibold">$120.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Extensor de unhas.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img8.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Remoção de Alongamento</h4>
                            <h4 class="fw-semibold">$30.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Somente Remoção do alongamento.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img8.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Remoção esmaltação em gel</h4>
                            <h4 class="fw-semibold">$30.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Somente a remoção da esmaltação.</p>
                      </div>
                    </a>
                    <a href="#"
                      class="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                      aria-current="true">
                      <img src="images/service-img8.jpg" alt="twbs" width="100" height="100"
                        class="rounded-circle flex-shrink-0 mb-4"/>
                      <div>
                        <div class="d-flex gap-4 w-100 justify-content-between">
                          <h4 class="fw-semibold">Alongamento Unidade</h4>
                            <h4 class="fw-semibold">$5.00</h4>
                        </div>
                        <p class="mb-0 opacity-75">Reposição de gel cada unha.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
        {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
          <div className="container-lg padding-medium">
            <div className="offset-md-3 col-md-6 text-center ">

              <h2 className="display-4 fw-normal mb-3">Cadastre-se</h2>

              <form className="contact-form row mt-5">
                <div className="form-input col-lg-12 d-md-flex mb-3">
                  <input type="text" name="nome" placeholder="Nome completo" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                  <input type="number" name="fone" placeholder="Numero de telefone" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                  <input type="text" name="login" placeholder="Cadastre um login" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                  <input type="password" name="senha" placeholder="Cadastre sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                  <input type="password" name="senha" placeholder="Confirme sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
              </form>

              <button className="btn btn-primary mt-3" href="#" style={{backgroundColor: "DF808F", border: "none"}}>Cadastrar</button>
            </div>

          </div>
        </section>
        <footer id="footer">
          <div class="container-lg padding-medium">
            <div class="row ">
              <div class="col-md-4 my-4 ">
                <div class="footer-menu">
                  <a class="navbar-brand" href="index.html">
                    <img src="images/main-logo.png" class="logo img-fluid"/>
                  </a>
                  <p class="mt-4">Hic, dolor soluta, dolores laudantium reprehenderit ullam, similique voluptate omnis modi
                    sit minima illo.</p>
                  <ul class="info list-unstyled mt-4">

                  </ul>
                  <div class="social-links mt-4">
                    <ul class="d-flex  list-unstyled gap-2 m-0">
                      <li class="social">
                        <a href="#">
                          <iconify-icon class="social-icon" icon="ri:facebook-fill"></iconify-icon>
                        </a>
                      </li>
                      <li class="social">
                        <a href="#">
                          <iconify-icon class="social-icon" icon="ri:twitter-fill"></iconify-icon>
                        </a>
                      </li>
                      <li class="social">
                        <a href="#">
                          <iconify-icon class="social-icon" icon="ri:pinterest-fill"></iconify-icon>
                        </a>
                      </li>
                      <li class="social">
                        <a href="#">
                          <iconify-icon class="social-icon" icon="ri:instagram-fill"></iconify-icon>
                        </a>
                      </li>
                      <li class="social">
                        <a href="#">
                          <iconify-icon class="social-icon" icon="ri:youtube-fill"></iconify-icon>
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-2 my-2 ">
                <div className="footer-menu">
                  <h5 className="text-uppercase fw-bold  mb-2">Sobre</h5>
                  <ul className="info list-unstyled mt-2">
                    <li className="clock text-capitalize mb-2 align-items-center">
                      <p className="mt-4">Segunda a Sexta: 8:00-18:00</p>
                      <p className="mt-4">Domingo: fechado</p>
                    </li>
                    <li className="location text-capitalize mb-2 align-items-center">
                      <p className="mt-4">Presidente Prudente, SP</p>
                    </li>

                    <li className="phone text-capitalize mb-2 align-items-center">
                      <p className="mt-4">+55 (18)98184-0860</p>
                    </li>
                    <li className="email text-capitalize mb-2 align-items-center">
                      <p className="mt-4">fernanda@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="bg-gray border-top">
            <div className="text-center py-4">
              <p className="mb-0">©2024 Beauty. Free HTML Template by: <a href="https://templatesjungle.com/" target="_blank"
                  className="text-decoration-underline text-black"> TemplatesJungle</a></p>
            </div>
          </div>
        </footer>


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
