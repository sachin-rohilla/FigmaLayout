import React from "react";
import "./RecentBlogs.css";
const RecentBlogs = () => {
  return (
    <>
      <div className="recent-main">
        <div className="recent-top">
          <p className="recent-para1">Recent Blogs</p>
          <p className="recent-para2"> view all {">"}</p>
        </div>
        <div className="recent-container">
          <div className="recent-item">
            <div>
              <p className="item-para1">
                India is getting serious about healthcare
              </p>
              <p className="item-para2">Read More</p>
            </div>
            <div>
              <img
                src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/319/2019/12/06020410/iStock-1149727564.jpg"
                alt="medical"
                className="recent-footer-img"
              />
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="recent-item">
            <div>
              <p className="item-para3">
                Why an annual health check is important
              </p>
              <p className="item-para4">Read More</p>
            </div>
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/58361d02ff7c50058bae611c/1563202946710-2HW622K6MZ79ZS8A40TA/image-asset.jpeg?format=1000w"
                alt="medical"
                className="recent-footer-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>

      <div className="recent-footer">
        <div className="recent-footer-container">
          <p
            style={{
              fontFamily: "Manrope",
              fontSize: "25px",
              fontWeight: "bold",
            }}
            className="avail"
          >
            Avail greater discounts on our app
          </p>
          <div className="recent-box">
            <p className="recent-footer-para1">
              Download our free app for best deals and a faster experience{" "}
            </p>
            <p className="recent-footer-para2">
              Get the link to download the app
            </p>
            <div className="recent-input">
              <input type="text" placeholder="Enter Phone Number" />
              <button className="recent-btn">Send app link</button>
              <p className="appStore">
                <i class="fa fa-apple"></i> App Store
              </p>
              <p className="playStore">
                <i class="fab fa-google-play"></i> Google Play
              </p>
              <img
                src="https://blackwater.tech/wp-content/uploads/2020/11/banner-iphone-test.png"
                alt="medical"
                className="iphone"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlogs;
