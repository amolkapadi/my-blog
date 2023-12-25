import React, { useState } from "react";

export default function Htmlcss() {
  const [displayCount, setDisplayCount] = useState(12);
  const increment = 12;
  const htmlcssImg = [
    {
      id: 1,
      name: "Bootstrap 5 Footer | How to create Footer using Html and Bootstrap5 | Awesome Footer in Bootstrap 5",
      img: "../assets/image/htmlcss/footer1.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=_y9Nz1QhKDg&t=231s",
    },
    {
      id: 2,
      name: "Responsive Footer Design using Html & Css and bootstrap 5",
      img: "../assets/image/htmlcss/footer2.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=Dl7-nBtkI40&t=13s",
    },
    {
      id: 3,
      name: "Professional Bootstrap 5 Footer | How to create Responsive Footer using HTML ,CSS and Bootstrap 5",
      img: "../assets/image/htmlcss/footer3.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "https://amolkapadi.github.io/footer-4/",
      watchLink: "https://www.youtube.com/watch?v=A_t-6N01itk&t=15s",
    },
    {
      id: 4,
      name: "Discover the Secret to Stunning Responsive Footer Design | HTML, CSS and Bootstrap 5",
      img: "../assets/image/htmlcss/footer4.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=-0uzxeg_JNY",
    },
    {
      id: 5,
      name: "Responsive Footer Design Using HTML CSS and Bootstrap 5 | Footer Design",
      img: "../assets/image/htmlcss/footer5.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=XRJOXNeaiXM",
    },
    {
      id: 6,
      name: "Complete Responsive Hospital Blog Card Design Using HTML CSS Bootstrap 5 || Step By Step",
      img: "../assets/image/htmlcss/Card1.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=RWamBSmXb6c&t=7s",
    },
    {
      id: 7,
      name: "Complete Responsive Hospital Blog Card Design Using HTML CSS Bootstrap 5 || Step By Step",
      img: "../assets/image/htmlcss/form1.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=RWamBSmXb6c&t=18s",
    },
    {
      id: 8,
      name: "Creative CSS Icons Hover Effect | Boostrap 5 Icon",
      img: "../assets/image/htmlcss/Icon1.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "Hhttps://www.youtube.com/watch?v=0LvZgvlWrZk&t=105s",
    },
    {
      id: 9,
      name: "How To Make Glassmorphism Card Design Using HTML and CSS | Glassmorphism UI Design Card",
      img: "../assets/image/htmlcss/Card2.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=l6PcYrgthrI",
    },
    {
      id: 10,
      name: "Step-by-step Tutorial: How To Create A Responsive Navbar With Bootstrap 5",
      img: "../assets/image/htmlcss/Navbar1.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=cuh0cOmQ1Ig",
    },
    {
      id: 11,
      name: "How to use Bootstrap 5 Card | hover Effect on Card with Mobile Responsive | Download Free Code",
      img: "../assets/image/htmlcss/Card3.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=uftR3VG0OCc",
    },
    {
      id: 12,
      name: "HTML & CSS Footer Design Tutorial: Create a Stunning Website Footer Step-by-Step",
      img: "../assets/image/htmlcss/footer6.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=uIciwKUvVH8",
    },
    {
      id: 13,
      name: "#HTML_and_CSS_Card | Hover Effect Card | #Mobile_Responsive_Card",
      img: "../assets/image/htmlcss/Card4.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=k9eD-JC6kzA",
    },
    {
      id: 14,
      name: "Responsive Navbar Using Only HTML and CSS | Media Query for Mobile Responsive.",
      img: "../assets/image/htmlcss/01.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=2TzZpqpEOCc&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=7",
    },
    {
      id: 15,
      name: "Login form in html and css with mobile responsive...",
      img: "../assets/image/htmlcss/02.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=DTGUACf4E0o&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=3",
    },
    {
      id: 16,
      name: "Parallax_Effect_HTML_&_CSS_in_Hindi | #Parallax_Effect_for_Website | parallax scrolling website",
      img: "../assets/image/htmlcss/03.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=4xTSfXlY33Q&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=1",
    },
    {
      id: 17,
      name: "#Owl_carousel_using_Bootstrap_5_Card | #owl_carousel_step_by_step_in_Hindi.",
      img: "../assets/image/htmlcss/04.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=7yPnLaVTepg&t=17s",
    },
    {
      id: 18,
      name: "#HTML_CSS_Animation_Effect and @keyframes | Happy Rangpachmi | HTML CSS project",
      img: "../assets/image/htmlcss/037.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=_5RCk0i2QnQ&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=8",
    },
    {
      id: 19,
      name: "How To Create a Responsive Header | The BEST Way to Build a Header!",
      img: "../assets/image/htmlcss/036.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=2Gez6qS9OAI&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=12",
    },
    {
      id: 20,
      name: "Responsive UI Design Calendar | How To Create Calendar Ui Design ? | HTML & CSS Calendar UI Design",
      img: "../assets/image/htmlcss/07.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=iub6ohn221M&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=2",
    },
    {
      id: 21,
      name: "Part 1 | Complete Responsive Portfolio Website Design Using HTML CSS & JavaScript From Scratch ",
      img: "../assets/image/htmlcss/010.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=18q8DiDGeWE&list=PLZdBNNxWmMHjKeBNVzixNBHAvPF1cim3L",
    },
    {
      id: 22,
      name: "Part 2 | Complete Responsive Portfolio Website Design Using HTML CSS & JavaScript From Scratch ",
      img: "../assets/image/htmlcss/010.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=18q8DiDGeWE&list=PLZdBNNxWmMHjKeBNVzixNBHAvPF1cim3L",
    },
    {
      id: 23,
      name: "Part 3 | Complete Responsive Portfolio Website Design Using HTML CSS & JavaScript From Scratch ",
      img: "../assets/image/htmlcss/011.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=18q8DiDGeWE&list=PLZdBNNxWmMHjKeBNVzixNBHAvPF1cim3L",
    },
    {
      id: 24,
      name: "Part 4 | Complete Responsive Portfolio Website Design Using HTML CSS & JavaScript From Scratch ",
      img: "../assets/image/htmlcss/012.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=18q8DiDGeWE&list=PLZdBNNxWmMHjKeBNVzixNBHAvPF1cim3L",
    },
    {
      id: 25,
      name: "Part 5 | Complete Responsive Portfolio Website Design Using HTML CSS & JavaScript From Scratch ",
      img: "../assets/image/htmlcss/013.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=18q8DiDGeWE&list=PLZdBNNxWmMHjKeBNVzixNBHAvPF1cim3L",
    },
    {
      id: 26,
      name: "How To Create a Ribbon with CSS",
      img: "../assets/image/htmlcss/014.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=tV8d5jO57y4&list=PLZdBNNxWmMHh2nw0Iec8RbopiNpvVsl59&index=21",
    },
    {
      id: 27,
      name: "Amazing Hover Effects for Bootstrap 5 Our Services Cards | Responsive Bootstrap 5 card",
      img: "../assets/image/htmlcss/016.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=pedUaYKIbaI&list=PLZdBNNxWmMHh2nw0Iec8RbopiNpvVsl59&index=19",
    },
    {
      id: 28,
      name: "Unlock the Secret to Building a Stunning Product Card with Bootstrap 5!",
      img: "../assets/image/htmlcss/017.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=KUqHqL_62T8&list=PLZdBNNxWmMHh2nw0Iec8RbopiNpvVsl59&index=16",
    },
    {
      id: 29,
      name: "Unlock the Secret to Building a Stunning Product Card with Bootstrap 5!",
      img: "../assets/image/htmlcss/018.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=KUqHqL_62T8&list=PLZdBNNxWmMHh2nw0Iec8RbopiNpvVsl59&index=16",
    },
    {
      id: 30,
      name: "Latest News Update Card Design Using HTML, CSS, Bootstrap 5 | Responsive Card Design | 2023",
      img: "../assets/image/htmlcss/019.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=r03X72du-es&list=PLZdBNNxWmMHh2nw0Iec8RbopiNpvVsl59&index=14",
    },
    {
      id: 31,
      name: "create responsive bootstrap 5 cake dish cards | card design using html, css, bootstrap 5",
      img: "../assets/image/htmlcss/020.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=SvlD_OPszuc&list=PLZdBNNxWmMHh2nw0Iec8RbopiNpvVsl59&index=15",
    },
    {
      id: 32,
      name:"Design a Fully Responsive Car Website From Scratch: HTML & CSS Tutorial for Beginners!",
      img: "../assets/image/htmlcss/035.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=68C1_cr6LUY&t=560s",
    },
    {
      id: 33,
      name: "Beautiful contact form html css bootstrap 5 | Mobile Responsive Contact section Design",
      img: "../assets/image/htmlcss/022.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=YiKQwsJPLNo&list=PLZdBNNxWmMHgvwAP0TcG2gRC-VB_AFSt6&index=13",
    },
    {
      id: 34,
      name: "Contact Form Design Using HTML,CSS,Bootstrap 5 | Improve your Skills | Responsive for mobile device.",
      img: "../assets/image/htmlcss/023.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=2TFFeuc_owA&list=PLZdBNNxWmMHgvwAP0TcG2gRC-VB_AFSt6&index=11",
    },
    {
      id: 35,
      name: "Contact Form Design Using HTML,CSS,Bootstrap 5 | Improve your Skills | Responsive for mobile device.",
      img: "../assets/image/htmlcss/024.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "",
    },
    {
      id: 36,
      name: "Responsive Contact section using HTML, CSS, Bootsrap 5 | download free code in description",
      img: "../assets/image/htmlcss/025.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=GCK0za6g2s8&list=PLZdBNNxWmMHgvwAP0TcG2gRC-VB_AFSt6&index=12",
    },
    {
      id: 37,
      name: "How to create login page with background image in html css bootstrap 5",
      img: "../assets/image/htmlcss/026.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=FmtJYohHDnM&list=PLZdBNNxWmMHgvwAP0TcG2gRC-VB_AFSt6&index=10",
    },
    {
      id: 38,
      name: "How to create login page with background image in html css bootstrap 5",
      img: "../assets/image/htmlcss/027.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=FmtJYohHDnM&list=PLZdBNNxWmMHgvwAP0TcG2gRC-VB_AFSt6&index=10",
    },
    {
      id: 39,
      name: "Login form google using html css bootstrap 5 | How to Create Responsive Login form page...",
      img: "../assets/image/htmlcss/028.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=MBfhm1LIXYo&list=PLZdBNNxWmMHgvwAP0TcG2gRC-VB_AFSt6&index=9",
    },
    {
      id: 40,
      name: "How to Create a Cutout Text using HTML and CSS|mix-blend-mode css Professional Image Text Overlays!",
      img: "../assets/image/htmlcss/029.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=YWEPJXqDOcE&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=22",
    },
    {
      id: 41,
      name: "Movie Card UI Design Using HTML and CSS | Responsive Card without media Query",
      img: "../assets/image/htmlcss/030.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=hPsQoIW0WwE&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=21",
    },
    {
      id: 42,
      name: "Layered Card Hover Effect Using HTML and CSS | Responsive card without Media Query",
      img: "../assets/image/htmlcss/031.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=JP1KrvzafNY&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=20",
    },
    {
      id: 43,
      name: "",
      img: "../assets/image/htmlcss/032.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=fBPAo7zHo9U&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=19",
    },
    {
      id: 44,
      name: "How to Center Both Vertically and Horizontally | 3 Way | Important for Interview",
      img: "../assets/image/htmlcss/033.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "",
    },

    {
      id: 45,
      name: "Skillbar Design using HTML CSS",
      img: "../assets/image/htmlcss/034.png",
      Author: "@thewebdesginer",
      DownloadLink: "",
      LiveLink: "",
      watchLink: "https://www.youtube.com/watch?v=_-0-tYSlW7A&list=PLZdBNNxWmMHi8zYAIy7iuFw4Pck7KxPyx&index=18",
    },
  ];

  const handleViewMore = () => {
    setDisplayCount(displayCount + increment);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="centered-content w-50">
          <h1 className="main-title">
            HTML, CSS & Bootstrap 4/5 Code Examples
          </h1>
          <p className="main-subtitle">
            Enjoy these 100% free HTML and CSS animated background code
            examples. They are stunning and will wow your visitors. The pure CSS
            is easy to install into your web project.
          </p>
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
  );
}
