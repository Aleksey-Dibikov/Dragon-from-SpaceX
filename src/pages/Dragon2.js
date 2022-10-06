import { useEffect, useState } from "react";
import { fetchAllDragons } from "../service/ApiDragons/apiService";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import s from '../style/Dragon.module.css';
import Spinner from "../components/Spinner/Spinner";

function Dragon2() {
    const [dragons, setDragons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetchAllDragons()
                .then((data) => {
                    setDragons(data)
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error.message);
                    setIsLoading(false);
                })
        }, 1500);
    }, []);


    return (
        isLoading ? <Spinner/> : <>
            {dragons.slice(1).map((dragon) => {
                return (
                    <div className={s.container} key={dragon.id}>
                        <h1 className={s.header}>{dragon.name}</h1>
                        <div className={s.slideContainer}>
                            <Zoom scale={0.4}>
                                {dragon.flickr_images.map((each, index) => <img alt={dragon.name} key={index} style={{ width: "100%", height: "100%" }} src={each} />)}
                            </Zoom>
                        </div>
                        <p className={s.description}><span className={s.titleDescription}>Description: </span>{dragon.description}</p>
                        <h2 className={s.title}>Additional parameters:</h2>
                        <ul className={s.params}>
                            <li><span>Height_w_trunk:</span>{dragon.height_w_trunk.meters} meters</li>
                            <li><span>Dry_mass_kg:</span>{dragon.dry_mass_kg} kg</li>
                            <li><span>First_flight:</span>{dragon.first_flight}</li>
                        </ul>
                        <div className={s.btnContainer}>
                            <a href={dragon.wikipedia} target='_blank' rel='noopener noreferrer' ><button type="submit" className={s.btn}>Wikipedia</button></a>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
};

export default Dragon2;