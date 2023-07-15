import React, { PropsWithChildren, ReactElement } from "react"

import classes from './spinner.module.css';

const Spinner: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {
  return (
    <>
      <div className={classes['lds-ring']}><div></div><div></div><div></div><div></div></div>
    </>
  )
};

export default Spinner;
