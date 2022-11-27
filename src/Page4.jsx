import { Footer } from "./Footer";
import "./index.scss";
import { Link } from "react-router-dom";
function Page4() {
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
              <h2 className="text text--blue">Статьи</h2>
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
        <h1 className="title title--first">Статьи</h1>
        <div className="blueLine"></div>
        <Link to="/article">
          <div className="cardContent between">
            <div className="card  card--580">
              <div className="title title--blue">Про лестницы</div>
              <div className="text t40 text--grey">
                Знаете самый главный минус бетонных лестниц? Скорей всего – нет.
                Мне потребовалось несколько лет ежедневной работы, с полным
                погружением в тему, чтобы его понять. Наверное, неожиданно будет
                узнать об этом именно от меня, как от производителя бетонных
                лестниц, но я хочу...
              </div>
              <div className="t20">
                <a href="">Читать далее</a>
              </div>
            </div>
            <div className="card card--580">
              <div className="title title--blue">Коротко о главном</div>
              <div className="text t40 text--grey">
                Как выбрать лестницу!? Любая стройка проходит несколько этапов,
                каждый прекрасен и ужасен по своему! Не буду останавливаться на
                всех тонкостях строительства дома – сегодня разговор пойдет о
                лестницах. В сегодняшних реалиях, тройка лидеров...
              </div>
              <div className="t20">
                <a href="">Читать далее</a>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
export { Page4 };
