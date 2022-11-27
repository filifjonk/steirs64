import "./index.scss";
function Modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
}
export { Modal };
