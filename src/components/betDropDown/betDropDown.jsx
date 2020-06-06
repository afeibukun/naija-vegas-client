import React, { useState } from "react";
import { FaPlus, FaCalendar, FaMinus } from "react-icons/all";
import "./bet.css";

const BetDropDown = (props) => {
  var { betName } = props;

  var [opened, setOpened] = useState(false);
  return (
    <main className="pb-4">
      <section
        className={`d-flex justify-content-between align-content-center text-white ${
          opened ? "bg-primary" : "bg-dark"
        } mx-4 px-3 py-2`}
      >
        <p className="mb-0">{betName}</p>
        {!opened ? (
          <FaPlus
            onClick={() => {
              setOpened(!opened);
            }}
            className="mb-0 plus-toggle"
            data-toggle="collapse"
            data-target={`#bet${props.id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          />
        ) : (
          <FaMinus
            onClick={() => {
              setOpened(!opened);
            }}
            className="mb-0 plus-toggle"
            data-toggle="collapse"
            data-target={`#bet${props.id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          />
        )}
      </section>

      <section class="collapse mx-5" id={`bet${props.id}`}>
        <div class="card card-body rounded-0">
          <section className="d-flex justify-content-between align-items-center border px-2 py-1">
            <p className="mb-0">Trump to Win</p>
            <div className="d-flex">
              <article className="mr-3">
                <small>Yes</small>
                <div className="red-odd-box">4/10</div>
              </article>
              <article>
                <small>Yes</small>
                <div className="red-odd-box">4/10</div>
              </article>
            </div>
            <div>
              <FaCalendar />
              <time className="ml-2">20 Oct 2021</time>
            </div>
          </section>
        </div>

        <div class="card card-body rounded-0">
          <section className="d-flex justify-content-between align-items-center border px-2 py-1">
            <p className="mb-0">Trump to Win</p>
            <div className="d-flex">
              <article className="mr-3">
                <small>Yes</small>
                <div className="red-odd-box">4/10</div>
              </article>
              <article>
                <small>Yes</small>
                <div className="red-odd-box">4/10</div>
              </article>
            </div>
            <div>
              <FaCalendar />
              <time className="ml-2">20 Oct 2021</time>
            </div>
          </section>
        </div>

        <div class="card card-body rounded-0">
          <section className="d-flex justify-content-between align-items-center border px-2 py-1">
            <p className="mb-0">Trump to Win</p>
            <div className="d-flex">
              <article className="mr-3">
                <small>Yes</small>
                <div className="red-odd-box">4/10</div>
              </article>
              <article>
                <small>Yes</small>
                <div className="red-odd-box">4/10</div>
              </article>
            </div>
            <div>
              <FaCalendar />
              <time className="ml-2">20 Oct 2021</time>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export { BetDropDown };
