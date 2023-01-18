import axios from "axios";
export default function Home({ kategori, url }) {
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
                  <img src="/images/logo.png" />
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
          </div>
        </div>
        {/* services section end */}
        {/* about section start */}
        <div className="about_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              {kategori.data.attributes.kangfotos.data.map((item, index) => {
                // console.log(item.attributes.foto);
                return (
                  <div className="col-md-6">
                    <div>
                      <img
                      src={`http://localhost:1337${item.attributes.foto.data.attributes.url}`}
                      />
                    </div>
                    <div className="about_taital_main">
                      <h1 className="about_taital">{item.attributes.Name}</h1>
                      <p className="about_text">
                        {item.attributes.Description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* about section end */}

        {/* footer section start */}
        <div className="footer_section layout_padding">
          <div className="container">
            <div className="input_btn_main">
              <input
                type="text"
                className="mail_text"
                placeholder="Search your category"
                name="Enter your email"
              />
              <div className="subscribe_bt">
                <a href="#">Search</a>
              </div>
            </div>
            <div className="social_icon">
              <nav>
                <ul>
                  <li>
                    <a href="#">
                      <img src="/images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/linkedin-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/instagram-icon.png" />
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
export async function getServerSideProps(req, res) {
  const response = await axios.get(
    `http://localhost:1337/api/kategoris/${req.query.id}?populate[kangfotos][populate][0]=foto`
  );

  const url = "http://localhost:1337";
  const kategori = await response.data;
  return {
    props: { kategori, url }, // will be passed to the page component as props
  };
}
