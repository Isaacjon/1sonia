import "../assets/styles/layout/suggestions.scss";
import user from "../assets/images/suggestionsSection/userIcon.svg";
import phoneIcon from "../assets/images/suggestionsSection/phoneIcon.svg";
import dotRectangle from "../assets/images/suggestionsSection/dotRectangle.svg";
import sixTangle from "../assets/images/suggestionsSection/6tangle.svg";
import sixTangleSmall from "../assets/images/suggestionsSection/6tangleSmall.svg";

const SuggestionsSection = () => {
  return (
    <div className="suggestionsSection">
      <img src={sixTangle} alt="sixTangle" />
      <img src={sixTangleSmall} alt="sixTangleSmall" />
      <img src={sixTangle} alt="sixTangle" />
      <img src={sixTangleSmall} alt="sixTangleSmall" />
      <div className="container">
        <h3 className="sectionTitle">
          Savol va <span> Takliflar bormi?</span>
        </h3>
        <div className="wrapper">
          <img src={dotRectangle} alt="dotRectangle" />
          <img src={dotRectangle} alt="dotRectangle" />
          <h6>Biz sizning IT muammoingizni hal qilamiz</h6>
          <div className="form">
            <div className="flex">
              <span>
                <img src={user} alt="user" />
                <input type="text" placeholder="Ism" />
              </span>
              <span>
                <img src={phoneIcon} alt="phoneIcon" />
                <input type="number" placeholder="Telefon" />
              </span>
            </div>
            <p>menga IT sohasida yordam kerak</p>
            <textarea placeholder="Iltimos, biznesingiz yo'nalishini tasvirlab bering."></textarea>
            <div className="btnDiv">
              <button>Yuborish</button>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="wrapper">
            <p>
              Sizni o'ylantirgan barcha jumboqlarga ushbu tarmoq orqali javob
              beramiz.
            </p>
            <div>
              <span>Biz bilan gmail orqali bog'lanish</span>
              <a
                href="https://gmail.google.com/gmail/mamatmurodsamandar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                1sonia.com
              </a>
            </div>
            <div>
              <span>Biz bilan bot orqali bog'lanish</span>
              <a
                href="https://gmail.google.com/gmail/mamatmurodsamandar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                @birsonia_bot
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsSection;
