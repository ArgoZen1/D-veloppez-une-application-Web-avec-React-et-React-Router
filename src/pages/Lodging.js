
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import starColor from '../images/stars.svg';
import star from '../images/starsUncol.svg';
import Error404 from './Error404';

/*
** La page des hebergements
*/

const Lodging = (props) => {
    // on recupere l'id de la page
    const { productId } = useParams();

    // on recupere la props datas passée en parametre dans le composant App 
    const { datas } = props;

    // on va chercher l'id correspondant à l'id de la page
    const product = datas.find((product) => product.id === productId);
    // si l'id n'existe pas on affiche la page 404 
    if (!product) {
        return <Error404 />;
    }
    // on recupere les elements de la data  
    const { title, location, rating, host, equipments, description, tags } =
        product;

    // fonction pour retourner les etoiles colorées
    const StarsColor = () => {
        return <img src={starColor} alt="stars" />
    }
    // fonction pour retourner les etoiles non colorées
    const Stars = () => {
        return <img src={star} alt="stars" />
    }
    /*
    ** ici on va separer le nom et le prenom de la data afin de pouvoir les positionner l'un au dessus de l'autre (balise BR non utilisable)
    */
    const isHostSplited = host.name.split(" ");
    const [name, lastName] = isHostSplited;

    return (
        <div className='lodgin-page'>
            <div>
                <Navigation />
                {/* ici on va chercher à savoir si product existe, si oui on ira chercher les images du slider */}
                <Slider images={product?.pictures} />
                {/* Block contenant le h1, h2 et les tag, 
                nous recuperons tout ça de la data (voir const plus haut)
                Nous faisons un .map afin d'aller chercher les elements un par un dans le tableau pour les mettre dans une liste*/}
                <div className="block-h1-host">
                    <div>
                        <h1 className="singleproduct__title">{title}</h1>
                        <h2 className='singleproduct__title2'>{location}</h2>

                    </div>
                    {/* ici on retrouve le nom et prenom avec son image qu'on va chercher dans la data */}
                    <div className="block-host1">
                        <div className='name-firstname'>
                            <p>{lastName}</p>
                            <p>{name}</p>
                        </div>
                        <div className='container-img1'>
                            <img src={host.picture} alt="l'auteur"></img>
                        </div>
                    </div>
                </div>
                {/* ici on créait une nouvelle instance du tableau 
                 on utilise parseInt pour renvoyer un entier (le nombre d'étoile pleine et vide
                 on fait appel au fonction avec un index pour recuperer l'image importée plus haut
                 pour résumer, on va lier le nombre qu'on recupere dans le fichier json avec les etoiles
                 le nombre 3 correspondra à 3 etoiles colorées et 2 étoiles non colorées*/}
                <div className='stars_host'>
                    <div className="stars">
                        {/* on utilise Array.from pour créer un tableau avec la longueur du nombre d'étoile qu'on veut */}
                        {Array.from({ length: parseInt(rating) }, (v, idx) => <StarsColor key={idx} />)}
                        {Array.from({ length: 5 - parseInt(rating) }, (v, idx) => <Stars key={idx} />)}
                    </div>
                    <ul className='tags'>{tags.map((tag) =>
                        <li key={tag}>
                            {tag}
                        </li>
                    )}</ul>
                </div>
                {/* On ajoute à nouveau le block avec l'image, le nom et le prénom afin de le mettre en display none pour rendre
                     le site conforme à la maquette via le css */}
                <div className="block-host2">
                    <div className='name-firstname'>
                        <p>{lastName}</p>
                        <p>{name}</p>

                    </div>
                    <div className='container-img2'>
                        <img src={host.picture} alt="l'auteur"></img>
                    </div>
                </div>
            </div>

            <div className='description-equipements'>
                <Collapse title="Description" description={description} />
                <Collapse title="Equipements" description={equipments?.map((equipment, index) =>
                    <ul key={index}>
                        <li>
                            {equipment}
                        </li>
                    </ul>

                )} /></div>
        </div>

    );

};


export default Lodging;