/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import {useState, useEffect} from "react";
import styles from './Neo.module.css'
import Image from 'next/image'
// @ts-ignore
import Asteroid from '../../public/assets/asteroids/1.png'
import {useStore} from "../../store/zustore";

const Neo = () => {
  const [neo, setNeo] = useStore(state => [state.neo, state.setNeo]);
  const [choosenNeo] = useStore(state => [state.choosenNeo]);
  useEffect(() => {
    // USE ZUSTAND TO STORE THE NEO OBJECT, AND THEN USE IT IN THE COMPONENT AT PAGE LEVEL SO THAT IT CAN BE SHARED ACROSS COMPONENTS (CARDS FOR EXAMPLE)
    const fetchData = async () => {
      const res = await fetch('/api/neo/' + choosenNeo);
      const data = await res.json();
      setNeo(data.neo);
    };
    fetchData();
  }, []);

  if (neo.length === 0) {
    return <div>Fetching data from <i>CNEOS Sentry System</i>...</div>;
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{neo['summary']['des']}</h1>
          </div>
          <div className={styles.right}>
            <div className={styles.previewBtn}>
              Details
            </div>
          </div>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.toolbarItem}>
            <span>Pause</span>
          </div>
          <div className={styles.toolbarItem}>
            <span>Reset</span>
          </div>
          <div className={styles.toolbarItem}>
            <span>Wireframe</span>
          </div>
          <div className={styles.toolbarItem}>
            <span>Infrared</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>E(Mt)</span>
            <span className={styles.detailsValue}>{neo['summary']['energy']}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>M(kg)</span>
            <span className={styles.detailsValue}>{neo['summary']['mass']}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>D(meter)</span>
            <span className={styles.detailsValue}>{Math.floor(neo['summary']['diameter']*100000)/100}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Designation</span>
            <span className={styles.detailsValue}>{neo['summary']['des']}</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={Asteroid}
            alt="Neo"
          />
        </div>
      </div>
    );
  }
}

export default Neo