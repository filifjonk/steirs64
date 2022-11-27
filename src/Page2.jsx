import { Footer } from "./Footer";
import "./index.scss";
import { Link } from "react-router-dom";
function Page2() {
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
              <h2 className="text text--blue">Стоимость</h2>
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
        <h1 className="title title--first">Особенности изготовления</h1>
        <div className="blueLine"></div>
        <p className="text text--60 text--grey">
          Индивидуальность, элегантность, надежная опора для легкого и
          уверенного шага, главная достопримечательность дома, демонстрация
          успеха и потенциала своего обладателя — и все это про монолитные
          железобетонные лестницы!
        </p>
        <p className="text t20 text--grey">
          Лестница из монолитного бетона отвечает всем современным дизайнерским
          требованиям, она впишется практически в любой интерьер, в отличие от
          металлических лестниц, которые скудны в отделке. Кроме того
          металлические лестницы «гудят», что создает определенные проблемы. За
          счет сборной конструкции металлические лестницы и деревянные не
          самонесущие, т.е. в большинстве случаях требуют опорных столбов — а
          это дополнительные финансовые затраты. Денежный фактор опять же играет
          в пользу лестниц из монолитного бетона.
        </p>
        <h1 className="title title--first">Стандартные лестницы</h1>
        <div className="blueLine"></div>
        <div className="cardContent">
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
        </div>
        <h1 className="title title--first">Премиум лестницы</h1>
        <div className="blueLine"></div>
        <div className="cardContent">
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
          <div className="cardSort">
            <div className="">
              <img width={380} src="/img/sort1.png" alt="" />
              <div className=" cardSortContent small small--blue t20">
                Прямая лестница
              </div>
              <div className=" cardSortContent text text--grey t10">
                <b>от 24.000 руб. за 1 метр подъема</b>
              </div>
              <p className=" cardSortContent small small--grey t20">
                Это лестница , где проступь неизменна по всей длине марша и все
                ступени одинаковы
              </p>
            </div>
            <div className="butDark">
              <button className="fistbutton fistbutton--blue">Заказать</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Page2 };
