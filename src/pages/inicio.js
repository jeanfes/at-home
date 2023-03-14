import React from "react"
import ImagenPrincipal from "../assets/main.jpg";
import ImagenCasa from "../assets/main-casa.png";
import ImagenDepartamento from "../assets/main-departamento.png";

export function Inicio() {
    return(
        <main>
        <section className="main-img_container">
            <img src={ImagenPrincipal} alt=""/>
        </section>
        <section className="main-services_container">
            <div className="title-categoria_container">
                <h2>Categorias</h2>
                <p>Ver mas</p>
            </div>
            <div className="img-categoria_container">
                <div className="card-main_img">
                    <div className="border-top">
                    </div>
                    <div className="img">
                        <img src={ImagenDepartamento} alt=""/>
                    </div>
                        <button>Departamentos
                        </button>
                </div>
                <div className="card-main_img">
                    <div className="border-top">
                    </div>
                    <div className="img">
                        <img src={ImagenCasa} alt=""/>
                    </div>
                        <button>Casas
                        </button>
                </div>
            </div>
        </section>
        <section className="main-text_container">
            <div className="card" id="card1">
                <div className="number-container">
                    <p>1</p>
                </div>
                <div className="description-container">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus explicabo recusandae quis esse expedita labor. </p>
                </div>
            </div>
            <div className="card" id="card2">
                <div className="number-container">
                    <p>2</p>
                </div>
                <div className="description-container">
                    <h3>lorem</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quam, at minima inventore voluptas dolor autem.</p>
                </div>
            </div>
            <div className="card" id="card3">
                <div className="number-container">
                    <p>3</p>
                </div>
                <div className="description-container">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto repudiandae corrupti assumenda, quaerat.</p>
                </div>
            </div>
        </section>
    </main>
    );
}