'use client'

export default function Gravar() {
    
    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
        {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
          <div className="container-lg padding-medium">
            <div className="offset-md-3 col-md-6 text-center ">

              <h2 className="display-4 fw-normal mb-3">Cadastr</h2>

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
    );

}