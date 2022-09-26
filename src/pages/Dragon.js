import { useEffect, useState } from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { fetchDragons, fetchDragonsAll } from "../service/apiService";
import s from './Dragon.module.css';


export function Dragon() {
    const [dragon, setDragon] = useState([]);
    const [images, setImages] = useState([]);
    const [height, setHeight] = useState('');

    useEffect(() => {
        fetchDragons()
            .then((data) => {
                setDragon(data);
                setHeight(data.height_w_trunk.meters);
                setImages(data.flickr_images)
            })
            .catch((error) => {
                console.log(error.message);
            })
    });


    return (
        <>
            <div className={s.container}>
            <h1>{dragon.name}</h1>
            <div className={s.slideContainer}>
                <Zoom scale={0.4}>
                    {images.map((each, index) => <img alt={dragon.name} key={index} style={{width: "100%"}} src={each} />)}
                </Zoom>
            </div>
            <p><span className={s.description}>Description: </span>{dragon.description}</p>
            <h2>Additional parameters:</h2>
            <ul className={s.params}>
                <li><span>height_w_trunk:</span>{height} meters</li>
                <li><span>dry_mass_kg:</span>{dragon.dry_mass_kg} kg</li>
                <li><span>First_flight:</span>{dragon.first_flight}</li>
                </ul>
                <div className={s.btnContainer}>
                    <a href={dragon.wikipedia} target='_blank' rel='noopener noreferrer' ><button type="submit" className={s.btn}>Wikipedia</button></a>
                </div>
            </div>
        </>
    );
};