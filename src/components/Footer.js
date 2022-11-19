import "../assets/styles/layout/footer.scss";
import logo from "../assets/images/sonia-logo.svg";
import send from "../assets/images/footer/sendIcon.svg";
import googlePlay from "../assets/images/googlePlay.svg";
import appStore from "../assets/images/appleStore.svg";
import facebook from "../assets/images/socials/facebook.svg";
import vk from "../assets/images/socials/vk.svg";
import twitter from "../assets/images/socials/twitter.svg";
import ok from "../assets/images/socials/ok.svg";

const sci = [
  { id: 1, name: "facebook", img: facebook },
  { id: 2, name: "vk", img: vk },
  { id: 3, name: "twitter", img: twitter },
  { id: 4, name: "ok", img: ok },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          {/* item */}
          <div className="item">
            <div className="logo">
              <img src={logo} alt="sonia" />
            </div>
            <p className="itemSubtitle">
              1 SONIA dasturi sizni shaxsiy karyerangiz tomon maksimal o’sish
              maydoniga uloqtiradi!
            </p>
          </div>

          {/* item */}
          <ul className="item">
            <li className="itemTitle">Ma’lumotlar</li>
            <li className="itemSubtitle">
              <a href="#asosiy">Asosiy</a>
            </li>
            <li className="itemSubtitle">
              <a href="#bolimlar">Bo’limlar</a>
            </li>
            <li className="itemSubtitle">
              <a href="#bizHaqimizda">Biz haqimizda</a>
            </li>
          </ul>

          {/* item */}
          <ul className="item">
            <li className="itemTitle">Aloqa</li>
            <li className="itemSubtitle">+998 99 999 99 99</li>
            <li className="itemSubtitle">Komil yashin ko’chasi 58 uy</li>
            <li className="itemSubtitle">info@1sonia.uz</li>
          </ul>

          {/* item */}
          <div className="item">
            <p className="itemSubtitle">
              Bizning yangiliklarimizga obuna bo'ling
            </p>
            <div className="flex">
              <input type="email" placeholder="E-mail" />
              <button>
                <img src={send} alt="send" />
              </button>
            </div>
            <div className="download flex">
              <img src={googlePlay} alt="googlePlay" />
              <img src={appStore} alt="appStore" />
            </div>
          </div>

          <div className="socials">
            <h5>Biz ijtimoiy tarmoqlardamiz:</h5>
            <ul>
              {sci.map((item) => (
                <li key={item.id}>
                  {/* https://www.twitter.com/ */}
                  <a
                    href={"https://www." + item.name + ".com"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={item.img} alt={item.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>© Barcha huquqlar himoyalangan 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
