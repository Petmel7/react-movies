// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineArrowLeft } from 'react-icons/ai';
// import styles from '../Back/Back.module.css';

// export const BackButtonPage = () => {
//     const location = useLocation();
//     console.log('BackButtonPage location', location)
//     const bakcLinkHref = location?.state?.from ?? '/movies';

//     return (
//         <div className={styles.Back}>
//             <button type='button' className={styles.BackButton}>
//                 <Link className={styles.BackLink} to={bakcLinkHref} state={{ from: location }}>
//                     <AiOutlineArrowLeft className={styles.BackAiOutlineArrowLeft} />
//                 </Link>
//             </button>
//         </div>
//     );
// };