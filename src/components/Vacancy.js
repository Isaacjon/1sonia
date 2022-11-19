import "../assets/styles/layout/vacancy.scss";
import search from "../assets/images/vacancySection/search.svg";
import arrowDown from "../assets/images/vacancySection/arrowDown.svg";
import bezier from "../assets/images/vacancySection/bezier.svg";
import VacancyDetails from "./VacancyDetails";
import { useState } from "react";

const fakeData = [
  {
    id: 1,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 2,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 3,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 4,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 5,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 6,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 7,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
  {
    id: 8,
    title: "Java dasturchi",
    required: [
      "Korxona segmentida ish tajribasi;",
      "Kubernetes bilan ishlash tajribasi;",
      "PostgreSQL, Apache Cassandra bilan ishlash tajribasi;",
      "OSGI konteynerlarini to'g'ri yozish qobiliyati;",
    ],
  },
];

const Vacancy = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="vacancySection">
      <div className="container">
        <h3 className="sectionTitle">
          Bo’sh <span>ish o’rinlari</span>
        </h3>
        <p className="sectionSubtitle">
          Karyerangizda keyingi qadamni tashlang, mustaqil ish yoki stajirovka
          qiling
        </p>
        <div className="searchDiv">
          <p>
            <span>Freelance hamkorlik</span>
            <span>To'liq bandlik</span>
          </p>
          <div className="flex">
            <div className="inputWrapper">
              <img src={search} alt="search" />
              <input
                type="text"
                placeholder="Kalit so'zlar bo'yicha ishlarni qidiring"
              />
            </div>
            <div className="btnDiv">
              <button>
                <span>Bo’limlarni tanlang</span>
                <img src={arrowDown} alt="search" />
              </button>
            </div>
          </div>
        </div>
        <div className="wrapper">
          {fakeData.map((item) => (
            <div className="item" key={item.id}>
              <div>
                <img src={bezier} alt="icon" />
                <h5 className="itemTitle">{item.title}</h5>
              </div>
              <p>Kerakli ko'nikmalar:</p>
              <ul>
                {item.required.map((item, idx) => (
                  <li key={idx}>- {item}</li>
                ))}
              </ul>
              <div className="btnDiv" onClick={() => setOpenModal(true)}>
                <button>Batafsil bilish</button>
              </div>
            </div>
          ))}
        </div>
        {openModal && <VacancyDetails setOpenModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Vacancy;
