import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './newnews.module.css';
import Link from "../Link";
import image1 from '../../../public/images/封面圖2.png';

export default function Newnews() {
    return (
        <div className={`container-fluid ${styles.tt}`} style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div class="row">
                <div class="col-lg-12">
                    <Link to="/">
                        <h1 className={styles.newsTitle}>
                            Breaking News
                        </h1>
                    </Link>
                    <hr className={styles.hrHeaderLine} />
                </div>
            </div>
            <div class="row" style={{ display: "flex", justifyContent: "center" }}>
                <div class="col-lg-5" style={{ marginBottom: "3rem" }}>
                    <div class="row" style={{ padding: "0.5rem 0" }}>
                        <div class="col-lg-12">
                            <img style={{ width: "100%", height: "300px" }} src={image1} alt="" />
                        </div>
                    </div>
                    <div class="row" style={{ margin: "0.5rem 0.5rem" }}>
                        <div class="col-lg-6 col-sm-6" >
                            <div class="row" style={{  display: "flex", justifyContent: "center" }}>
                                <div class="col-lg-11" style={{ padding: "0", backgroundColor: "white", height: "325px" }}>
                                <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
                                    <h5 className={styles.leftdownTitle}>2022韓劇最高收視是它？!</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                        <div class="row" style={{  display: "flex", justifyContent: "center"}}>
                                <div class="col-lg-11" style={{ padding: "0", backgroundColor: "white" , height: "325px"}}>
                                <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
                                    <h5 className={styles.leftdownTitle}>Netflix《奧術》奪下<br/>2022艾美獎最佳動畫！</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="row" style={{ padding: "0.5rem 0" }}>
                        <div class="col-lg-4">
                            <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
                        </div>
                        <div class="col-lg-5" style={{padding: "0.5rem", backgroundColor: "white" }}>
                            <h7 className={styles.rightwords}>2022年全球總票房總結！</h7>
                        </div>
                    </div>
                    <div class="row" style={{ padding: "0.5rem 0" }}>
                        <div class="col-lg-4">
                            <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
                        </div>
                        <div class="col-lg-5" style={{padding: "0.5rem", backgroundColor: "white" }}>
                        <h7>《鈴芽之旅》新海誠最偉大的作品?</h7>
                        </div>
                    </div>
                    <div class="row" style={{ padding: "0.5rem 0" }}>
                        <div class="col-lg-4">
                            <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
                        </div>
                        <div class="col-lg-5" style={{padding: "0.5rem", backgroundColor: "white" }}>
                        <h7>《超級瑪利歐兄弟》動畫電影首支預告。</h7>
                        </div>
                    </div>
                    <div class="row" style={{ padding: "0.5rem 0" }}>
                        <div class="col-lg-4">
                            <img style={{ width: "100%", height: "auto" }} src={image1} alt="" />
                        </div>
                        <div class="col-lg-5" style={{padding: "0.5rem", backgroundColor: "white" }}>
                        <h7>《灌籃高手》超乎想像的感動。</h7>
                        </div>
                    </div>
                    <div class="row" style={{ padding: "0.5rem 0" }}>
                        <div class="col-lg-9" style={{ display: "flex", justifyContent: "center" }}>
                            <button className={styles.button}>see more</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}