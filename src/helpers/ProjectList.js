import projCalc from "../assets/calculator.png";
import projCont from "../assets/contact.png";
import projMovie from "../assets/movie-search.jpg";
import projNotTo from "../assets/not-to-do.png";

export const ProjectList = [
  {
    name: "Prank Calculator",
    image: projCalc,
    skills: "HTML, CSS, JavaScript",
    shortDesc:
      "This project is a fun project, a prank calculator. The calculator works ...",
    desc: "This project is a fun project, a prank calculator. The calculator works correctly 90% of the time, the other 10% the calculator gives incorrect answers, allowing you to make your friends look like fools!",
    chrome: "https://dahalh.github.io/prank-calculator",
    git: "https://github.com/dahalh/prank-calculator",
  },
  {
    name: "Contact List",
    image: projCont,
    skills: "HTML, CSS, JavaScript, React",
    shortDesc:
      "This project is a contact list website integrated using a random API...",
    desc: "This project is a contact list website integrated using a random API. The contacts can be filtered by specifying gender and using the search bar.",
    chrome: "https://react-contact-list-omega.vercel.app/",
    git: "https://github.com/dahalh/react-contact-list",
  },
  {
    name: "Movie Search",
    image: projMovie,
    skills: "HTML, CSS, JavaScript, React",
    shortDesc:
      "This project is a movie search app created using the OMDB API...",
    desc: "This project is a movie search app created using the OMDB API. The website allows the user to search a movie and add it to their list as either their happy or lazy category. The user is able to filter the list by the categories, as well as choose the view of the list by grid or list.",
    chrome: "https://movie-list-p1ijkvpvq-dahalh.vercel.app/",
    git: "https://github.com/dahalh/movie-list",
  },
  {
    name: "Not To Do App",
    image: projNotTo,
    skills: "HTML, CSS, JavaScript, React",
    shortDesc:
      "This project is a time management tracker. You can enter tasks...",
    desc: "This project is a time management tracker. You can enter tasks and move them between good tasks and bad tasks, allowing you to see how much time you have saved and how much time you would have lost if you hadn't used the tracker.",
    chrome: "https://dahalh.github.io/time-management/",
    git: "https://github.com/dahalh/time-management",
  },
];
