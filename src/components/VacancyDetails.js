import "../assets/styles/layout/vacancyDetails.scss";
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

const VacancyDetails = ({ setOpenModal }) => {
  const handleFunc = (e) => {
    setOpenModal(false);
  };
  return (
    <div className="vacancyDetails">
      <div className="overlay" onClick={(e) => handleFunc(e)}>
        <div className="wrapper" onClick={(e) => e.stopPropagation()}>
          <article className="requirement">
            <h3 className="articleTitle">Kerakli ko'nikmalar</h3>
            <ul>
              <li>- Korxona segmentida ish tajribasi;</li>
              <li>- Kubernetes bilan ishlash tajribasi;</li>
              <li>- PostgreSQL, Apache Cassandra bilan ishlash tajribasi;</li>
              <li>- OSGI konteynerlarini to'g'ri yozish qobiliyati;</li>
            </ul>
          </article>
          <article className="responsibility">
            <h3 className="articleTitle">Mas'uliyat</h3>

            <ul>
              <li>
                - Xizmatlar va individual modullar arxitekturasini ishlab
                chiqish;
              </li>
              <li>- Ilovalarni sinovdan o'tkazish va amalga oshirish;</li>
              <li>
                - Mavjud ilovalarni, shuningdek individual kodlarni yangilash va
                takomillashtirish;
              </li>
              <li>
                - Yakunlangan dasturlarni texnik ta'minlashni amalga oshirish;
              </li>
            </ul>
          </article>
          <article className="weOffer">
            <span>Biz nima taklif qilamiz</span>
            <h3 className="articleTitle">Hamkorlik shartlari</h3>

            <ul>
              <li>- TC bo'yicha ro'yxatdan o'tish;</li>
              <li>- Qulay ofis;</li>
              <li>
                - Ish haqi suhbat natijalari va bilim darajasiga qarab
                belgilanadi.
              </li>
            </ul>
          </article>

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

          <div className="tgBot">
            <p>
              Rezyumeni telegram orqali
              <a
                href="https://t.me/birsonia_bot"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                @birsonia_bot
              </a>
              manziliga yuborishingiz mumkin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyDetails;
