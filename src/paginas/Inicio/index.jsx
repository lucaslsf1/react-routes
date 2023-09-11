import styles from './Inicio.module.css';
import posts from '../../json/posts.json'
import PostCard from "../../components/PostCard";


export default function Inicio() {
    return (
        <ul className={styles.posts}>
        {posts.map((post) =>{
            return(
                <li key={post.id}>
                    <PostCard posts={post} />
                </li>
            )
        })}
    </ul>
    )
}