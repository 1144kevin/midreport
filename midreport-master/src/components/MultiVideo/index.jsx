import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../public/images/封面圖2.png';
import styles from "./multivideo.module.css";
import './multivideo.css';

export default function MultiVideo() {
  return (
    <div className={styles.center}>
      <div className="container">
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic1" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic2" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic3" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic4" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic5" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic6" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic7" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img src={image1}
                    alt="pic8" />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

      </div>
    </div>

  );
}