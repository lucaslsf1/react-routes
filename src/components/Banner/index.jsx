import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea at architecto consequuntur reiciendis. 
                Distinctio, assumenda necessitatibus harum,
                praesentium, tempora libero ratione illum nemo ab autem voluptate numquam voluptatibus reprehenderit impedit.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto}
                    alt='Foto'
                />
            </div>
        </div>
    )
}

