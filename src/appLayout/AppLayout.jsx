import styles from '../appLayout/AppLayout.module.css';
import { Nav } from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <>
            <Nav />
            <div className={styles.Container}>
                <Outlet />
            </div>
        </>
    );
};