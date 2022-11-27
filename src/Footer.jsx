import "./index.scss";
function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex between">
          <div>
            <img src="/img/logo.png" alt="" />
            <div className="micro micro--200 t20">
              64STAIRS - строительный подрядчик, предоставляющий свои услуги в
              проектировании и строительстве лестниц
            </div>
            <div className="micro micro--200 t10">2020 © 64STAIRS</div>
          </div>
          <div>
            <div className="flex">
              <img width={20} height={20} src="/img/grphone.png" alt="" />
              <div className="micro micro--phone">+7-927-220-74-77</div>
            </div>
            <div className="flex t20">
              <a href="">
                <img
                  className="r20"
                  width={22}
                  height={23}
                  src="/img/vk.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="r20"
                  width={23}
                  height={23}
                  src="/img/instagram 1.png"
                  alt=""
                />
              </a>
              <a>
                <img
                  className="r20"
                  width={12}
                  height={23}
                  src="/img/facebook 1.png"
                  alt=""
                />
              </a>
            </div>

            <div className="micro micro--top80">
              Политика конфиденциальности
            </div>
            <div className="micro t10">Работа над сайтом настя левашкина</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
