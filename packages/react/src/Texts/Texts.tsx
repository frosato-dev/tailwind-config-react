import "./Texts.css";

import * as React from "react";

import ComponentFactory from "../ComponentFactory";

interface ITextProps {
  tailwindClassName: string;
  value: string;
  className?: string;
  text?: string;
}

export function Text({
  tailwindClassName,
  value,
  className = "",
  text = "Integer posuere erat a ante venenatis dapibus posuere velit aliquet"
}: ITextProps) {
  return (
    <div className="Texts_text">
      <div className={`Texts_text_preview ${tailwindClassName} ${className}`}>
        {text}
      </div>
      <div className="Texts_text_description">
        <p className="Texts_text_name">{tailwindClassName}</p>
        <p className="Texts_text_value">{value}</p>
      </div>
    </div>
  );
}

interface ITextsProps {
  data: any;
  classNamePrefix: string;
  className?: string;
  text?: string;
}

function Texts({ data, classNamePrefix, className, text }: ITextsProps) {
  const texts = Object.keys(data).map(key => {
    const value = data[key];

    if (typeof value === "string") {
      return (
        <div key={`text_${key}`} className="Texts_row">
          <Text
            tailwindClassName={`${classNamePrefix}${key}`}
            value={data[key]}
            className={className}
            text={text}
          />
        </div>
      );
    }

    return (
      <div key={`text_${key}`} className="Texts_row">
        {Object.keys(value).map((subItem: any) => {
          return (
            <Text
              key={`text_${key}-${subItem}`}
              tailwindClassName={`${classNamePrefix}${key}-${subItem}`}
              value={value[subItem]}
              className={className}
              text={text}
            />
          );
        })}
      </div>
    );
  });

  return <div className="Texts">{texts}</div>;
}

const TAILWIND_CLASS_PREFIX_BY_ITEM = {
  "theme.fontFamilly": "font-",
  "theme.fontSize": "text-",
  "theme.fontWeight": "font-",
  "theme.letterSpacing": "tracking-",
  "theme.lineHeight": "leading-",
  "theme.textColor": "text-"
};

export default ComponentFactory(Texts, TAILWIND_CLASS_PREFIX_BY_ITEM);
