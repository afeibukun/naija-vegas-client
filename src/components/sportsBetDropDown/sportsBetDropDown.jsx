import React, { useState } from "react";
import { FaPlus, FaCalendar, FaMinus } from "react-icons/all";
import ReactFlags from "react-country-flag";
import Champ from "../../assets/img/banners/champions league.png";

const SportsBetDropDown = (props) => {
  var { betName } = props;

  var data = [1, 2, 3, 4];

  var [opened, setOpened] = useState(false);
  return (
    <main className="mb-3">
      <section
        className={`d-flex justify-content-between align-content-center text-white ${
          opened ? "bg-primary" : "bg-dark"
        } mx-4 px-3 py-2`}
      >
        <p className="mb-0 bet-header">{betName}</p>
        {!opened ? (
          <FaPlus
            onClick={() => {
              setOpened(!opened);
            }}
            className="mb-0 plus-toggle"
            data-toggle="collapse"
            data-target={`#bet${props.id}`}
          />
        ) : (
          <FaMinus
            onClick={() => {
              setOpened(!opened);
            }}
            className="mb-0 plus-toggle"
            data-toggle="collapse"
            data-target={`#bet${props.id}`}
          />
        )}
      </section>

      <section class="collapse mx-5" id={`bet${props.id}`}>
        <div class="card card-body rounded-0 sub-sportsBet-header py-0">
          <div className="d-flex align-items-center">
            <p className="mb-0 matches-header text-center">Matches</p>
            <section className="d-flex justify-content-around matches-bet-odd-header">
              <div className="text-center">
                <p className="mb-0">1 x 2</p>
                <p>
                  <span>1</span>
                  <span className="mx-5">X</span>
                  <span>2</span>
                </p>
              </div>
              <div className="text-center">
                <p className="mb-0">Double</p>
                <p>
                  <span>1X</span>
                  <span className="mx-5">12</span>
                  <span>X2</span>
                </p>
              </div>
              <div className="text-center">
                <p className="mb-0">O/U2.5</p>
                <p>
                  <span className="mr-3">Over</span>
                  <span className="ml-3">Under</span>
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="card card-body rounded-0">
          {data.map((d, i) => {
            return (
              <div className="d-flex mb-2">
                <article>
                  <img src={Champ} alt="league image" />
                </article>
                <section className="flex-fill">
                  <div className="card card-body px-0 py-0 rounded-0 ml-2 shadow-sm">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item league-header">
                        <h3 className="mb-0">Champions leagues</h3>
                        <time className="league-date">
                          Friday 3rd April 2020
                        </time>
                      </li>
                      <li className="list-group-item  border border-bottom-0 border-right-0 border-left-0 d-flex align-items-center">
                        <section className="d-flex align-items-center time-and-team">
                          <time className="mr-2 match-time">20:00</time>
                          <div>
                            <p className="mb-0 league-team">Real Madrid</p>
                            <p className="mb-0 league-team">Barcelona</p>
                          </div>
                        </section>

                        <section className="d-flex  matches-bet-odd-header">
                          <ul className="list-unstyled">
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul className="list-unstyled mx-5">
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul
                            className="list-unstyled"
                            style={{ paddingLeft: "9.5rem" }}
                          >
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul className="list-unstyled mx-5">
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul
                            className="list-unstyled"
                            style={{ paddingLeft: "11rem" }}
                          >
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                          <ul className="list-unstyled ml-5">
                            <li className="red-odd-box odd-text">4/10</li>
                            <li className="red-odd-box odd-text">6/10</li>
                          </ul>
                        </section>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export { SportsBetDropDown };
