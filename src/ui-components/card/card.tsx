import React, { PropsWithChildren, ReactElement } from "react"

import classes from './card.module.css';

interface CardInput extends PropsWithChildren{
  readonly isDark?: boolean;
}

const Card: React.FunctionComponent<CardInput> = (props): ReactElement => {
  return (
    <>
      <div className={`${classes.card} ${props.isDark ? `${classes['card--dark']}` : ''}`}>
        {props.children}
      </div>
    </>
  )
};

export default Card;
