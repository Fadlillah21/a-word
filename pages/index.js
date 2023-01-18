import axios from "axios";
import { useState } from "react";
export default function Home({ kategori }) {
  const [kateg, setKategori] = useState(kategori);
  const [cari, setCari] = useState("");
  function sare(e) {
    setCari(e.target.value);
  }
  function carikan() {
    const isi = kategori.data.filter(function (x) {
      return x.attributes.Nama.toLowerCase().includes(cari.toLowerCase());
    });
    setKategori({ data: isi });
    // console.log(isi);
  }

  return (
    <>
      <div>
        <div className="header_section">
          <div className="header_main">
            <div className="mobile_menu">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo_mobile">
                  <a href="index.html">
                    <img src="images/logo.png" />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav"></div>
              </nav>
            </div>
            <div className="container-fluid">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.png" />
                </a>
              </div>
              <div className="menu_main"></div>
            </div>
          </div>
          {/* banner section end */}
        </div>
        {/* header section end */}
        {/* services section start */}
        <div className="services_section layout_padding">
          <div className="container">
            <h1 className="services_taital">Services </h1>
            <p className="services_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
            <div className="services_section_2">
              <div className="row">
                {kateg.data.length > 0
                  ? kateg.data.map((item, index) => {
                      return (
                        <div className="col-md-4 mt-4">
                          <div>
                            <img
                              src={`http://localhost:1337${item.attributes.foto.data[0].attributes.url}`}
                              className="services_img"
                            />
                          </div>
                          <div className="btn_main">
                            <a href={`/kategori/${item.id}`}>
                              {item.attributes.Nama}
                            </a>
                          </div>
                        </div>
                      );
                    })
                  : <a href="#">
                  <img src="images/w.jfif" />
                </a>}
                {}
              </div>
            </div>
          </div>
        </div>
        {/* services section end */}
        {/* about section start */}
        <div className="about_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="about_taital_main">
                  <h1 className="about_taital">About Us</h1>
                  <p className="about_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All{" "}
                  </p>
                  <div className="readmore_bt">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 padding_right_0">
                <div>
                  <img src="images/about-img.png" className="about_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about section end */}

        {/* footer section start */}
        <div className="footer_section layout_padding">
          <div className="container">
            <div className="input_btn_main">
              <input
                onChange={function (e) {
                  sare(e);
                }}
                type="text"
                className="mail_text"
                placeholder="Search your category"
                name="Enter your email"
              />
              {/* <button ></button> */}
              <div className="subscribe_bt">
                <a
                  onClick={function (e) {
                    carikan(e);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Search
                </a>
              </div>
            </div>
            <div className="social_icon">
              <nav>
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/linkedin-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/instagram-icon.png" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* footer section end */}
        {/* copyright section start */}
        <div className="copyright_section">
          <div className="container">
            <p className="copyright_text">
              2023 All Rights Reserved. Design by{" "}
              <a href="https://html.design">Free html Templates</a> Distributed
              by <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const response = await axios.get(
    "http://localhost:1337/api/kategoris?populate=*"
  );

  const kategori = await response.data;

  return {
    props: { kategori }, // will be passed to the page component as props
  };
}
