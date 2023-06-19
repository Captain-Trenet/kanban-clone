import Image from "next/image";
import styles from "./page.module.scss";

const ButtonIcon = ({ icon1, text, icon2 }) => {
  return (
    <button className={styles.button}>
      <Image src={icon1} alt="" width={16} height={16} />
      <span className={styles.text}>{text}</span>
      {icon2 && <Image style={{marginLeft: "5px"}} src={icon2} alt="" width={16} height={16} />}
    </button>
  );
};

export default ButtonIcon;
