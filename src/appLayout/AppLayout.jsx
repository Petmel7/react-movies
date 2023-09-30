
import { Nav } from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import styles from '../appLayout/AppLayout.module.css';

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