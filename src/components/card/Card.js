import React from 'react'
import styles from './Card.css'
const Card = ({children,cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass}`}>{children}</div>
  )
}

export default Card;