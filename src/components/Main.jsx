import developer from "../assets/image.png";
import linkedin from "../assets/linkedin.png";
import gitHub from "../assets/gitHub.png";


export default function Main() {
    return (
        <>
            <main className="container_main">
                <section className="description_container">
                    <div className="about_me" >
                        <h1 className="description_title">Eleve seu negócio digital a outro nível <span className="description_bold" >com um Front-end de qualidade!</span></h1>

                        <p className="description_text">Olá! Sou Pâmela Raiane, desenvolvedora Front-end com especialidade em React, HTML e CSS. Ajudo pequenos negócios e
                            designers a colocarem em prática boas ideias. Vamos conversar?</p>
                    </div>

                    <img className="description_img" src={developer} alt="Developer Pamela" />
                </section>

                <section className="contact">
                    <ul className="contact_list" >
                        <li className="contact_item">
                            <img className="contact_item_img" src={linkedin} alt="Linkedin" />
                            <a className="contact_item_ancora" href="https://www.linkedin.com/in/pamela-raiane/">Linkedin</a>
                        </li>
                        <li className="contact_item" >
                            <img className="contact_item_img" src={gitHub} alt="GitHub" />
                            <a className="contact_item_ancora" href="https://github.com/pamelaprpn">GitHub</a>
                        </li>
                    </ul>
                </section>
            </main>
        </>

    );
  }
  