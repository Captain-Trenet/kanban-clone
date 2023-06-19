export const onDragEn = (
  result,
  list1,
  list2,
  list3,
  setList1,
  setList2,
  setList3
) => {
  const { destination, source } = result;

  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
  let temp1 = list1;
  let temp2 = list2;
  let temp3 = list3;
  if (
    source.droppableId === "TodoList" &&
    destination.droppableId === "TodoList2"
  ) {
    let add = temp1[source.index];
    temp1.splice(source.index, 1);
    temp2.splice(destination.index, 0, add);
  }

  if (
    source.droppableId === "TodoList" &&
    destination.droppableId === "TodoList3"
  ) {
    let add = temp1[source.index];
    temp1.splice(source.index, 1);
    temp3.splice(destination.index, 0, add);
  }

  if (
    source.droppableId === "TodoList2" &&
    destination.droppableId === "TodoList"
  ) {
    let add = temp2[source.index];
    console.log("add: ", add);
    temp2.splice(source.index, 1);
    temp1.splice(destination.index, 0, add);
    console.log(temp1);
  }
  if (
    source.droppableId === "TodoList2" &&
    destination.droppableId === "TodoList3"
  ) {
    let add = temp2[source.index];
    temp2.splice(source.index, 1);
    temp3.splice(destination.index, 0, add);
  }

  if (
    source.droppableId === "TodoList3" &&
    destination.droppableId === "TodoList"
  ) {
    let add = temp3[source.index];
    temp3.splice(source.index, 1);
    temp1.splice(destination.index, 0, add);
  }
  if (
    source.droppableId === "TodoList3" &&
    destination.droppableId === "TodoList2"
  ) {
    let add = temp3[source.index];
    temp3.splice(source.index, 1);
    temp2.splice(destination.index, 0, add);
  }
  setList1(temp1);
  setList2(temp2);
  setList3(temp3);
};

export const data1 = [
  {
    id: 1,
    title: "Brainstorming",
    desc: "Brainstorming brings team members' diverse experience into play. ",
    invites: 3,
    comments: 12,
    files: 0,
    status: "Low",
    bgColor: "#dfa87433",
    color: "#D58D49",
  },
  {
    id: 2,
    title: "Research",
    desc: "User research helps you to create an optimal product for users.",
    invites: 3,
    comments: 10,
    files: 3,
    status: "High",
    bgColor: "#d8727d1a",
    color: "#D8727D",
  },
  {
    id: 3,
    title: "Wireframes",
    desc: "Low fidelity wireframes include the most basic content and visuals.",
    invites: 3,
    comments: 13,
    files: 12,
    status: "High",
    bgColor: "#d8727d1a",
    color: "#D8727D",
  },
];
export const data2 = [
  {
    id: 4,
    title: "Onboarding Illustrations",
    invites: 3,
    comments: 14,
    files: 15,
    status: "Low",
    bgColor: "#dfa87433",
    color: "#D58D49",
    image: "/images/01.png",
  },
  {
    id: 5,
    title: "Moodboard",
    invites: 1,
    images: ["/images/02.png", "/images/03.png"],
    comments: 9,
    files: 10,
    status: "Low",
    bgColor: "#d8727d1a",
    color: "#D8727D",
  },
  {
    id: 6,
    title: "Steady Steak",
    desc: "Low fidelity wireframes include the most basic content and visuals.",
    invites: 3,
    comments: 7,
    files: 12,
    status: "High",
    bgColor: "#d8727d1a",
    color: "#D8727D",
  },
];
export const data3 = [
  {
    id: 7,
    title: "Mobile App Design",
    invites: 3,
    comments: 12,
    files: 15,
    status: "Completed",
    bgColor: "#83c29d33",
    color: "#68B266",
    image: "/images/02.jpg",
    height: 274,
  },
  {
    id: 8,
    title: "Design System",
    invites: 1,
    comments: 9,
    files: 10,
    status: "Completed",
    bgColor: "#83c29d33",
    color: "#68B266",
  },
];


export const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
      icon: "/images/category.png",
    },
    {
      id: 2,
      title: "Messages",
      url: "/messages",
      icon: "/images/message.png",
    },
    {
      id: 3,
      title: "Tasks",
      url: "/tasks",
      icon: "/images/task-square.png",
    },
    {
      id: 4,
      title: "Members",
      url: "/members",
      icon: "/images/profile-2user.png",
    },
    {
      id: 5,
      title: "Settings",
      url: "/settings",
      icon: "/images/setting-2.png",
    },
  ];
  export const projects = [
    {
      id: 1,
      title: "Mobile App",
      url: "/projects",
      bgColor: "#7AC555",
      active: true,
    },
    {
      id: 2,
      title: "Website Redesign",
      url: "/",
      bgColor: "#FFA500",
      active: false,
    },
    {
      id: 3,
      title: "Design System",
      url: "/",
      bgColor: "#E4CCFD",
      active: false,
    },
    {
      id: 4,
      title: "Wireframes",
      url: "/",
      bgColor: "#76A5EA",
      active: false,
    },
  ];