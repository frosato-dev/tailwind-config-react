import * as React from 'react';

const lodash = require("lodash");

export interface IProps {
  config: {
    [key: string]: any;
  };
  path: string;
}

export default (Component: any, tailwindClassPrefix: IMap<string>) => ({
  config,
  path,
  ...props
}: IProps) => {
  let data = lodash.get(config, path, {});
  const classNamePrefix = tailwindClassPrefix[path];

  if (typeof data === "function") {
    const getValues = (key: string) => lodash.get(config, `theme.${key}`, {});
    data = data(getValues);
  }

  return <Component classNamePrefix={classNamePrefix} data={data} {...props} />;
};
