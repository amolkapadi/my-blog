import React, {useState} from 'react'
// import postimg1 from '../assets/image/react/1.png'
export default function Reactpage() {
  const [displayCount, setDisplayCount] = useState(12);
  const increment = 12;
  const htmlcssImg = [
    {
      id: 1,
      name: "how to build a react simple chatbot with react",
      img: "../assets/image/react/01.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=KLyVDydXzyU&list=PLZdBNNxWmMHjR0ES35sh076zuMrxLylqx",
    },
    {
      id: 2,
      name: "how to build a react simple chatbot with react",
      img: "../assets/image/react/02.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=KLyVDydXzyU&list=PLZdBNNxWmMHjR0ES35sh076zuMrxLylqx",
    },
    {
      id: 3,
      name: "Simple way to create a stopwatch in react js | Start, Stop, Restart onClick button",
      img: "../assets/image/react/03.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=CBrc2-RNprI",
    },
    {
      id: 4,
      name: "Mind-Blowing Secrets of the React Digital Clock",
      img: "../assets/image/react/04.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=FEpI3EfloFY",
    },
    {
      id: 5,
      name: "React slick Slider In Hindi Step By Step | responsive, autoplay ,settings,carousel..",
      img: "../assets/image/react/05.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=8l8XzMeU5cI",
    },
    {
      id: 6,
      name: "Search Fruit App React App Tutorial: How to Add a Search Box and List of Recipes!",
      img: "../assets/image/react/06.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=R8nA6MkwWFI",
    },
    {
      id: 7,
      name: "Complete Responsive Hospital Blog Card Design Using HTML CSS Bootstrap 5 || Step By Step",
      img: "../assets/image/react/07.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=-P_X9NGTIOk&list=PLZdBNNxWmMHid5v8RmlQfwFSMp5hF8nkv&index=19",
    },
    {
      id: 8,
      name: "Build A Currency Converter In React",
      img: "../assets/image/react/08.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=-P_X9NGTIOk&list=PLZdBNNxWmMHid5v8RmlQfwFSMp5hF8nkv&index=19",
    },
    {
      id: 9,
      name: "Boost React JS Development: Discovering the Input Range Price Filter",
      img: "../assets/image/react/09.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=4JtpcNQGEt0&list=PLZdBNNxWmMHid5v8RmlQfwFSMp5hF8nkv&index=20",
    },
    {
      id: 10,
      name: "Random Jokes Generator React App | React Js Hooks Project",
      img: "../assets/image/react/010.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=oK_yzwCBkUA&list=PLZdBNNxWmMHid5v8RmlQfwFSMp5hF8nkv&index=4",
    },
    {
      id: 11,
      name: "Filter Product List by Category using React Select Library in React Js",
      img: "../assets/image/react/025.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=QXWMXWkaVeI&list=PLZdBNNxWmMHid5v8RmlQfwFSMp5hF8nkv&index=16",
    },
    {
      id: 12,
      name: "Text Converter React App | easily convert text bet lower, UPPER, Sentence, Capitalized , Reverse",
      img: "../assets/image/react/012.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=qKETNWZXtTI&list=PLZdBNNxWmMHid5v8RmlQfwFSMp5hF8nkv&index=3",
    },
    {
      id: 13,
      name: "Material UI Responsive Card Design | Material UI with React JS | React JS Responsive Card",
      img: "../assets/image/react/013.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=lDoqSOtolag&list=PLZdBNNxWmMHhmK-S_BD2BiCl8k4Tk5jOw",
    },
    {
      id: 14,
      name: "Material UI Responsive Card Design | Material UI with React JS | React JS Responsive Card",
      img: "../assets/image/react/014.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=lDoqSOtolag&list=PLZdBNNxWmMHhmK-S_BD2BiCl8k4Tk5jOw",
    },
    {
      id: 15,
      name: "React JS swiper slider step by step with responsive for mobile devices",
      img: "../assets/image/react/015.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=cCPFLmLYIWc&t=17s",
    },
    {
      id: 16,
      name: "Material UI Admin Dashboard Design with Routing using React Router Dom | Download Free",
      img: "../assets/image/react/016.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=pxQGu1Hf9XU",
    },
    {
      id: 17,
      name: "Material UI card background Color",
      img: "../assets/image/react/017.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=9kBS4_rI0vQ&list=PLZdBNNxWmMHhmK-S_BD2BiCl8k4Tk5jOw&index=3",
    },
    {
      id: 18,
      name: "material ui responsive card react js | material ui responsive card react js ,material ui card react",
      img: "../assets/image/react/018.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=ZD27MusxE1g&list=PLZdBNNxWmMHhmK-S_BD2BiCl8k4Tk5jOw&index=2",
    },
    {
      id: 19,
      name: "material ui responsive card react js | material ui responsive card react js ,material ui card react",
      img: "../assets/image/react/019.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=ZD27MusxE1g&list=PLZdBNNxWmMHhmK-S_BD2BiCl8k4Tk5jOw&index=2",
    },
    {
      id: 20,
      name: "React CRUD Application in Hindi 2023 | Latest React Router Dom |use of react toastify ,JSON server..",
      img: "../assets/image/react/020.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=q0AlxMRUe8U&t=1935s",
    },
    {
      id: 21,
      name: "What's New in React Router Dom 6.8.2? Find Out Now! Learn React Router Dom 6.8.2 in Hindi",
      img: "../assets/image/react/021.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=GySIL93oyKo&t=3s",
    },
    {
      id: 22,
      name: "Optimizing User Engagement: One-Time Pop-ups in React using localStorage and Bootstrap 5 Modal",
      img: "../assets/image/react/022.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=p_xHNMWe4mY",
    },
    {
      id: 23,
      name: "React.js Button Click Progress Bar Animation Tutorial",
      img: "../assets/image/react/023.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=3Vn5FoJR4uI",
    },
    {
      id: 24,
      name: "Unlocking the Secrets of Designing a Stepper Form in ReactJS",
      img: "../assets/image/react/024.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=TC702RsVUJA",
    },

  ];
  const handleViewMore = () => {
    setDisplayCount(displayCount + increment);
  };
  return (
    <>

  
    <div className='container-fluid'>
    <div className='centered-content w-50'>
        <h1 className='main-title'>React Js Code Examples</h1>
        <p className='main-subtitle'>Curated lists of Free React code examples including buttons, loaders, Filter Product, Search Product modal windows, menus, and text effects.</p>
    </div>
  </div>
  
  <div className="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {htmlcssImg.slice(0, displayCount).map((item) => (
            <div className="col" key={item.id}>
              <div className="card p-2">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body mt-3 ps-3">
                  <h5 className="card-title">
                    {" "}
                    {item.name.length > 60
                      ? item.name.substring(0, 60) + "..."
                      : item.name}
                  </h5>
                  <p className="card-text">
                    <span className="fw-bold">Author:</span> {item.Author}
                  </p>
                
                  <p className="card-text">
                    <span className="fw-bold">Watch Full Video:</span>{" "}
                    {item.watchLink ? (
                      <a
                        href={item.watchLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="badge text-bg-primary">
                          Click Here
                        </span>
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayCount < htmlcssImg.length && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
  </>
  )
}
