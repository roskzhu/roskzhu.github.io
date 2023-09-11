import { icon, linkedin, github, transicon, ispy, fridges, cxc, donuticon  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },
    {
    id: "about",
    title: "ABOUT",
  },
  // {
  //   id: "contact",
  //   title: "CONTACT",
  // },
];

export const about = [
  {
    id: "about-1",
    icon: icon,
    title: "I’m Bubly!",
    content:
      "Rosanne drew, designed, and animated me herself. Nice to meet you!",
  },
];

export const project = [
  {
    id: "project-1",
    name: "iSpy",
    content:
      "Facial recognition web application.",
    // title: "Languages and Tools",
    img: ispy,
  },
  {
    id: "project-3",
    content:
      "Tetris variation, expanded for 2-player competition.",
    name: "Tetris",
    // title: "Languages and Tools",
    img: cxc,
  },
  {
    id: "project-2",
    content:
      "Facial recognition web application.",
    name: "Fridge Smart",
    // title: "Languages and Tools",
    img: fridges,
  },
  // {
  //   id: "project-4",
  //   content:
  //     "A web application built using React.js that visualizes and compares different sorting algorithms, such as insertion sort, merge sort, bubble sort, and quick sort. ",
  //   name: "Sorting Algorithm Visualizer",
  //   // title: "Languages and Tools",
  //   img: sort,
  // },
  // {
  //   id: "project-5",
  //   content:
  //     "A sudoku solver engine that solves a sudoku board using recursion and backtracking algorithms, coded in Python.",
  //   name: "Sudoku Solver",
  //   // title: "Languages and Tools",
  //   img: sudoku,
  // },
  // {
  //   id: "project-6",
  //   content:
  //     "This is my website! Check out the source code here. Built using React.js.",
  //   name: "Personal Portfolio",
  //   // title: "Languages and Tools",
  //   img: portfolio,
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: github,
    link: "https://github.com/roskzhu",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/in/rosanne-zhu/",
  },
];

export const projects = [
  {
    id: "client-1",
    donuticon: transicon,
  },
  {
    id: "client-2",
    donuticon: transicon,
  },
  {
    id: "client-3",
    donuticon: transicon,
  },
  {
    id: "client-4",
    donuticon: transicon,
  },
];