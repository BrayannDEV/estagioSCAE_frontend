'use client'

export default function Agendamento() {
    

    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
        {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="container-lg padding-medium">
            <div className="offset-md-3 col-md-6 text-center ">

            <h2 className="display-4 fw-normal mb-3">Agendar</h2>

            <form className="contact-form row mt-5">
                <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" name="procedimento" placeholder="Procedimento" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="date" name="data" placeholder="Insira sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                <input type="time" name="hora" placeholder="Insira sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div class="col-md-12 col-sm-12 mb-4">
                    <textarea type="text" name="observacao" placeholder="Escreva uma observação" rows="4" className="w-100 border-0 ps-4 py-2"></textarea>
                </div>
            </form>

            <button className="btn btn-primary mt-3" style={{backgroundColor: "DF808F", border: "none"}}>Confirmar</button>
            </div>

        </div>
        </section>
    )

}