import loading from '../../img/loading_gif.gif'

import styles from './Loading.module.css';

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img  className={styles.loader} src={loading} alt="Loading"></img>
        </div>
    )
}

export default Loading