import "../assets/styles/layout/contact.scss";
import locationIcon from "../assets/images/locationIcon.svg";
import globeIcon from "../assets/images/globeIcon.svg";
import phoneIcon from "../assets/images/phoneIcon.svg";
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
const Contact = () => {
  // const styles = {
  //   popup: {
  //     display: "none",
  //     opacity: "0",
  //   },
  // };

  return (
    <div className="contactSection">
      <div className="container">
        <h3 className="sectionTitle">
          <span>Aloqa</span>
        </h3>
        <div className="location">
          <div className="info">
            <h3 className="infoTitle">ALOQALAR</h3>
            <div className="address">
              <div className="left">
                <img src={locationIcon} alt="location" />
              </div>
              <div className="right">
                <h6 className="rightTitle">Bizning manzil:</h6>
                <p className="rightSubtitle">
                  Chilonzor tumani olmozor metrosi PGS.UZ binosi.
                </p>
              </div>
            </div>
            <div className="mail">
              <div className="left">
                <img src={globeIcon} alt="website" />
              </div>
              <div className="right">
                <h6 className="rightTitle">Bizning pochtamiz:</h6>
                <a href="https://1sonia@gmail.com" className="rightSubtitle">
                  1sonia@gmail.com
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="left">
                <img src={phoneIcon} alt="phone" />
              </div>
              <div className="right">
                <h6 className="rightTitle">
                  Qo'ng'iroq qiling yoki so'rov qoldiring
                </h6>
                <a href="https://1sonia@gmail.com" className="rightSubtitle">
                  +99 999 99 99
                </a>
              </div>
            </div>
            <div className="socials">
              <h5>Biz ijtimoiy tarmoqlardamiz:</h5>
              <ul>
                {sci.map((item) => (
                  <li key={item.id}>
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
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.504227869129!2d69.1961072148261!3d41.25435601219547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a00438f5fd9%3A0x5b0b995e96a30d93!2sPGS!5e0!3m2!1sen!2s!4v1668844299046!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
