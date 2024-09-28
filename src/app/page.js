import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
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
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img4.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Pedicure tradicional & em Gel</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img3.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Manicure tradicional & em gel</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img7.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Blindagem</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img8.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Banho em gel</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img2.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Esmaltação & remoção tradicional</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img3.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Esmaltação e remoção em Gel</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img4.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Plástica nos pés</h4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 my-4">
            <div class="bg-white   p-3 text-center ">
              <a href="/servico">
                <div class="zoom-effect">
                  <img src="images/service-img6.jpg" class="img-fluid " alt="image"/>
                </div>
              </a>
              <a href="/servico" class="hover-color" style={{textDecoration: "none", color: "black"}}>
                <h4 class="mt-3 m-0">Alongamento na fibra de vidro</h4>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
