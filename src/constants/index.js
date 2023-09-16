import { icon, linkedin, github, transicon, ispy, fridges, tetris, } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  {
    id: "about",
    title: "ABOUT",
  },  
  {
    id: "projects",
    title: "MY WORK",
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
];

export const project = [
  {
    id: "project-1",
    name: "iSpy",
    content:
      "Facial recognition web application.",
    title: "Python,  OpenCV, Tensorflow, Javascript",
    img: ispy,
    link: "https://github.com/roskzhu/iSpy",
  },
  {
    id: "project-3",
    content:
      "Tetris variation, expanded for 2-player competition.",
    name: "Tetris",
    title: "C++",
    img: tetris,
    link: "https://github.com/roskzhu/Biquadris",
  },
  {
    id: "project-2",
    content:
      "Full-stack fridge scanner and recipe making AI.",
    name: "Fridge Smart",
    title: "Javascript, YOLOv8",
    img: fridges,
    link: "https://github.com/roskzhu/FridgeSmart",
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