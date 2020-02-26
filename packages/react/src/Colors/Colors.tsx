import './Colors.css';

import * as React from 'react';

import ComponentFactory from '../ComponentFactory';

interface IColorProps {
  color: string;
  tailwindClassName: string;
  className?: string;
}

export function Color({ color, tailwindClassName, className }: IColorProps) {
  return (
    <div className={`Colors_color ${className}`}>
      <div
        className="Colors_color_preview"
        style={{ backgroundColor: color }}
      />
      <p className="Colors_color_name">{tailwindClassName}</p>
      <p className="Colors_color_value">{color}</p>
    </div>
  );
}

interface IColorsProps {
  data: any;
  classNamePrefix: string;
  className?: string;
}

function Colors({ data, classNamePrefix, className }: IColorsProps) {
  const colors = Object.keys(data).map((item: any) => {
    const value = data[item];

    if (typeof value === "string") {
      return (
        <div key={`color_${item}`} className="Colors_row">
          <Color
            className={className}
            tailwindClassName={`${classNamePrefix}${item}`}
            color={value}
          />
        </div>
      );
    }

    return (
      <div key={`color_${item}`} className="Colors_row">
        {Object.keys(value).map((subItem: any) => (
          <Color
            key={`color_${item}-${subItem}`}
            className={className}
            tailwindClassName={`${classNamePrefix}${item}-${subItem}`}
            color={value[subItem]}
          />
        ))}
      </div>
    );
  });

  return <div className="Colors">{colors}</div>;
}

const TAILWIND_CLASS_PREFIX_BY_ITEM = {
  "theme.colors": "",
  "theme.backgroundColor": "bg-"
};
export default ComponentFactory(Colors, TAILWIND_CLASS_PREFIX_BY_ITEM);
