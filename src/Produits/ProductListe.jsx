import { useEffect, useState } from 'react';

import classes from './ProductListe.module.css';

import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import FiltreBox from './FiltreBox';
import img1 from './../images/1.jpg'
import img2 from './../images/2.jpg'
import img3 from './../images/3.jpg'
import img4 from './../images/4.jpg'
import img5 from './../images/5.jpg'






export default function ProductListe(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const images =[
        img1 ,
        img2 ,
        img3 ,
        img4 ,
        img5 ,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [images.length]);

    return(
        <>
            <section className={classes.product_views}>

                <div className={classes.container}>
                    <div className={classes.img_container}>
                        <img src={images[currentImageIndex]} alt="" />
                    </div>
                    <div className={classes.text_container}>
                        <h3>Explorez nos produits exceptionnels</h3>
                        <p>
                         Notre sélection de produits de qualité vous permet de découvrir des articles uniques et exclusifs, conçus pour répondre à vos besoins spécifiques. Nous nous assurons que chaque produit qui quitte notre entrepôt répond aux normes les plus élevées de qualité et de sécurité, pour votre satisfaction et votre confiance.
                         </p>
                    </div>
                </div>
                {/* ###################### Filtrages des éléments ###############  */}
            {/* <div className={classes.filters_views}>
                <article>
                   
                   <div className={classes.categorie}>
                   <h4>Catégories</h4>
                    <FiltreBox
                     label={"électronique"}
                     labelFor={'electronique'}
                     name={'electronique'}
                    />
                    <FiltreBox
                     label={"maison et decoration"}
                     labelFor={'decoration'}
                     name={'decoration'}
                    />
                    <FiltreBox
                     label={"Loisirs"}
                     labelFor={'loisir'}
                     name={'loisir'}
                    />
                    <FiltreBox
                     label={"vêtement"}
                     labelFor={'vetement'}
                     name={'vetement'}
                    />
                   </div>
                </article>
                
            </div> */}
                {/* ###################### Fin de Filtrages des éléments ###############  */}



            {/* ###################### Liste des produit ####################  */}

            <article className={classes.product_liste}>

                {/* ###########  Product Card #################  */}
                {Products.map((product) => (
                    <div key={product.id} className={classes.card}>
                            <div className={classes.badge}>Promo</div>
                        <div className={classes.card_img}>
                            <img src={product.imgUrl}  alt={product.productName} />
                        </div>
                        <div className={classes.card_body}>
                            <p>{product.product}</p>
                            <h4> {product.price} F</h4>
                            <div className={classes.stars}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            </div>
                            <button>Détail</button>
                        </div>
                    </div>
                ))}


            </article>

            {/* ###################### Liste des produit ####################  */}
            </section>  
        </>
    );
}




const Products=[
    //   ########### Catégorie 1
        {
            id: 1,
            categorieName: 'Mode et accessoires',
            imgUrl: 'https://i.pinimg.com/736x/84/46/bd/8446bdc9402a6e9fef56bc771f35d7d9.jpg',
            product: 'Montre amiral sport',
            price: 10000
        },
       
        // ########### Catégorie 2
    
        {
            id: 2,
            categorieName: 'Maison et Décoration',
            imgUrl: 'https://i.pinimg.com/736x/64/8c/9d/648c9d027fad13bb26ad7c771654963f.jpg',
            product: 'Canapé versage en cuir',
            price: 10000
        },
        {
            id: 9,
            categorieName: 'Maison et Décoration',
            imgUrl: 'https://i.pinimg.com/736x/17/85/a4/1785a4a97dddda6fbd9058060e387a8e.jpg',
            product: 'Armoire 4 porte',
            price: 10000
        },
    
        // ########### Catégorie 3
    
        {
            id: 3,
            categorieName: 'Sports et loisirs',
            imgUrl: 'https://i.pinimg.com/736x/30/66/3b/30663b1a7ce7b7e30df0c12dffc33142.jpg',
            product: 'Basket de sport',
            price: 10000
        },
         {
            id: 7,
            categorieName: 'Mode et accessoires',
            imgUrl: 'https://i.pinimg.com/736x/3f/3d/3e/3f3d3e47cb012997e5ff68679ed52749.jpg',
            product: 'Rôbe hiper chic',
            price: 10000
        },
        {
            id: 8,
            categorieName: 'Mode et accessoires',
            imgUrl: 'https://i.pinimg.com/736x/18/8a/1d/188a1d2fd4ee8ade4fe076fb91cb2241.jpg',
            product: 'Sac à main',
            price: 10000
        },
    
    
        // ########### Catégorie 4
        
        {
            id: 4,
            categorieName: 'Beauté et santé',
            imgUrl: 'https://i.pinimg.com/736x/53/0b/1c/530b1cc27ea8c7eccddfc7ffd5c4b32e.jpg',
            product: 'Maquillage de femme',
            price: 10000
        },
        {
            id: 10,
            categorieName: 'Beauté et santé',
            imgUrl: 'https://i.pinimg.com/736x/a0/13/9b/a0139b18568907f065c2e8b72060c631.jpg',
            product: 'Bijou de collier',
            price: 10000
        },
    
        // ########### Catégorie 5
        
        {
            id: 5,
            categorieName: 'Automobile et outils',
            imgUrl: 'https://i.pinimg.com/736x/99/5a/0d/995a0dc8caa8267a22118f68a44bb8cc.jpg',
            product: 'Kia sorento 2024',
            price: 10000
        },
    
        // ########### Catégorie 6
        
        {
            id: 6,
            categorieName: 'Électronique et gadgets',
            imgUrl: 'https://i.pinimg.com/736x/12/f5/28/12f52859b7973f5ba74fe4003c7a128c.jpg',
            product: 'Samsung Galaxy S24 Ultra',
            price: 10000
        },
    ];