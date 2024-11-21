'use client'
import { useRef, useState } from "react"
import { useRouter } from "next/navigation";
import httpClient from "../utils/httpClient.js";
import { useAuth } from "../context/userContext.js";

export default function Login() {
    
    //let login = useRef("");
    //let senha = useRef("");
    let router = useRouter();
    const { loginContexto } = useAuth();

    const [loginData, setLoginData] = useState({
        login: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async () => {
        try {
        const data = await httpClient.post("/login", {...loginData});
        console.log(data)
        const userObj = {
            nome: data.cliente.nome,
            login: data.cliente.login
        }

        loginContexto(userObj, data.token)

        router.push('/admin');
        } catch (error) {
        console.log(error)
        }
    }

    async function autenticar(){

        if(login.current.value != "" && senha.current.value != ""){
            let usuario = {
                login: login.current.value,
                senha: senha.current.value
            }
            
            try{
                const result = await httpClient.post("/login", usuario)
                console.log(result);
                router.push("/");
            }
            catch (erro) {
                console.log(erro);
                alert("Login ou Senha incorretos")
            }
            
        }
        else{
            alert("Preencha todos os campos!");
        }
    }

    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
        {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="container-lg padding-medium">
            <div className="offset-md-3 col-md-6 text-center ">

            <h2 className="display-4 fw-normal mb-3">Login</h2>
            <p className="mt-4">Para fazer um agendamento faça seu login</p>
            <form className="contact-form row mt-5">
                <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" name="login" placeholder="Insira seu login" value={loginData.login} onChange={handleChange} className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="password" name="senha" placeholder="Insira sua senha" value={loginData.senha} onChange={handleChange} className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
            </form>

            <button className="btn btn-primary mt-3" onClick={handleLogin}  style={{backgroundColor: "DF808F", border: "none"}}>Confirmar</button>
            <p className="mt-4">Se caso não tiver login faça seu cadastro</p><a href="/procedimento">CADASTRE-SE</a>
            </div>

        </div>
        </section>
    )

}