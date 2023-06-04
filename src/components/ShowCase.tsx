import React, { useState } from "react";
import {
  BouncyBalls,
  CircularLoader,
  LinearLoader,
  HamBurger,
  TorchBox,
  LazyLoader,
  Modal,
} from "./";
import "../style/index.sass";
import { ModalProps } from "./Layout/Modal";

const ShowCase = () => {
  const [lazyLoaderEOD, setLazyLoaderEOD] = useState(false);
  const [modalData, setModalData] = useState<ModalProps>({
    open: false,
    MouseEvent: undefined,
    closeHandler: () => {},
    keepModalCentered: false,
    TransitionStyle: "none",
  });
  return (
    <div className="showcase__container">
      <header>
        <div className="header__inner">
          <div className="hdui-logo">HD UI</div>
          <div className="component-search__container">SEARCH</div>
        </div>
      </header>
      <div className="showcase__types">
        <h1>Loaders</h1>
        <div className="showcase__items">
          <div className="item">
            <LinearLoader />
            <code>{`<LinearLoader />`}</code>
          </div>

          <div className="item">
            <CircularLoader width={40} />
            <code>{`<CircularLoader />`}</code>
          </div>

          <div className="item">
            <BouncyBalls />
            <code>{`<BouncyBalls />`}</code>
          </div>
        </div>
      </div>
      <div className="showcase__types">
        <h1>Menu</h1>
        <div className="showcase__items">
          <div className="item">
            <HamBurger
              onOpen={() => console.log("ham open")}
              onClose={() => console.log("ham close")}
            />
            <code>{`<HamBurger />`}</code>
          </div>
        </div>
      </div>
      <div className="showcase__types">
        <h1>Layout</h1>
        <div className="showcase__items">
          <div className="item">
            <TorchBox
              containerStyle={{
                display: "grid",
                placeItems: "center",
                width: "300px",
                height: "200px",
              }}
              torchStyle={{ size: 1 }}
            >
              <div>Move your mouse over this box</div>
            </TorchBox>
            <code>{`<TorchBox />`}</code>
          </div>
          <div className="item">
            <button
              className="modal-open-cta"
              style={{
                background: "rgba(125,125,125,0.3)",
                boxShadow: "1px 2px 7px grey",
                padding: "10px 30px",
                border: "none",
                outline: "none",
                borderRadius: "7px",
                cursor: "pointer",
                transition: "box-shadow 200ms ease",
                marginBottom: "50%",
              }}
              onClick={(e) => {
                setModalData((state) => ({
                  ...state,
                  open: true,
                  MouseEvent: e,
                }));
              }}
            >
              Open PopUp
            </button>
            <code>{`<Modal />`}</code>
            <Modal
              open={modalData.open}
              closeHandler={() =>
                setModalData((state) => ({ ...state, open: false }))
              }
              keepModalCentered={false}
              MouseEvent={modalData.MouseEvent}
              TransitionStyle="fade"
              modalStyle={{ borderRadius: "10px" }}
            >
              <p style={{ padding: "20px", color: "black" }}>
                I was not able to get some popup data, but the good thing
                is....It's Working!
              </p>
            </Modal>
          </div>
        </div>
      </div>
      <div className="showcase__types">
        <h1>Utilities</h1>
        <div className="showcase__items">
          <div className="item">
            <LazyLoader
              endOfData={lazyLoaderEOD}
              Loader={<CircularLoader width={40} />}
              onVisibleHandler={() => {
                setTimeout(() => {
                  setLazyLoaderEOD(true);
                }, 3000);
              }}
            />
            {lazyLoaderEOD && <div>Data Loaded!</div>}
            <code>{`<LazyLoader />`}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
