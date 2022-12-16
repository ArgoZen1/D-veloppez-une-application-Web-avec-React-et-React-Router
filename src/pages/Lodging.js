
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import starColor from '../images/stars.svg';
import star from '../images/starsUncol.svg';
import Error404 from './Error404';


const Lodging = (props) => {
    const { productId } = useParams();

    const { datas } = props;

    const product = datas.find((product) => product.id === productId);
    if (!product) {
        return <Error404 />;
    }
    const { title, location, rating, host, equipments, description, tags } =
        product;

    console.log(tags)

    const StarsColor = () => {
        return <img src={starColor} alt="stars" />
    }
    const Stars = () => {
        return <img src={star} alt="stars" />
    }

    const isHostSplited = host.name.split(" ");
    const [name, lastName] = isHostSplited;

    return (
        <div>
            <Navigation />
            <Slider images={product?.pictures} />

            <div className="block-h1-host">
                <div>
                    <h1 className="singleproduct__title">{title}</h1>
                    <h2 className='singleproduct__title2'>{location}</h2>
                    <ul className='tags'>{tags.map((tag, index) =>
                        <li key={index}>
                            {tag}
                        </li>
                    )}</ul>
                </div>

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

            <div className='stars_host'>
                <div className="stars">
                    {Array.from({ length: parseInt(rating) }, (v, idx) => <StarsColor key={idx} />)}
                    {Array.from({ length: 5 - parseInt(rating) }, (v, idx) => <Stars key={idx} />)}


                </div>
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

            <div className='dog2'>
                <Collapse title="Description" description={description} />
                <Collapse title="Equipements" description={equipments.map((equipment, index) =>
                    <ul className='ul-equipments'>
                        <li key={index}>
                            {equipment}
                        </li>
                    </ul>

                )} /></div>
        </div >
    );

};


export default Lodging;