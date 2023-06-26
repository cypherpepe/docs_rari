import "aos/dist/aos.css";

import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
// import HomepageDeveloperLinks from "@site/src/components/HomepageDeveloperLinks";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageLinks from "@site/src/components/HomepageLinks";
import ArrowSvg from "@site/static/img/arrow_forward.svg";
import Layout from "@theme/Layout";
import aos from "aos";
import clsx from "clsx";
import React, { useRef } from "react";

import styles from "./index.module.css";

function HomepageStartBuilding() {
  return (
    <div className={clsx("startBuildingSection", styles.startBuildingSection)}>
      <h1 className={clsx("second__title", styles.secondTitle)}>
        Start Building with rarimo
      </h1>
      <p className={clsx("second__subtitle", styles.secondSubtitle)}>
        Our community is here to help! Enjoy support tailored to the unique
        needs of your project
      </p>
      <div
        className={clsx("secondButtonContainer", styles.secondButtonContainer)}
      >
        <a
          className={clsx(
            "heroButton svgContainer",
            styles.heroButton,
            styles.svgContainer
          )}
          href="https://rarimo.com/testnet/sign-up"
          target="_blank"
          rel="noreferrer"
        >
          Join Testnet
          <ArrowSvg className={clsx("heroButton__svg")} />
        </a>
        <Link
          className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
          href="whitepaper"
          type="doc"
          id="whitepaper"
        >
          Whitepaper
        </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const light = useRef(null);
  return (
    <Layout>
      <BrowserOnly>
        {() => {
          aos.init({
            duration: 900,
            easing: "ease",
            offset: 0,
            once: true,
            mirror: false,
            anchorPlacement: "center-bottom",
          });
          document.addEventListener("mousemove", function ({ pageX, pageY }) {
            const x = pageX;
            const y = pageY;
            const spotlightSize = "transparent 80px, rgba(0, 0, 0, 0.6) 200px)";
            if (light.current) {
              light.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${spotlightSize}`;
            }
          });
          return (
            <>
              <HomepageHeader />
              <div className={clsx("bgImageFirst", styles.bgImageFirst)} />
              <div
                className={clsx("bgImageSecond", styles.bgImageSecond)}
                ref={light}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageThird squareWaveAnimationDown",
                  styles.bgImageThird
                )}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageFourth squareWaveAnimationUp",
                  styles.bgImageFourth
                )}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageFifth squareWaveAnimationUp",
                  styles.bgImageFifth
                )}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageSixth squareWaveAnimationDown",
                  styles.bgImageSixth
                )}
              />
              <main>
                <HomepageFeatures />
                {/*Todo: Show developer links */}
                {/*<HomepageDeveloperLinks />*/}
                <div className="container">
                  <div className={clsx("bottomContent", styles.bottomContent)}>
                    <HomepageStartBuilding />
                    <HomepageLinks />
                  </div>
                </div>
              </main>
            </>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
