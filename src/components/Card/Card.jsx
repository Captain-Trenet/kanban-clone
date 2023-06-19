import Image from "next/image";
import styles from "./page.module.scss";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ todo, group, index, peopleImg }) => {
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          className={styles.container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={styles.cardTop}>
            <div
              style={{ backgroundColor: `${todo.bgColor}`, color: todo.color }}
              className={styles.status}
            >
              {todo.status}
            </div>
            <Image
              src={"/images/dots.png"}
              alt=""
              width={16}
              height={4}
              className={styles.dots}
            />
          </div>
          <h2 className={styles.header}>{todo.title}</h2>
          <p className={styles.desc}>{todo.desc}</p>
          {todo.image && (
            <div
              style={{ height: todo.height ? todo.height : "" }}
              className={styles.imgContainer}
            >
              <Image
                src={todo.image}
                alt=""
                fill={true}
                className={styles.img}
              />
            </div>
          )}
          {todo.images && (
            <div className={styles.imgContainer2}>
              <Image
                src={"/images/04.jpg"}
                alt=""
                width={131}
                height={80}
                className={styles.img}
              />
              <Image
                src={"/images/03.jpg"}
                alt=""
                width={131}
                height={80}
                className={styles.img}
              />
            </div>
          )}

          <div className={styles.bottom}>
            <Image
              src={peopleImg ? peopleImg : "/images/people3.png"}
              alt=""
              width={!peopleImg ? 63 : 44}
              height={24}
            />
            <div className={styles.bottomRight}>
              <div className={styles.info}>
                <Image
                  src={"/images/comment.png"}
                  alt=""
                  width={16}
                  height={16}
                />
                <div className={styles.text}>{todo.comments} comments</div>
              </div>
              <div className={styles.info}>
                <Image src={"/images/file.png"} alt="" width={16} height={16} />
                <div className={styles.text}>{todo.files} files</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
