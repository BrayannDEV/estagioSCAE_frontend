
import styles from "../page.module.css";

export default function Home() {
  return (
    <section id="services" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}}>
      {/* "background-image: url(images/background-1.jpg); background-size: cover; background-repeat: no-repeat; background-position: center;" */}
      <div className="container-lg padding-medium">

        <div className="text-center">
          <a className="btn btn-primary mt-5" style={{backgroundColor: "DF808F", border: "none", marginBottom: 100}} href="services.html">Agende seu horário</a>
        </div>

        <div className="section-title text-center mb-5">
          <h2 className="display-4 fw-normal">Serviços Oferecidos</h2>
        </div>

        <div className="row g-lg-5 my-0">
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img4.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Pedicure tradicional & em Gel</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img3.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Manicure tradicional & em gel</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img7.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Blindagem</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img8.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Banho em gel</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img2.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Esmaltação & remoção tradicional</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img3.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Esmaltação e remoção em Gel</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img4.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Plástica nos pés</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-4">
            <div className="bg-white   p-3 text-center ">
              <a href="/admin/procedimento">
                <div className="zoom-effect">
                  <img src="images/service-img6.jpg" className="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/admin/procedimento" className="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 className="mt-3 m-0">Alongamento na fibra de vidro</h4>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}