import React from "react";
import { HOME_URL } from "src/shared/config/URLs";
import { MLGLogo } from "src/shared/ui/components/MLGLogo";
import { JumbotronButtons } from "./JumbotronButtons";

export const Jumbotron = () => {
  return (
    <section className="Jumbotron">
      <div className="Jumbotron-Container">
        <MLGLogo
          link={{ linkContent: HOME_URL, isAnchor: true }}
          classes={["Jumbotron-MLGLogo"]}
          imgClasses={["Jumbotron-MLGLogoImg"]}
        />
        <JumbotronButtons />
      </div>
    </section>
  );
};
