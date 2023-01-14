import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home (props) {
  const navigate = useNavigate()
  return (
    <>
    <div className={styles.home}>
      <div className={styles.homecontent}>
        Homepage
      </div>
    </div>
    </>
  );
}
