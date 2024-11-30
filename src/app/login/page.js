'use client'
import { useRef, useState } from "react"
import { useRouter } from "next/navigation";
import httpClient from "../utils/httpClient.js";
import InputMask from "react-input-mask";
import { useAuth } from "../context/userContext.js";
import { Alert } from "react-bootstrap";

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
        if(loginData.login != "" && loginData.senha != ""){
            try {
                const data = await httpClient.post("/login", {...loginData});
                console.log(data)
                const userObj = {
                    id: data.cliente.id,
                    nome: data.cliente.nome
                }
        
                loginContexto(userObj, data.token)
                if(data.cliente.id == 1){
                    router.push('/admin');
                }
                else{
                    router.push('/');
                }
                
            } catch (error) {
                console.log(error)
                alert(error)
            }
        }
        else{
            alert("Preencha todos os campos!");
        }

    }

    //Parte de Cadastro
    let nome = useRef("");
    let fone = useRef("");
    let login = useRef("");
    let senha = useRef("");
    let confirmaSenha = useRef("");
    let [listaClientes, setListaClientes] = useState([]);

    async function carregarClientes() {
        
        try {
            const result = await httpClient.get("/cliente")
            setListaClientes(result)
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }

    async function cadastrar(){
        
        let errors = [];

        // Validação do nome
        if (!nome.current.value.trim()) {
        errors.push("O nome é obrigatório.");
        } else if (!nome.current.value.includes(' ')) {
        errors.push("O nome deve conter pelo menos um espaço para nome e sobrenome.");
        }

        // Validação do telefone
        if (!fone.current.value) {
        errors.push("O telefone é obrigatório.");
        }
        
        // Validação do login
        if (!login.current.value.trim()) {
        errors.push("O login é obrigatório.");
        } else if (login.current.value.length < 6) {
        errors.push("O login deve ter pelo menos 6 caracteres.");
        }

        // Validação da senha
        if (!senha.current.value.trim()) {
        errors.push("A senha é obrigatória.");
        } else if (senha.current.value.length < 6) {
        errors.push("A senha deve ter pelo menos 6 caracteres.");
        }

        // Validação da confirmação da senha
        if (senha.current.value !== confirmaSenha.current.value) {
        errors.push("A confirmação da senha não coincide com a senha.");
        }

        // Se houver erros, exiba-os e não continue com o cadastro
        if (errors.length > 0) {
        alert(errors.join("\n")); // Exibe os erros para o usuário
        return;
        }

        let usuario = {
        nome: nome.current.value,
        fone: fone.current.value,
        login: login.current.value,
        senha: senha.current.value,
        };

        try {
        const result = await httpClient.post("/cliente", usuario)
        console.log(result);
        
        nome.current.value = "";
        fone.current.value = "";
        login.current.value = "";
        senha.current.value = "";
        confirmaSenha.current.value = "";
        alert("Cadastrado com sucesso! Agora faça seu login para navegar");
        router.push('/login');

        let ok = r.status == 201;
        

        } catch (erro) {
        console.log(erro);
        }

    }


    return(
        <div>
            <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
                <div className="container-lg padding-medium">
                    <div className="offset-md-3 col-md-6 text-center ">

                    <h2 className="display-4 fw-normal mb-3">Login</h2>
                    <p className="mt-4">Para navegar faça seu login</p>
                    <form className="contact-form row mt-5">
                        <div className="form-input col-lg-12 d-md-flex mb-3">
                        <input type="text" name="login" placeholder="Insira seu login" value={loginData.login} onChange={handleChange} className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        </div>
                        <div className="form-input col-lg-12 d-md-flex mb-3">
                        <input type="password" name="senha" placeholder="Insira sua senha" value={loginData.senha} onChange={handleChange} className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        </div>
                    </form>

                    <button className="btn btn-primary mt-3" onClick={handleLogin}  style={{backgroundColor: "DF808F", border: "none"}}>Confirmar</button>
                    <p className="mt-4">Se caso não tiver login faça seu cadastro abaixo</p>
                    </div>

                </div>
                <div className="container-lg padding-medium">
                <div className="offset-md-3 col-md-6 text-center ">

                    <h2 className="display-4 fw-normal mb-3">Cadastro</h2>

                    <form className="contact-form row mt-5">
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                        <input type="text" ref={nome} placeholder="Nome completo" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    </div>
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                        <InputMask type="text" ref={fone} mask="(**) *****-****" maskChar={null} placeholder="telefone" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    </div>
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                        <input type="text" ref={login} placeholder="Cadastre um login" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    </div>
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                        <input type="password" ref={senha} placeholder="Cadastre sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        <input type="password" ref={confirmaSenha} placeholder="Confirme sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    </div>
                    </form>

                    <button className="btn btn-primary mt-3" onClick={cadastrar} style={{backgroundColor: "DF808F", border: "none"}}>Cadastrar</button>
                </div>

                </div>
            </section>
        </div>
        
    )

}