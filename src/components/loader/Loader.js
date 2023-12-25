import React from 'react'
import styles from './Loader.module.scss';
import {createPortal} from 'react-dom';
import LoadingImg from "./loadingImg.gif"
 const Loader = () => {
  return createPortal(
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={LoadingImg} alt="loading" className={styles.loadingImg}/>
        </div>
        </div>,
        document.getElementById('loader')
  )
}

export default Loader