import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../public/images/封面圖2.png';
import image2 from '../../../public/images/封面圖1.jpeg';
import styles from "./multivideo.module.css";
import style from "./multivideo.css";

function MultiVideo() {
  return (
    <div className={styles.center}>
      <div className="container">
        <Carousel >
          <Carousel.Item >
            <div className="row">
              <div className="col-lg-3">
                <a href="https://wm.ntue.edu.tw/">
                  <img
                    className="d-block w-100 gg"
                    src={image1}
                    alt="First slide"
                  />
                </a>

              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
            </div>
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
            </div>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </div>
            </div>
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    </div>

  );
}

export default MultiVideo;