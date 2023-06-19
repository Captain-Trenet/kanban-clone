"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { links, projects } from "@/utils/util";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const getTitle = (title) => {
    let temp = title.split("/");
    return temp[temp.length - 1].replace("%20", " ");
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <Link className={styles.el} href={link.url} key={link.id}>
              <Image
                src={link.icon}
                alt=""
                width={24}
                height={24}
                className={styles.logo}
              />
              <div className={styles.linkName}>{link.title}</div>
            </Link>
          );
        })}
      </div>

      <div className={styles.projects}>
        <div>
          <div className={styles.header}>
            <div className={styles.headerTitle}>my projects</div>
            <Image
              src={"/images/add-square.png"}
              alt=""
              width={18}
              height={18}
              className={styles.plus}
            />
          </div>
          <div className={styles.projectLinks}>
            {projects.map((link) => {
              return (
                <Link
                  className={`${styles.projectItem} ${
                    getTitle(pathname) === link.title &&
                    styles.activeProjectLink
                  }`}
                  href={`/projects/${link.title}`}
                  key={link.id}
                >
                  <div
                    style={{ backgroundColor: `${link.bgColor}` }}
                    className={styles.circle}
                  ></div>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectName}>{link.title}</div>
                    {getTitle(pathname) === link.title && (
                      <Image
                        src={"/images/dots.png"}
                        alt=""
                        width={16}
                        height={4}
                        className={`${styles.dots} + "" ${styles.dotsVisible}`}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.infoContainer}>
            <div className={styles.light}>
              <Image
                src={"/images/light-glow.png"}
                alt=""
                width={100}
                height={100}
                className={styles.lightImg}
              />
            </div>
            <div className={styles.lightHeader}>Thoughts Time</div>
            <p className={styles.lightdesc}>
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.lightInput}
                placeholder="Write a message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
