import styles from './SobreMim.module.css';
import PostModelo from "../../components/PostModelo";
import fotoCapa from '../../assets/motorbike.jpg';
import fotoSobreMim from '../../assets/bike-pfp.png'

export default function SobreMim() {
    return(
        <PostModelo titulo='Sobre mim' fotoCapa={fotoCapa}>
            <h3 className={styles.subtitulo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit dolorem maxime atque sint autem, fuga qui officiis laboriosam nisi officia dolorum ducimus ratione doloribus voluptas? Nam est blanditiis natus?
            </h3>

            <img 
                src={fotoSobreMim}
                className={styles.fotoSobreMim}
                alt='Bike'
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, atque praesentium ipsa illum aliquid earum, magni accusantium consequatur labore doloribus eligendi tempore deleniti blanditiis quo maiores optio molestias cumque dolorem!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente quibusdam ab obcaecati repellat earum neque, temporibus facere ut ipsum deleniti architecto impedit asperiores iusto omnis a, dicta animi sed.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae accusantium eos velit culpa, perspiciatis consequuntur quaerat. Suscipit reprehenderit ab dolore provident, similique exercitationem amet illo. Fugit nulla provident vel.
            </p>
        </PostModelo>

        
    )
}