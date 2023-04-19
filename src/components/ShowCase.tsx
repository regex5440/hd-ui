import React from "react";
import {
  BouncyBalls,
  CircularLoader,
  LinearLoader,
  HamBurger,
  TorchBox,
} from "./";
import "../style/index.sass";

const ShowCase = () => {
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
            <CircularLoader />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
