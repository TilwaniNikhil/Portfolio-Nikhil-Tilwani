import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import {  AiOutlineRead } from "react-icons/ai";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Blogs() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://nikhiltilwaniblogs.hashnode.dev/"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineRead />
            &nbsp;Read More
          </Button>
        </Row> */}

        <Row className="resume">
          <ul class="list-non-bullet">
            <li>
              <article class="showcase-list container container-center">
                <h1>== v/s ===</h1>
                <small>Feb 15, 2023</small>

                <p>
                  The equality operator in javascript is used to compare if two
                  values are equal. The comparison is made by == and ===
                  operators in javascript. The main difference between the ==
                  and === operators in javascript is that the == operator does
                  the type conversion of the operands before comparison, whereas
                  the === operator compares the values as well as the data types
                  of the operands.
                </p>
              </article>
            </li>

            <li>
              <article class="showcase-list container container-center">
                <h1>Smartphones are curse?</h1>
                <small>October 04, 2022</small>
                <p>
                  Increasing loneliness and depression. While it may seem that
                  losing yourself online will temporarily make feelings such as
                  loneliness, depression, and boredom evaporate into thin air,
                  it can actually make you feel even worse. A 2014 study found a
                  correlation between high social media usage and depression and
                  anxiety. Users, especially teens, tend to compare themselves
                  unfavorably with their peers on social media, promoting
                  feelings of loneliness and depression. Fueling anxiety. One
                  researcher found that the mere presence of a phone in a work
                  place tends to make people more anxious and perform poorly on
                  given tasks. The heavier a people phone use, the greater the
                  anxiety they experienced.
                </p>
              </article>
            </li>
            <li>
              <article class="showcase-list container container-center">
                <h1>Artificial Intelligence vs. Human Intelligence</h1>
                <small>Nov 28, 2023</small>
                <p>
                  What Will the Future of Human vs AI Be? The capabilities of AI
                  are constantly expanding. It takes a significant amount of
                  time to develop AI systems, which is something that cannot
                  happen in the absence of human intervention. All forms of
                  artificial intelligence, including self-driving vehicles and
                  robotics, as well as more complex technologies like computer
                  vision, and natural language processing, are dependent on
                  human intellect.
                </p>
              </article>
            </li>
            <li>
              <article class="showcase-list container container-center">
                <h1>Does Comedians have democracy in india ?</h1>
                <small>October 04, 2022</small>
                <p>
                  One of India's top stand-up comedians, Vir Das, recently
                  delivered a monologue called "Two Indias" while performing in
                  Washington DC, in which he shared his thoughts about the South
                  Asian nation's social issues. During the show, Das described
                  India as a country of paradoxes where people "worship women
                  during the day but gang rape them at night." The show drew
                  sharp criticism and even resulted in legal cases against the
                  comic. Critics have accused him of defaming India.
                </p>
              </article>
            </li>
          </ul>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://nikhiltilwaniblogs.hashnode.dev/"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineRead />
            &nbsp;Read More
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
