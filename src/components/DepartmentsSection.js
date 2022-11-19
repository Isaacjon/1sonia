import React from "react";
import "../assets/styles/layout/departments.scss";
import heartIcon from "../assets/images/departments/heartIcon.svg";
import halfDotRectangle from "../assets/images/departments/halfDotRectangle.svg";

const DepartmentsSection = () => {
  const fakeData = [
    {
      id: 1,
      title: "Meditsina",
      text: ` Ko'p sonli bemorlarning og'riqli nuqtalarini inobatga olgan holda
      ishlab chiqilgan bu kategoriya, ishonchli va tajribali shifokorlarni
      o'z ichiga oladi. Kunlik grafik tartibida qabuliga yozilish imkoni
      hamda ular haqida batafsil ma'lumotlar bazasini ko'rish mumkin. Biz
      siz uchun qayg'uramiz...!`,
      icon: "../assets/images/departments/heartIcon.svg",
    },
    {
      id: 2,
      title: "Restoran",
      text: `Barcha xohlagan va kutgan foydali ko'p funksiyalarga ega bo'lgan ushbu kategoriyada atrofdagi barcha diqqatga sazovor restoranlarning joylashuvi, dasturxonga tortiladigan shirin taomlarning narxi va ro'yxatini qamrab olgan. `,
      icon: "../assets/images/departments/heartIcon.svg",
    },
    {
      id: 3,
      title: "Avto",
      text: `Yo'l o'rtasida moshinagiz pand berdi! Yordam kutish juda noqulay vaziyat tog'ri-a?! Kayfiyatingizni ko'taring. Qo'lingizga smartfoningizni olingda, tajribali ustalar joylashgan avtoservislarni toping... Moyingizni almashtirib, yuvintirish ham esdan chiqmasin. Oq yo'l!`,
      icon: "../assets/images/departments/heartIcon.svg",
    },
    {
      id: 4,
      title: "San’atkor",
      text: `Ko'p sonli bemorlarning og'riqli nuqtalarini inobatga olgan holda ishlab chiqilgan bu kategoriya, ishonchli va tajribali shifokorlarni o'z ichiga oladi. Kunlik grafik tartibida qabuliga yozilish imkoni hamda ular haqida batafsil ma'lumotlar bazasini ko'rish mumkin. Biz siz uchun qayg'uramiz...!`,
      icon: "../assets/images/departments/heartIcon.svg",
    },
  ];

  return (
    <div className="departmentsSection">
      <img src={halfDotRectangle} alt="halfDotRectangle" />
      <img src={halfDotRectangle} alt="halfDotRectangle" />
      <div className="container">
        <h3 className="sectionTitle">
          1SONIA platformasining asosiy <span> bo’limlari</span>
        </h3>
        <div className="wrapper">
          {fakeData.map((item) => (
            <div className="card" key={item.id}>
              <div className="content">
                <div className="icon">
                  <img src={heartIcon} alt={item.title} />
                  <span>{item.title}</span>
                </div>
                <p className="text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsSection;
