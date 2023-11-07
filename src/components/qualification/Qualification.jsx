import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {

    const [ toggleState , setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Design 1.1
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2021 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Web Development 1.2
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2020 - 2021</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    UX Expert 1.3
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2018 - 2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Art Director 1.4
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2017 - 2018</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ toggleState === 2 ?  "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Design 2.1
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2021 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Web Development 2.2
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2020 - 2021</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    UX Expert 2.3
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2018 - 2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Art Director
                                </h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017 - 2018</i>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification