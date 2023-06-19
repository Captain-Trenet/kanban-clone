"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import Card from "@/components/Card/Card";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { data1, data2, data3, onDragEn } from "@/utils/util";

const Project = ({ params }) => {
  const Top = ({ todos, bgColor, add, status }) => {
    return (
      <>
        <div className={styles.itemTop}>
          <div className={styles.itemTopLeft}>
            <div
              style={{ backgroundColor: bgColor }}
              className={styles.circle}
            ></div>
            <div className={styles.task}>{status}</div>
            <div className={styles.counter}>
              <span>{todos}</span>
            </div>
          </div>
          {add && (
            <Image src={"/images/big-plus.png"} alt="" width={25} height={25} />
          )}
        </div>
        <div style={{ border: `3px solid ${bgColor}` }} className={styles.line}>
          &nbsp;
        </div>
      </>
    );
  };

  let [list1, setList1] = useState(data1);
  let [list2, setList2] = useState(data2);
  let [list3, setList3] = useState(data3);

  const projectName = params.id ? params.id.replace("%20", " ") : "Mobile App";

  return (
    <DragDropContext
      onDragEnd={(result) =>
        onDragEn(result, list1, list2, list3, setList1, setList2, setList3)
      }
    >
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <h1 className={styles.header}>{projectName}</h1>
            <Image
              src={"/images/arrow-square-up.png"}
              alt=""
              width={30}
              height={30}
            />
            <Image src={"/images/link.png"} alt="" width={30} height={30} />
          </div>
          <div className={styles.topbarRight}>
            <Image
              src={"/images/add-square-blue.png"}
              alt=""
              width={18}
              height={18}
            />
            <div className={styles.header}>Invite</div>
            <Image
              src={"/images/people.png"}
              alt=""
              width={158}
              height={38}
              className={styles.people}
            />
          </div>
        </div>

        <div className={styles.buttonBar}>
          <div className={styles.buttonBarLeft}>
            <ButtonIcon
              icon1={"/images/filter.png"}
              icon2={"/images/arrow-down2.png"}
              text={"Filter"}
            />
            <ButtonIcon
              icon1={"/images/calendar2.png"}
              icon2={"/images/arrow-down2.png"}
              text={"Today"}
            />
          </div>
          <div className={styles.buttonBarRight}>
            <ButtonIcon icon1={"/images/profile-2user.png"} text={"Share"} />
            <div className={styles.line}></div>
            <Image src={"/images/pause.png"} alt="" width={43} height={43} />
            <Image
              src={"/images/apps.png"}
              alt=""
              width={22}
              height={22}
              className={styles.appsIcon}
            />
          </div>
        </div>

        {/* 1 */}
        <div className={styles.todoContainer}>
          <div className={styles.item}>
            <Droppable droppableId="TodoList">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.cards}
                >
                  <Top
                    todos={4}
                    bgColor={"#5030E5"}
                    add={true}
                    status="To Do"
                  />
                  {list1 &&
                    list1.map((todo, index) => (
                      <Card index={index} group={0} key={todo.id} todo={todo} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className={styles.item}>
            <Droppable droppableId="TodoList2">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.cards}
                >
                  <Top todos={3} bgColor={"#FFA500"} status="On Progress" />
                  {list2 &&
                    list2.map((todo, index) => (
                      <Card index={index} key={todo.id} group={1} todo={todo} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className={styles.item}>
            <Droppable droppableId="TodoList3">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.cards}
                >
                  <Top todos={2} bgColor={"#8BC48A"} status="Done" />
                  {list3 &&
                    list3.map((todo, index) => (
                      <Card
                        index={index}
                        key={todo.id}
                        group={2}
                        todo={todo}
                        peopleImg={"/images/people2.png"}
                      />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Project;
