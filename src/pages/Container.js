import background from '../img/spaceX.jpg';
import s from '../style/Container.module.css';

function Container() {
    return <img src={background} alt="spaceX" className={s.container} />
    }

export default Container;