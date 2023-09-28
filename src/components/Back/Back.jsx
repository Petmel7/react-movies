import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './Back.module.css';

export const Back = ({ movieId }) => {
    return (
        <div className={styles.Back}>
            <button className={styles.BackButton}>
                <Link className={styles.BackLink} to={`/movies/${movieId}`}>
                    <AiOutlineArrowLeft className={styles.BackAiOutlineArrowLeft} /> 
                </Link>
            </button>
        </div>
    );
};