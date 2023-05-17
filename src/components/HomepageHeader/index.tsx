import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ArrowSvg from "@site/static/img/arrow_forward.svg";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";
const firstWord = [
  {
    delay: 0,
    text: "R",
  },
  {
    delay: 0,
    text: "A",
  },
  {
    delay: 50,
    text: "R",
  },
  {
    delay: 50,
    text: "I",
  },
  {
    delay: 100,
    text: "M",
  },
  {
    delay: 100,
    text: "0",
  },
];

const secondWord = [
  {
    delay: 150,
    text: "D",
  },
  {
    delay: 200,
    text: "E",
  },
  {
    delay: 200,
    text: "V",
  },
  {
    delay: 250,
    text: "E",
  },
  {
    delay: 250,
    text: "L",
  },
  {
    delay: 300,
    text: "0",
  },
  {
    delay: 300,
    text: "P",
  },
  {
    delay: 350,
    text: "E",
  },
  {
    delay: 350,
    text: "R",
  },
];

const thirdWord = [
  {
    delay: 400,
    text: "D",
  },
  {
    delay: 400,
    text: "O",
  },
  {
    delay: 450,
    text: "C",
  },
  {
    delay: 450,
    text: "U",
  },
  {
    delay: 500,
    text: "M",
  },
  {
    delay: 500,
    text: "E",
  },
  {
    delay: 550,
    text: "N",
  },
  {
    delay: 600,
    text: "T",
  },
  {
    delay: 600,
    text: "A",
  },
  {
    delay: 650,
    text: "T",
  },
  {
    delay: 650,
    text: "I",
  },
  {
    delay: 700,
    text: "O",
  },
  {
    delay: 700,
    text: "N",
  },
];

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      data-aos="fade-up"
      className={clsx("heroBanner hero--primary", styles.heroBanner)}
    >
      <div className={clsx("heroContent container", styles.heroContent)}>
        <h1 className={clsx("hero__title", styles.heroTitle)}>
          <div>
            {firstWord.map(({ text, delay }, idx) => (
              <span
                key={idx}
                style={{ display: "inline-block" }}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="400"
              >
                {text}
              </span>
            ))}

            <span data-aos="fade-up" data-aos-delay="700">
              {" "}
            </span>
            {secondWord.map(({ text, delay }, idx) => (
              <span
                key={idx}
                style={{ display: "inline-block" }}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="400"
              >
                {text}
              </span>
            ))}
          </div>
          <div>
            {thirdWord.map(({ text, delay }, idx) => (
              <span
                key={idx}
                style={{ display: "inline-block" }}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="400"
              >
                {text}
              </span>
            ))}
          </div>
        </h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={clsx("buttonContainer", styles.buttonContainer)}>
          <a
            href="/docs/docs/overview"
            className={clsx(
              "heroButton svgContainer",
              styles.heroButton,
              styles.svgContainer
            )}
          >
            Getting Started <ArrowSvg />
          </a>
          {/*//Todo: add link to explore features*/}
          <a
            className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
            href="#"
          >
            Explore Features
          </a>
        </div>
      </div>
    </header>
  );
}
