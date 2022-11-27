import { Footer } from "./Footer";
import "./index.scss";
import { Slider } from "./Slider";
import { Link } from "react-router-dom";
function Page1() {
  return (
    <>
      <div className="head--block">
        <div className="wrapper">
          <div className="head--nav">
            <Link to="/">
              <img width={140} height={70} src="/img/logo.png" alt="" />
            </Link>
            <Link to="/about">
              <h2 className="text">О лестницах</h2>
            </Link>
            <Link to="/price">
              <h2 className="text">Стоимость</h2>
            </Link>
            <Link to="/works">
              <h2 className="text">Наши работы</h2>
            </Link>
            <Link to="articles">
              <h2 className="text">Статьи</h2>
            </Link>
            <Link to="cont">
              <h2 className="text">Контакты</h2>
            </Link>

            <div className="flex">
              <img width={20} height={20} src="/img/call.png" alt="" />
              <h2 className="text text--blue"> +7-927-220-74-77</h2>
            </div>
          </div>
          <div className="head--info">
            <h1 className="text text--head">
              Лестницы из бетона
              <br />
              для вашего дома
            </h1>
            <div className="head--info--sub">
              <h2 className="sub-text">Долговечность, красота, гармония!</h2>
              <h2 className="sub-text sub-text--grey">
                Саратов. Энгельс. Область.
              </h2>
            </div>
          </div>
          <div className="buttons">
            <div className="but">
              <button className="fistbutton">
                Получить бесплатный 3D проект
              </button>
            </div>
            <div className="but">
              <button className="fistbutton fistbutton--pd">
                Выбрать лестницу
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="title title--first">Как мы создаем проект?</h1>
        <div className="blueLine"></div>
        <div className="steps">
          <img
            className="r30"
            width={105}
            height={105}
            src="/img/firstStep.png"
            alt=""
          />
          <div className="step">
            <h1 className="title title--blue">Первая ступень</h1>
            <p className="text text--grey t20">
              {" "}
              <b>Замер</b>
            </p>
            <p className="text text--grey t10">
              {" "}
              Замеры для подготовки коммерческого предложения и проекта будущей
              лестницы осуществляет специалист нашей компании. Сделаем замеры
              точно и правильно, используем лазерную измерительную технику. При
              этом обязательно учитываются: материал стен и перекрытий,
              отделочные материалы пола и ступеней, наличие элементов интерьера,
              расположение инженерных систем, отопительные приборы, двери,
              оконные проемы и т.д.{" "}
              <p className="t20">
                <b>Разработка проекта и 3D визуализация</b>
              </p>{" "}
              <p className="t10">
                На этом этапе создаем проект в специальном программном
                обеспечении. После этого делаем визуализацию и передаем Вам на
                утверждение. Индивидуально подбираем самый рациональный вариант,
                учитывая все факторы, влияющих на комфорт, отделку,
                характеристики и безопасность лестницы. По необходимости
                проводим дополнительный расчет жесткости конструкций. Сроки
                строительства и стоимость фиксируются договором, предоставляется
                гарантия на лестницу от 10 лет!
              </p>
            </p>
          </div>
        </div>
        <div className="steps">
          <img
            className="r30"
            width={105}
            height={105}
            src="/img/firstStep.png"
            alt=""
          />
          <div className="step">
            <h1 className="title title--blue">Вторая ступень</h1>
            <p className="text text--grey t20">
              {" "}
              <b>
                По согласованию с Вами завозим материалы и инструмент на объект
              </b>
            </p>
            <p className="text text--grey t10">
              Выбор материалов и расходников, доставка, погрузка и выгрузка,
              прочие дела – все делаем сами! Вам не нужно ничего закупать,
              привозить, решать, подметать и убирать – все сделаем мы!
            </p>
            <p className="text text--grey t20">
              <b>Изготовление и монтаж жесткосварного самонесущего каркаса</b>
            </p>
            <p className="text text--grey t20">
              <b>Монтаж опалубки</b>
            </p>
            <p className="text text--grey t20">
              <b>Заливка бетонной смесью</b>
            </p>
            <p className="text text--grey t10">
              Все работы производятся на месте, поэтому в любой момент Вы можете
              лично увидеть все этапы изготовления и убедиться в нашем
              профессионализме и квалификации. Количество и марка материалов
              регламентированы. При проведении работ соблюдаем требования по ТБ.
            </p>
          </div>
        </div>
        <div className="steps">
          <img
            className="r30"
            width={105}
            height={105}
            src="/img/firstStep.png"
            alt=""
          />
          <div className="step">
            <h1 className="title title--blue">Третья ступень</h1>
            <p className="text text--grey t20">
              {" "}
              <b>Уход за бетоном</b>
            </p>
            <p className="text text--grey t10">
              После заливки бетон требует ухода. В зависимости от погодных
              условий и расположения объекта (внутренние лестницы либо внешние
              лестницы) организуем уход за бетоном. Это может быть либо укрытие
              конструкции пленкой для предотвращения слишком быстрого высыхания,
              либо просто полив лестницы водой несколько раз в сутки. В холодное
              время года бетонная смесь требует прогрева. Варианты прогрева
              подбираются индивидуально для каждого проекта. Первые 72 часа
              после заливки особенно важны для дальнейшего правильного набора
              марочной прочности бетона! По необходимости этот срок может быть
              увеличен. Это очень важная часть нашей работы – поэтому просто
              обеспечим весь спектр необходимых мероприятий!
            </p>
            <p className="text text--grey t20">
              <b>
                По достижении монолитной конструкции необходимой прочности
                произведем разопалубку
              </b>
            </p>
            <p className="text text--grey t20">
              <b>По окончании работ – финальная уборка помещения</b>
            </p>
            <p className="text text--grey t10">
              Проект успешно завершен – Ваша лестница готова!
            </p>
          </div>
        </div>
      </div>
      <div className="containerWhy">
        <div className="w600">
          <h1 className="title title--white">Почему бетон?</h1>
          <div className="blueLine"></div>
          <div className="small small--blue small--blue--first">
            01. Безупречная надежность и прочность!
          </div>
          <div className="small t10">
            Служит много лет без дополнительных трат на обслуживание. Не
            скрипит, не горит, не вибрирует. В типовом варианте отсутствуют
            дополнительные столбы и опоры.
          </div>
          <div className="small small--blue small--blue t20">
            02. Многообразие форм!
          </div>
          <div className="small t10">
            Бетонная лестница может быть практически любой формы. Вы сможете
            воплотить в жизнь самые смелые и дерзкие проекты.
          </div>
          <div className="small small--blue small--blue t20">
            03. Универсальность!
          </div>
          <div className="small t10">
            Отделка бетонных ступеней любым современным отделочным материалом.
            Финишную отделку можно сделать на последнем этапе строительства
            дома.
          </div>
          <div className="small small--blue small--blue t20">04. История!</div>
          <div className="small t10">
            В Российской истории монолитный железобетон известен с 1802 года.
            Проверено временем! Миллиарды кубометров, миллионы построенных
            домов, дворцов, музеев, церквей, стадионов, памятников, плотин,
            миллионы довольных людей!
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="title title--first">Наши работы</h1>
        <div className="blueLine"></div>
        <Slider />
      </div>
      <div className="containerMeasuring">
        <div className="w600">
          <h1 className="title">Запишитесь на бесплатный замер</h1>
          <div className="blueLine"></div>
          <div className="forma">
            <div className="column">
              <div className="formTitle">Имя</div>
              <input className="input--blue" type="text" />
              <div className="formTitle">Телефон</div>
              <input className="input--blue" type="text" />
              <div className="formTitle">E-mail</div>
              <input className="input--blue" type="text" />
              <input
                className="input--fullBlue"
                type="submit"
                value="Записаться"
              />
              <div className="micro t10 l20">
                Нажимая на кнопку вы даете согласие <br />
                на обработку персональных данных
              </div>
            </div>
            <div>
              <div className="formTitle">Комментарий</div>
              <input className="comment" type="text" />
            </div>
          </div>
        </div>
        <img className="pic" src="/img/instrument.png" alt="" />
      </div>
      <div className="why">
        <img width={800} height={1176} src="/img/grass.png" alt="" />
        <div className="whyInfo">
          <h1 className="title title--white">Почему мы?</h1>
          <div className="blueLine"></div>
          <ul className="items small">
            <li className="t20">
              Занимаемся любимым делом и имеем многолетний опыт.
            </li>
            <li className="t20">
              Берем на себя весь комплекс работ - не нужно ничего закупать,
              искать, привозить – этим занимаемся мы!
            </li>
            <li className="t20">Никаких посредников и нахлебников.</li>
            <li className="t20">
              Работаем по договору, проверенной временем технологии и даем
              гарантию от 10 лет.
            </li>
            <li className="t20">
              Все лестницы, которые мы делаем, рассчитаны в строгом соответствии
              со СНиП.
            </li>
            <li className="t20">
              Если проект нетиповой – обязательно делаем дополнительный
              инженерный расчет жесткости конструкции.
            </li>
            <li className="t20">
              Имеем весь необходимый набор профессиональных инструментов и
              измерительных приборов.
            </li>
            <li className="t20">
              Только качественные материалы и расходники. Делаем быстро, но
              никуда не торопимся.
            </li>
            <li className="t20">
              Разумный подход к делу позволяет нам достойно зарабатывать, а Вам
              экономить.{" "}
            </li>
            <li className="t20">Довольный клиент – это наш принцип!</li>
            <li className="t20">
              Мы не делаем ВСЕ!!! А просто специализируемся, учимся, развиваемся
              и создаем неповторимый элемент интерьера Вашего дома – монолитную
              лестницу!
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="title title--first">Особенности изготовления</h1>
        <div className="blueLine"></div>
        <h2 className="text text--grey text--60">
          <b>Наиболее часто встречающиеся ошибки при изготовлении лестниц:</b>
        </h2>
        <div className="cardContent">
          <div className="card">
            <img src="/img/cardPic.png" alt="" />
            <h2 className="small small--blue t20">
              Неправильное снятие <br />
              замеров
            </h2>
            <p className="small small--grey t20">
              <b>Наше решение:</b> при замере объекта используем высокоточные
              приборы. Учитываем разницу в высотах и толщину отделочных
              материалов, которые Вы будете использовать при финишной отделке
              лестницы.
            </p>
          </div>
          <div className="card">
            <img src="/img/cardPic.png" alt="" />
            <h2 className="small small--blue t20">
              Шаблонное проектирование или его отсутствие
            </h2>
            <p className="small small--grey t20">
              <b>Наше решение:</b> осуществляем расчёт и проектирование в
              специализированных программах, делаем 3D визуализацию Вашей
              будущей лестницы и передаём Вам на утверждение. ЗD проект Вы
              получите абсолютно бесплатно!
            </p>
          </div>
          <div className="card">
            <img src="/img/cardPic.png" alt="" />
            <h2 className="small small--blue t20">
              Неоправданный перерасход материалов
            </h2>
            <p className="small small--grey t20">
              <b>Наше решение:</b> количество материалов, транспортные и прочие
              расходы регламентированы, просчитаны и закреплены договором.
            </p>
          </div>
          <div className="card">
            <img src="/img/cardPic.png" alt="" />
            <h2 className="small small--blue t20">
              Привлечение <br /> на важные этапы работы неподготовленных лиц
            </h2>
            <p className="small small--grey t20">
              <b>Наше решение:</b> Лестницы изготавливаются на объекте
              заказчика, где можно лично убедиться в профессионализме наших
              рабочих
            </p>
          </div>
          <div className="card">
            <img src="/img/cardPic.png" alt="" />
            <h2 className="small small--blue t20">
              Несоблюдение сроков строительства и скрытые расходы
            </h2>
            <p className="small small--grey t20">
              <b>Наше решение:</b> сроки строительства и точная стоимость
              лестницы фиксируются и вносятся в договор.
            </p>
          </div>
          <div className="card">
            <img src="/img/cardPic.png" alt="" />
            <h2 className="small small--blue t20">
              Отсутствуют гарантийные обязательства от исполняющей компании
            </h2>
            <p className="small small--grey t20">
              <b>Наше решение:</b> заказчик получает на изготовленные нами
              монолитные лестницы – от 10 лет гарантии.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Page1 };
