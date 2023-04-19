import { useState } from "react";
import "../modal/modal.scss";

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handdleClose = () => setShow(false);

  return (
    <div className="modal__container">
      <div className="modal__box-one">
        <p className="modal__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ex corporis! Similique officiis at suscipit ullam
          veniam obcaecati nostrum, saepe provident quibusdam est! Dolor atque
          sequi fuga quibusdam expedita ducimus?
        </p>
        <button className="modal__open-btn" onClick={handleOpen}>
          Instal
        </button>
      </div>
      <div className={show ? "modal__box-two open" : "modal__box-two"}>
        <p className="modal__text-two">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          ducimus.
        </p>
        <button className="modal__close-btn" onClick={handdleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
