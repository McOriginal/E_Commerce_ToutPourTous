
import classes from './ProductListe.module.css';


export default function FiltreBox({label, name}){

    return(
        <>
        <div className={classes.box}>
            <input type="checkbox" name={name} id={name} />
            <label htmlFor={name}> {label} </label>
        </div>
        </>
    );
}