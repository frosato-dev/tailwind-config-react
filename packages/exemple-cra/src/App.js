import "@tailwind-react-showcase/react/dist/index.css";

import {
  Box,
  Boxes,
  Color,
  Colors,
  Texts
} from "@tailwind-react-showcase/react";
import React from "react";

import config from "./tailwind.config.js";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white text-center bg-gray-800 py-10">
        Tailwind Showcase
      </h1>
      <section>
        <h2 className="text-xl font-semibold text-black text-center bg-gray-500 py-10 mb-10">
          Colors
        </h2>
        <div className="container mx-auto">
          <Colors config={config} path={"theme.colors"} />
          <Colors config={config} path={"theme.backgroundColor"} />
          <Color tailwindClassName="manually-added" color="#CCC" />
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-black text-center bg-gray-500 py-10 my-10">
          Texts
        </h2>
        <div className="container mx-auto">
          <Texts config={config} path={"theme.fontFamilly"} />
          <Texts
            config={config}
            path={"theme.fontSize"}
            text="Pharetra Cursus Ullamcorper Sollicitudin"
          />
          <Texts
            config={config}
            path={"theme.lineHeight"}
            className={"text-lg"}
            text="Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum."
          />
          <Texts
            config={config}
            path={"theme.textColor"}
            className={"text-lg"}
            text="Pharetra Cursus"
          />
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-black text-center bg-gray-500 py-10 my-10">
          Boxes
        </h2>
        <div className="container mx-auto">
          <Boxes config={config} path={"theme.boxShadow"} />
          <Boxes config={config} path={"theme.borderWidth"} />
          <Boxes
            config={config}
            path={"theme.borderRadius"}
            className={"bg-gray-800"}
          />
          <Boxes
            config={config}
            path={"theme.opacity"}
            className={"bg-gray-600"}
          />
          <Boxes
            config={config}
            path={"theme.opacity"}
            className={"bg-gray-600"}
          />
          <Box
            tailwindClassName="an-imaginary-class-name"
            className={"bg-gray-600"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
