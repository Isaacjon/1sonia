import "../assets/styles/layout/about.scss";
import team from "../assets/images/aboutSection/team.svg";
import bigDotRectangle from "../assets/images/aboutSection/bigDotRectangle.svg";
import smallDotRectangle from "../assets/images/aboutSection/smallDotRectangle.svg";
import arrow from "../assets/images/aboutSection/btnArrow.svg";
import leftRectangle from "../assets/images/aboutSection/leftRectangle.svg";
import rightRectangle from "../assets/images/aboutSection/rightRectangle.svg";

const AboutSection = () => {
  return (
    <div className="aboutSection">
      <img src={leftRectangle} alt="leftRectangle" />
      <img src={rightRectangle} alt="rightRectangle" />
      <div className="container">
        <h3 className="sectionTitle">
          <span>Biz </span> haqimizda...
        </h3>
        <div className="wrapper">
          <div className="left">
            <img src={bigDotRectangle} alt="bigDotRectangle" />
            <div className="img-block">
              <img src={team} alt="" />
            </div>
            <div className="text">
              <div className="relative">
                <p>
                  <span>1 SONIA </span> Jamiyatda uchratadigan va ko'p vaqt
                  sarflanadigan mavjud tarmoqli muammolarga intelektual
                  elektronik yechim beradi.
                </p>
                <img src={smallDotRectangle} alt="smallDotRectangle" />
              </div>
            </div>
          </div>
          <div className="right">
            <p>
              Biz insonlar rejalashtirgan ishlarimizni o'z vaqtida qilishni
              hoxlaymiz. Qancha yumushimizni erta yakunlasak va bizning
              bisotimizda yana ham qo'shimcha bo'sh vaqtimiz bo'lishini bilish
              hissiyotiga ega bo'lishimiz qanchalar yoqimli!
            </p>
            <div className="btnDiv">
              <button>
                Batafsil bilish <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
