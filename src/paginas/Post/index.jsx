import './Post.css';
import styles from './Post.module.css';

import { Route, Routes, useParams } from "react-router-dom";
import posts from '../../json/posts.json';
import PostModelo from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown';
import NaoEncontrada from '../NaoEncontrada';
import PaginaPadrao from '../../components/PaginaPadrao';
import PostCard from '../../components/PostCard';

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === parseInt(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== parseInt(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (

        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`../../assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((posts) => (
                                <li key={posts.id}>
                                    <PostCard posts={posts} />
                                </li>
                            ))}
                        </ul>


                    </PostModelo>
                } />
            </Route>
        </Routes>


    //     <PaginaPadrao>
    //         <PostModelo
    //             fotoCapa={`../../assets/posts/${post.id}/capa.png`}
    //             titulo={post.titulo}
    //         >
    //             <div className="post-markdown-container">
    //                 <ReactMarkdown>
    //                     {post.texto}
    //                 </ReactMarkdown>
    //             </div>
    //         </PostModelo>
    //     </PaginaPadrao>
    )
}

export default Post;