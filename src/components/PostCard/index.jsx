import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import BotaoPrincipal from '../BotaoPrincipal';

export default function PostCard({ posts }) {
    return(
        <Link to={`/posts/${posts.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa}
                    src={`../../assets/posts/${posts.id}/capa.png`}
                    alt='Imagem de capa'    
                />

                <h2 className={styles.titulo}>{posts.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}