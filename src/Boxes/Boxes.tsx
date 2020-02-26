import './Boxes.css';

import * as React from 'react';

import ComponentFactory from '../ComponentFactory';

interface IBoxProps {
  tailwindClassName: string;
  className?: string;
}

export function Box({ tailwindClassName, className = "" }: IBoxProps) {
  return (
    <div className="Boxes_box">
      <div className={`Boxes_box_preview ${className} ${tailwindClassName}`} />
      <p className="Boxes_box_name">{tailwindClassName}</p>
    </div>
  );
}

interface IBoxesProps {
  data: any;
  classNamePrefix: string;
  className?: string;
}

function Boxes(props: IBoxesProps) {
  const { data, classNamePrefix, className } = props;

  const boxes = Object.keys(data).map(key => (
    <div key={`box_${key}`} className="Boxes_row">
      <Box
        tailwindClassName={`${classNamePrefix}${key}`}
        className={className}
      />
    </div>
  ));

  return <div className="Boxes">{boxes}</div>;
}

const TAILWIND_CLASS_PREFIX_BY_ITEM = {
  "theme.boxShadow": "shadow-",
  "theme.borderWidth": "border-",
  "theme.borderRadius": "rounded-",
  "theme.opacity": "opacity-"
};

export default ComponentFactory(Boxes, TAILWIND_CLASS_PREFIX_BY_ITEM);
