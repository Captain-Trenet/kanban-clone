import Image from "next/image";
import styles from "./page.module.scss";

const Navbar = () => {
  const images = [
    "/images/calendar.png",
    "/images/message-question.png",
    "/images/notification.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <Image
            src={"/images/logo.png"}
            alt=""
            width={24}
            height={24}
            className={styles.logo}
          />
          <h2 className={styles.name}>Project M.</h2>
        </div>
        <Image
          src={"/images/arrow-left.png"}
          alt=""
          width={26}
          height={20}
          className={styles.close}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.inputBox}>
          <Image
            src={"/images/search-normal.png"}
            alt=""
            width={22}
            height={22}
            className={styles.search}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Search for anything..."
          />
        </div>
        <div className={styles.info}>
          <div className={styles.icons}>
            {images.map((img) => (
              <Image
                key={img}
                src={img}
                alt=""
                width={24}
                height={24}
                className={styles.logo}
              />
            ))}
          </div>
          <div className={styles.userinfo}>
            <div className={styles.userDetails}>
              <div className={styles.username}>Anima Agrawal</div>
              <div className={styles.address}>U.P, India</div>
            </div>
            <div className={styles.userImgContainer}>
              <Image
                src={"/images/image-1.png"}
                alt=""
                width={38}
                height={38}
                className={styles.userImg}
              />
              <Image
                src={"/images/arrow-down.png"}
                alt=""
                width={18}
                height={18}
                className={styles.arrowDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
