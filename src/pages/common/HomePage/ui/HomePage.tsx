import React from "react";
import { useTitle } from "src/shared/lib/hooks/useTitle";
import metaJSON from "../config/meta.json";
import { HomePageMain } from "./HomePageMain";

export const HomePage = () => {
  useTitle(metaJSON.title);
  return (
    <div className="MLGPage MLGPage_solo">
      <HomePageMain />
    </div>
  );
};
