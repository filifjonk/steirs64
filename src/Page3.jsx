import { useState } from "react";
import { Footer } from "./Footer";
import "./index.scss";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
function Page3() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="head--nav">
            <Link to="/">
              <img width={140} height={70} src="/img/greylogo.png" alt="" />
            </Link>
            <Link to="/about">
              <h2 className="text text--grey">О лестницах</h2>
            </Link>
            <Link to="/price">
              <h2 className="text text--grey">Стоимость</h2>
            </Link>
            <Link to="/works">
              <h2 className="text text--blue">Наши работы</h2>
            </Link>
            <Link to="/articles">
              <h2 className="text text--grey">Статьи</h2>
            </Link>
            <Link to="/cont">
              <h2 className="text text--grey">Контакты</h2>
            </Link>

            <div className="flex">
              <img width={20} height={20} src="/img/call.png" alt="" />
              <h2 className="text text--blue"> +7-927-220-74-77</h2>
            </div>
          </div>
          <div className="media ">
            <div className="flex t20">
              <a href="">
                <img
                  className="r20"
                  width={22}
                  height={13}
                  src="/img/vk (1).png"
                  alt=""
                />
              </a>
              <a>
                <img
                  className="r20"
                  width={12}
                  height={23}
                  src="/img/facebook2.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="r20"
                  width={23}
                  height={23}
                  src="/img/instagram2.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper">
        <h1 className="title title--first">Наши работы</h1>
        <div className="blueLine"></div>
        <div className="cardContent">
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40">
            <a href="#img1">
              <img src="/img/small.png" />
            </a>
            <a href="#" className="lightbox" id="img1">
              <span className="big big--one"></span>
            </a>
            <p className="text text--center text--center--blue">
              Март 2020, Балаково, 3D-проект
            </p>
          </div>
          <div className="t40" onClick={() => setModalActive(true)}>
            <img src="/img/add.png" alt="" />
            <p className="text text--center text--center--blue">
              Хотите помочь нам пополнить портфолио?
            </p>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      <Footer />
    </>
  );
}
export { Page3 };
