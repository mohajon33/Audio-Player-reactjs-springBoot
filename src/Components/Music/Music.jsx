import React from "react";
import styles from "./Music.module.css";
import icons8_musical from "../../assets/images/icons8-musical-96 (2).png";

const Music = () => {
  return (
    <div class={styles.music}>
      <div class={styles.music_block}>
        <img src={icons8_musical} alt="musical icon" />
      </div>
      <p>Dekhechi Rupsagore | Nabani Das | Aritra Banerjee</p>
    </div>
  );
};

export default Music;
