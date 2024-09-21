import localFont from "next/font/local";
import "./globals.css";
import "../../public/css/vendor.css"
import "../../public/style.css"

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"></link>;
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>;
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Jost:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"></link>;


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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header id="header">
          <nav className="header-top bg-secondary py-1">
            <div className="container-lg">
              <div className="d-flex flex-wrap justify-content-between align-items-center" >
                <ul className="info d-flex flex-wrap list-unstyled m-0">
                  <li className="location fs-6 text-capitalize text-black d-flex align-items-center me-4">
                    <svg className="me-2" width="18" height="18">
                      <use href="#location"></use>
                    </svg> State Road 003 Trinity, Florida
                  </li>
                  <li className="phone fs-6 text-capitalize text-black d-flex align-items-center me-4">
                    <svg className="me-2" width="18" height="18">
                      <use href="#phone"></use>
                    </svg> call: 666 333 9999
                  </li>

                </ul>
                <div className="social">
                  <ul className="info d-flex flex-wrap list-unstyled m-0">

                    <li className="social-icon text-black d-flex align-items-center me-3">
                      Follow us:
                    </li>
                    <li className="social-icon text-dark d-flex align-items-center me-3">
                      <a href="#"> <svg width="18" height="18">
                          <use href="#facebook"></use>
                        </svg> </a>
                    </li>
                    <li className="social-icon text-dark d-flex align-items-center me-3">
                      <a href="#"> <svg width="18" height="18">
                          <use href="#instagram"></use>
                        </svg> </a>
                    </li>
                    <li className="social-icon text-dark d-flex align-items-center ">
                      <a href="#"> <svg width="18" height="18">
                          <use href="#twitter"></use>
                        </svg> </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </nav>

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
                        aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                        <li><a href="about.html" className="dropdown-item">About Us <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="appointment.html" className="dropdown-item">Appointment
                            <span className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="team.html" className="dropdown-item">Team <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="pricing.html" className="dropdown-item">Price Plan <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="gallery.html" className="dropdown-item">Gallery <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="faq.html" className="dropdown-item">FAQs <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="contact.html" className="dropdown-item">Contact <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="review.html" className="dropdown-item">Reviews <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="thankyou.html" className="dropdown-item">Thankyou <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="error.html" className="dropdown-item">Error 404 <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="styles.html" className="dropdown-item">Styles <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                      </ul>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0 dropdown">
                      <a className="nav-link fw-semibold p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                        <li><a href="shop.html" className="dropdown-item">Shop <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="single-product.html" className="dropdown-item">Single-Product <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="cart.html" className="dropdown-item">Cart <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="wishlist.html" className="dropdown-item">Wishlist <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="checkout.html" className="dropdown-item">Checkout <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                      </ul>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0 dropdown">
                      <a className="nav-link fw-semibold p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Services</a>
                      <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                        <li><a href="services.html" className="dropdown-item">Services <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="services-single.html" className="dropdown-item">Service-Details <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                      </ul>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0 dropdown">
                      <a className="nav-link fw-semibold p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Blog</a>
                      <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                        <li><a href="blog.html" className="dropdown-item">Blog <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                        <li><a href="single-post.html" className="dropdown-item">Single-Post <span
                              className="badge bg-secondary text-black">Pro</span></a></li>
                      </ul>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0">
                      <a className="nav-link fw-semibold p-0" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item px-3 py-2 py-lg-0">
                      <a className="nav-link p-0 fw-bold text-uppercase"
                        href="https://templatesjungle.gumroad.com/l/beauty-and-nail-salon-website-template"
                        target="_blank">Get Pro</a>
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
