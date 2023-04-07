import { HeartOutlined } from '@ant-design/icons';
import Link from '../Link';
import styles from './musicitem.module.css';

export default function MusicItem({ product }) {

   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' ,height:"13rem" }}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>

            <div className={styles.more}>
               <Link to={`/products/id/${product.id}`} className={styles.link}>
                  <div className={styles.heart}>
                     <HeartOutlined />
                  </div>
               </Link>
            </div>
            <h6 className={styles.category}>
               {product.category}
            </h6>
            <h4 className={styles.name}>
               {product.name}
            </h4>
            
            <audio controls style={{width:"270px",height:"40px"}}>
               <source src="/Media/everytime.mp3" type="audio/mpeg" />
            </audio>
            
            

         </div>
      </div>
   );
}
