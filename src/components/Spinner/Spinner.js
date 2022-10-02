import s from '../../style/Spinner.module.css';

function Spinner() {
    return (
        <div className={s.center}>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
        </div>
    )
}

export default Spinner;