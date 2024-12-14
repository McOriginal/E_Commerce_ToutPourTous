
import classes from './Home.module.css';



export default function HomeHeaderCategories(){
    return(
        <>
        <div className={classes.categorie_container}>
            <h3>Nos catégories disponible</h3>
            <div className={classes.categories}>
                {CategorieListe.map((categorie) => (
                    <div key={categorie.id} className={classes.categorieItem}>
                            <img src={categorie.imgUrl} alt={categorie.categorieName} />
                                <h5>{categorie.categorieName}</h5>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}


const CategorieListe=[
//   ########### Catégorie 1
    {
        id: 1,
        categorieName: 'Mode et accessoires',
        imgUrl: 'https://i.pinimg.com/736x/b1/37/85/b13785a6ddc2bf89fec23538bcdad5bd.jpg'
    },

    // ########### Catégorie 2

    {
        id: 2,
        categorieName: 'Maison et Décoration',
        imgUrl: 'https://i.pinimg.com/736x/aa/66/b1/aa66b168f7e102ab0b03dc9dc841037a.jpg'
    },

    // ########### Catégorie 3

    {
        id: 3,
        categorieName: 'Sports et loisirs',
        imgUrl: 'https://i.pinimg.com/736x/78/89/35/78893547b2c99fb3041b710a46346603.jpg'
    },

    // ########### Catégorie 4
    
    {
        id: 4,
        categorieName: 'Beauté et santé',
        imgUrl: 'https://i.pinimg.com/736x/0c/57/8e/0c578eec78c2d4e3280b64f18ece6899.jpg'
    },

    // ########### Catégorie 5
    
    {
        id: 5,
        categorieName: 'Automobile et outils',
        imgUrl: 'https://i.pinimg.com/736x/e0/f0/0c/e0f00cbd5b81f0e7ec50f479ce7640d0.jpg'
    },

    // ########### Catégorie 6
    
    {
        id: 6,
        categorieName: 'Électronique et gadgets',
        imgUrl: 'https://i.pinimg.com/736x/3b/9b/8e/3b9b8e9f4f20fa5b9e9b0391f98f4ad6.jpg'
    },

    // ########### Catégorie 7
    
    {
        id: 7,
        // categorieName: 'Services et fournitures',
        categorieName: 'Alimentation et boissons',
        imgUrl: 'https://i.pinimg.com/736x/ac/1f/e6/ac1fe6c96d79fbd0774ddab6aa47dab8.jpg'
    },

    // ########### Catégorie 8
    
    {
        id: 8,
        categorieName: 'Artisanat et produits faits main',
        imgUrl: 'https://i.pinimg.com/736x/dc/1a/89/dc1a8980e111dc202fa3c0da7a34e939.jpg'
    },

    // ########### Catégorie 9
    
    {
        id: 9,
        categorieName: 'Loisirs et divertissements',
        imgUrl: 'https://i.pinimg.com/736x/65/9e/87/659e8734c12261e17a94a48d0098dde3.jpg'
    },

    // ########### Catégorie 10
    
    {
        id: 10,
        categorieName: 'Services et fournitures',
        imgUrl: 'https://i.pinimg.com/736x/f4/e5/d1/f4e5d1d7775a1db60c68707eca32b426.jpg'
    },
    
]