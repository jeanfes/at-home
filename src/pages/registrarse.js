import React from "react"
import "../styles/registrarse.css";
import LogoRegistrarse from "../assets/logo.png";
import IconOjo from "../assets/ojo.png";

export function Registrarse() {
return(
    <section className="registrarse-main_container">
        <div className="logo">
            <img src={LogoRegistrarse} alt="logo-principal"/>
            <p>At Home</p>
        </div>
        <div className="title">
            <h1>Crea tu cuenta de At Home</h1>
            <p>Es rápido y fácil</p>
        </div>
        <form id="form-registrarse" action="">
            <div className="container1">
                <label for="input_name">
                    <input type="text" name="nombre" id="input_name" placeholder="Nombre"/>
                </label>
                <label for="input_lastname">
                    <input type="text" name="apellido" id="input_lastname" placeholder="Apellido"/>
                </label>
            </div>
            <div className="container2">
                <input type="email" name="correo" id="input_email" placeholder="Correo electrónico" autocomplete="email"/>
            </div>
            <div className="container3">
                <div>
                    <input type="password" name="contraseña" id="contraseña" placeholder="Contraseña"/>
                    <span className="mostrar" id="mostrar1"><img src={IconOjo} alt="ojo"/></span>
                </div>
                <div>
                    <input type="password" name="repetircontraseña" id="repetircontraseña" placeholder="Repetir contraseña"/>
                    <span className="mostrar" id="mostrar2"><img src={IconOjo} alt="ojo"/></span>
                </div>
            </div>
            <div className="container5">
                <p>Genero</p>
                <div className="genero-main_container">
                    <label className="input-container_sex" for="hombre">
                        <p>Hombre</p>
                        <input type="radio" name="sexo" id="hombre" checked/>
                    </label>
                    <label className="input-container_sex" for="mujer">
                        <p>Mujer</p>
                        <input type="radio" name="sexo" id="mujer"/>
                    </label>
                    <label className="input-container_sex" for="no-binario">
                        <p>No binario</p>
                        <input type="radio" name="sexo" id="no-binario"/>
                    </label>
                </div>
            </div>
            <div className="button-signin_container">
                <div className="error-signin_container">
                    <div id="dialog_error" className="active">
                        <img alt="error"/>
                        <p><b>Error:</b> Rellena el formulario correctamente</p>
                    </div>
                </div>
                <button id="button_signin" type="submit">Registrarse</button>
            </div>
        </form>
    </section>
);
}