import React from "react"
import Vendedor1 from "../assets/vendedor1.jpg";
import Vendedor2 from "../assets/vendedor2.jpg";

export function Contactar() {
    return(
        <main>
            <section className="vendedores_container">
                <h1>Vendedores</h1>
                <div className="vendedores-img_container">
                    <picture>
                        <img src={Vendedor1} alt="persona1"/>
                        <div className="vendedor-contact_container">
                            <p>Vendedor 1</p>
                            <button>Contactar</button>
                        </div>
                    </picture>
                    <picture>
                        <img src={Vendedor2} alt="persona2"/>
                        <div className="vendedor-contact_container">
                            <p>Vendedor 2</p>
                            <button>Contactar</button>
                        </div>
                    </picture>
                </div>
            </section>
            <section className="form-contact_container">
            <div className="ubicacion_container">
                <h2>Ubicación</h2>
                <p>Calle 45B #64 b 6</p>
                <p>Barranquilla/Atlantico</p>
            </div>
            <div className="form_container">
                <form action="">
                    <h2>Formulario de Contacto</h2>
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <input type="text" name="" id="" placeholder="Email"/>
                    <textarea placeholder="Mensaje" name="" id=""></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </section>
        </main>
    );
}