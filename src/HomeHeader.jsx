    import { useState } from "react"
import img0 from './images/casque.png';
import img1 from './images/sac2.png';
import img2 from './images/airpod.png';
import img3 from './images/sac.png';
import img4 from './images/montre.png';
import { useEffect } from "react";

export default function HomeHeader(){
    // Création d'un état pour la variable imgSilde qui contiendra l'index de l'image actuelle
    const [imgSilde, setCurrentImgSilde] = useState(0);

    const images = [img0, img1, img2, img3, img4];

    // Effet pour changer l'image toute le 3 secondes 
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentImgSilde((imgSilde + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
        }, [images.length, imgSilde]); // On déclenche l'interval seulement quand imgSilde change
        


    return(
        <>
        <section className="container-fluid" id="home">
        <div className="row">
            <div className="col-sm-6 boxtext">
                <p className="text-start fs-4">Bienvenue sur</p>
                <h1 className="text-start fs-1 my-4 fw-bold" id="title">ToutPourTous</h1>
                <div className="d-grid gap-2 my-3 d-md-flex justify-content-lg-start">
                    <button type="button" className="btn">Contactez-nous</button>
                </div>
                <p className="text">
                    Nous sommes là pour vous aider à trouver vos meilleurs articles de luxe en Bamako et à vous offrir une expérience inoubliable.
                    Vous pourrez donc retrouver tous les articles de luxe que vous avez souscrit à nos partenaires et vous accompagner dans votre choix.
                    Nous vous proposons également des offres spéciales et des réductions à votre consommation.
                    N'hésitez pas à nous contacter pour toute question ou pour plus d'informations.
                    Merci de votre confiance et de votre bon choix!
                </p>
                
            </div>

            <div className=" col-sm-5">
                
                <img src={images[imgSilde]} className="img-fluid" alt="Bamako Sougou-Bâ" />                
            </div>
        </div>
    </section>
        
        </>
    );
}