import { icon, linkedin, github, transicon, ispy  } from "../assets";

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
  {
    id: "contact",
    title: "CONTACT",
  },
];

export const about = [
  {
    id: "about-1",
    icon: icon,
    title: "I’m Bubly!",
    content:
      "Rosanne drew, designed, and animated me herself. Nice to meet you!",
  },
  // {
  //   id: "about-2",
  //   icon: shield,
  //   title: "Club/Activity",
  //   content:
  //     "Description here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  // },
  // {
  //   id: "about-3",
  //   icon: send,
  //   title: "Club/Activity",
  //   content:
  //     "Description here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  // },
];

export const project = [
  {
    id: "project-1",
    name: "iSpy",
    content:
      "A web application that recognizes faces with a live camera feed with up to a 95% accuracy rate. Written with Python using OpenCV, and Tensorflow libraries. Frontend is made with vanilla Javascript and HTML/CSS. ",
    // title: "Languages and Tools",
    img: ispy,
  },
  {
    id: "project-2",
    content:
      "A full-stack web application recipe making AI where the user takes a picture of their open fridge and uploads it to the website. The machine learning AI then automatically detects what items are in the fridge and outputs them onto an ingredient list. Using this data, another AI produces all possible recipes that can be made with the ingredients.",
    name: "Fridge Smart",
    // title: "Languages and Tools",
    img: icon,
  },
  {
    id: "project-3",
    content:
      "Given a large set of CSV medical documents, I used NLTK libraries to tokenize and stem and train large data sets. Scripts were written in Python to automatically scrape and update medical documents, classifying medical transcripts to specialties, using Pandas and NumPy libraries.",
    name: "CxC Data Science Challenge",
    // title: "Languages and Tools",
    img: icon,
  },
  {
    id: "project-4",
    content:
      "A web application built using React.js that visualizes and compares different sorting algorithms, such as insertion sort, merge sort, bubble sort, and quick sort. ",
    name: "Sorting Algorithm Visualizer",
    // title: "Languages and Tools",
    img: icon,
  },
  {
    id: "project-5",
    content:
      "A sudoku solver engine that solves a sudoku board using recursion and backtracking algorithms, coded in Python.",
    name: "Sudoku Solver",
    // title: "Languages and Tools",
    img: icon,
  },
  {
    id: "project-6",
    content:
      "This is my website! Check out the source code here. Built using React.js.",
    name: "Personal Portfolio",
    // title: "Languages and Tools",
    img: icon,
  },
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
    mylogo: transicon,
  },
  {
    id: "client-2",
    mylogo: transicon,
  },
  {
    id: "client-3",
    mylogo: transicon,
  },
  {
    id: "client-4",
    mylogo: transicon,
  },
];