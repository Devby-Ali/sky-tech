import React from "react";

export default function Topbar() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="home-header">
          <div className="home-right">
            <div className="home-searchbar">
              <input type="text" className="search-bar" placeholder="جستجو..." />
            </div>
            <div className="home-notification">
              <button type="button">
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div className="home-notification-modal">
              <ul className="home-notification-modal-list">
                <li className="home-notification-modal-item">
                  <span className="home-notification-modal-text">پیغام ها</span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </li>
                <li className="home-notification-modal-item">
                  <span className="home-notification-modal-text">پیغام ها</span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </li>
                <li className="home-notification-modal-item">
                  <span className="home-notification-modal-text">پیغام ها</span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </li>
                <li className="home-notification-modal-item">
                  <span className="home-notification-modal-text">پیغام ها</span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-left">
            <div className="home-profile">
              <div className="home-profile-image">
                <a href="#">
                  <img src="/images/profile.png" alt="" />
                </a>
              </div>
              <div className="home-profile-name">
                <a href="#">محمدامین سعیدی راد</a>
              </div>
              <div className="home-profile-icon">
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
