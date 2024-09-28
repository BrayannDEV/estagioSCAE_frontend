import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
