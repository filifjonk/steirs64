import { Footer } from "./Footer";
import "./index.scss";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
function Page5() {
  const defaultState = {
    center: [51.528901, 46.007972],
    zoom: 15
  };
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
              <h2 className="text text--grey">Наши работы</h2>
            </Link>
            <Link to="/articles">
              <h2 className="text text--grey">Статьи</h2>
            </Link>
            <Link to="/cont">
              <h2 className="text text--blue">Контакты</h2>
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
        <h1 className="title title--first">Наши контакты</h1>
        <div className="blueLine"></div>
        <div className="flex">
          <div className="flex">
            <div className="column">
              <img
                className="t40 r20"
                width={30}
                height={30}
                src="/img/GOS 1.png"
                alt=""
              />
              <img
                className="t40 r20"
                width={30}
                height={30}
                src="/img/clock 1.png"
                alt=""
              />
              <img className="t40 r20" src="/img/call.png" alt="" />
              <img className="t20 r20" src="/img/email 1.png" alt="" />
            </div>
            <div>
              <div className="text t40 text--grey">
                <b> Адрес:</b> г. Саратов, Театральная пл. 1
              </div>
              <div className="text t40 text--grey">
                <b>Часы работы:</b> с 08:00 до 21:00
              </div>
              <div className="text t40 text--grey">
                <b>Телефон:</b> +7-927-220-74-77
              </div>
              <div className="text t40 text--grey">
                <b>E-mail:</b> eng.monolit@bk.ru
              </div>
            </div>
          </div>
          <div className="map">
            <YMaps className="">
              <Map width={600} height={400} defaultState={defaultState}>
                <Placemark geometry={[51.528901, 46.007972]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Page5 };
