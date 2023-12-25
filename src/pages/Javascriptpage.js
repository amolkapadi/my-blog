import React, {useState} from 'react'

export default function Javascriptpage() {
  const [displayCount, setDisplayCount] = useState(12);
  const increment = 12;
  const htmlcssImg = [
    {
      id: 1,
      name: "Currency Converter USD to INR with html CSS and Javascript",
      img: "../assets/image/javascript/01.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=JKrEGzwsank",
    },
    {
      id: 2,
      name: "Build OTP-Verification UI Design | OTP Code Verification Form in HTML CSS & JavaScript",
      img: "../assets/image/javascript/02.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=dZOQ9ZpgH6A",
    },
    {
      id: 3,
      name: "toUpperCase() method converts a string to uppercase letters using Javascript",
      img: "../assets/image/javascript/03.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=M-Qah1ezwrU",
    },
    {
      id: 4,
      name: "Reveal Website Elements On Scroll | On Page Scroll Down - Using HTML, CSS & Javascript",
      img: "../assets/image/javascript/04.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=uua91GUjeI8",
    },
    {
      id: 5,
      name: "How To Make Website With Animation | Moving Car Using CSS Animation",
      img: "../assets/image/javascript/05.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=UbwXxr18SyQ",
    },
    {
      id: 6,
      name: "Show Modal on Page Load Bootstrap 5 using Javascript onload event",
      img: "../assets/image/javascript/06.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=VQAePPoBi2o",
    },
    {
      id: 7,
      name: "Swiper - The Most Modern Mobile Touch Slider | Beautiful card slider Responsive for mobile Device",
      img: "../assets/image/javascript/07.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=878Fb3OqXeI",
    },
    {
      id: 8,
      name: "3D Image Rotating slider using Jquery | Jquery Plugin step by step",
      img: "../assets/image/javascript/08.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=TjtVOazXqP8&t=31s",
    },
    {
      id: 9,
      name: "Ecomm filter product page | Isotope Filter & sort magical layouts | Step by Step",
      img: "../assets/image/javascript/09.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=w7sIPgA1VOo",
    },
    {
      id: 10,
      name: "particles js plugin | JavaScript library for creating particles | JS Plugins you will love 😍",
      img: "../assets/image/javascript/010.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://youtube.com/watch?v=8KlHgkSOGuc",
    },
    {
      id: 11,
      name: "sketch.js plugin |Sketch.js effects | JS Plugins you will love",
      img: "../assets/image/javascript/011.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=Re4Y8qLCcAA",
    },
    {
      id: 12,
      name: "How To Create Touch Responsive Slider | Step by Step | JS Plugins you will love",
      img: "../assets/image/javascript/012.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=PZ7ZRuYe9E8",
    },
    {
      id: 13,
      name: "Owl Carousel Plugin | create a beautiful responsive carousel slider | JS Plugins you will love 😍",
      img: "../assets/image/javascript/013.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=RpqIgCEWlWQ&t=204s",
    },
    {
      id: 14,
      name: "JavaScript Animated Typing with Typed.js | JS Plugins you will love",
      img: "../assets/image/javascript/014.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=7dcRPSWL6Sk&list=PLZdBNNxWmMHhqo-CHHHroOHSDeUYKwM_C&index=3",
    },
    {
      id: 15,
      name: "Vanilla-tilt.js Plugin | A smooth 3D tilt javascript library | JS Plugins you will love",
      img: "../assets/image/javascript/015.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=crY50HVG4ZQ&list=PLZdBNNxWmMHhqo-CHHHroOHSDeUYKwM_C&index=2",
    },
    {
      id: 16,
      name: "AOS Animation JS Plugins | Scroll On page | JS Plugins you will love",
      img: "../assets/image/javascript/016.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=ECD52fW6W8c&list=PLZdBNNxWmMHhqo-CHHHroOHSDeUYKwM_C&index=1",
    },
    {
      id: 17,
      name: "Simple login system Javascript for beginners | mini project",
      img: "../assets/image/javascript/017.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=u4e1i-Qtk7k&list=PLZdBNNxWmMHh4T2IL6IT_5oe8aBSxoMPE&index=5",
    },
    {
      id: 18,
      name: "Signup and Login System using JavaScript | Login and Registration Form in HTML CSS & JavaScript",
      img: "../assets/image/javascript/018.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=gOkRo_Z09Iw&list=PLZdBNNxWmMHh4T2IL6IT_5oe8aBSxoMPE&index=7",
    },
    {
      id: 19,
      name: "How to Create a Scroll Indicator with JavaScript | Navbar Scrollbar Indicator Using JavaScript",
      img: "../assets/image/javascript/019.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=-VTNEiYntFw&list=PLZdBNNxWmMHh4T2IL6IT_5oe8aBSxoMPE&index=6 ",
    },
    {
      id: 20,
      name: "Easy way to show/hide password for javascript beginners | Mini Project for Beginner",
      img: "../assets/image/javascript/020.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=2Qevs0pilZc&list=PLZdBNNxWmMHh4T2IL6IT_5oe8aBSxoMPE&index=4",
    },

  ];
  const handleViewMore = () => {
    setDisplayCount(displayCount + increment);
  };
  return (
    <>
    <div className='container-fluid'>
    <div className='centered-content w-50'>
        <h1 className='main-title'>JavaScript Code Examples</h1>
        <p className='main-subtitle'>Curated lists of Free JavaScript code examples including buttons, loaders, hover effects, modal windows, menus, and text effects.</p>
    </div>
  </div>
   
  <div className="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {htmlcssImg.slice(0, displayCount).map((item) => (
            <div className="col" key={item.id}>
              <div className="card p-3">
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
