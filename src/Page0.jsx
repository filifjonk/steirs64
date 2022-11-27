import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import "./index.scss";
import { Modal } from "./Modal";
function Page0() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="head--nav">
            <Link to="/">
              <img width={140} height={70} src="/img/greylogo.png" alt="" />
            </Link>
            <Link to="/about">
              <h2 className="text text--blue">О лестницах</h2>
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
        <h1 className="title title--first">Коротко о главном</h1>
        <div className="blueLine"></div>
        <p className="text text--60 text--grey">
          Как выбрать лестницу!? Любая стройка проходит несколько этапов, каждый
          прекрасен и ужасен по своему! Не буду останавливаться на всех
          тонкостях строительства дома – сегодня разговор пойдет о лестницах. В
          сегодняшних реалиях, тройка лидеров определена давно, и думаю что
          всерьез и надолго!
        </p>
        <div className="text t10 text--grey">
          <b>Это:</b>
        </div>
        <div className="flex">
          <div className="flex">
            <div className="column">
              <img
                className="t20 r20"
                width={15}
                height={15}
                src="/img/right-arrow 3.png"
                alt=""
              />
              <img
                className="t20 r20"
                width={15}
                height={15}
                src="/img/right-arrow 3.png"
                alt=""
              />
              <img
                className="t20 r20"
                width={15}
                height={15}
                src="/img/right-arrow 3.png"
                alt=""
              />
            </div>
            <div>
              <div className="text t10 text--grey">
                <b> Бетон;</b>
              </div>
              <div className="text t10 text--grey">
                <b>Металл;</b>
              </div>
              <div className="text t10 text--grey">
                <b>Дерево;</b>
              </div>
            </div>
          </div>
        </div>
        <p className="text t40 text--grey">
          Можно много написать, привести кучу примеров, создать всевозможные
          таблицы сравнительных расчетов. Доводы, рассуждения, опыт предков… Все
          это можно прочесть и найти без моего скромного участия! Сегодня я
          расскажу, почему выбрал для себя, и рекомендую Вам именно{" "}
          <b> монолитный железобетон.</b>
        </p>
        <div className="flex base">
          <div className="small small--blue ">01.</div>
          <div className="text t40 text--grey">
            Возможность создавать любые формы! Точный расчет армирующей
            конструкции и пластичность бетона позволяет воплотить в жизнь: Ваши
            пожелания, неуемные фантазии дизайнера, все пожелания Ваших
            домашних, и даже детские мечты!
          </div>
        </div>
        <div className="flex base">
          <div className="small small--blue ">02.</div>
          <div className="text t40 text--grey">
            Безупречная жесткость и крепость монолитной лестницы. Построили дом,
            сделали лестницу – и все это служит Вам очень долго! И прослужит не
            только Вам, а и Вашим детям!
          </div>
        </div>
        <div className="flex base">
          <div className="small small--blue ">03.</div>
          <div className="text t40 text--grey">
            Универсальность при финишной отделке! Дерево, металл, стекло,
            плитка, дикий камень, печатный бетон, ковролин, паркет и ламинат –
            далее придумайте сами!
          </div>
        </div>
        <div className="flex base">
          <div className="small small--blue ">04.</div>
          <div className="text t40 text--grey">
            Бесшумность при ходьбе! Абсолютный лидер по этому вопросу – и точка!
          </div>
        </div>
        <div className="flex base">
          <div className="small small--blue ">05.</div>
          <div className="text t40 text--grey">
            Высокая точность изготовления! Ловим миллиметры, выводим уровни, и
            получаем практически идеальные формы – очень увлекательно и
            эстетично! Гармония, однако!
          </div>
        </div>
        <div className="flex base">
          <div className="small small--blue ">06.</div>
          <div className="text t40 text--grey">
            Тактильновизуальные ощущения… Сложно описать – надо почувствовать!
            Идешь , и понимаешь: это прочно, это надежно, это красиво!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Page0 };
