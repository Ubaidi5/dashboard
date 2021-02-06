import React from "react";
import profile from "../../assets/profile.jpg";
import background from "../../assets/background.jpg";

const ProfileCard = (props) => {
  const { collapsed } = props;
  return (
    <div className="sidebar-profile-card">
      <img
        src={background}
        alt="cover"
        className="sidebar-profile-cover"
        style={{ visibility: collapsed ? "hidden" : "visible" }}
      />
      <div
        // src={profile}
        alt="profile"
        className="sidebar-profile-photo"
        style={{
          width: collapsed ? 40 : 100,
          height: collapsed ? 40 : 100,
          transition: collapsed ? "none" : "0.3s ease",
          borderWidth: collapsed ? 3 : 6,
          backgroundImage: `url(${profile})`,
          marginTop: collapsed ? 12 : 0,
        }}
      />
      <h3
        className="sidebar-profile-username"
        style={{ visibility: collapsed ? "hidden" : "visible" }}
      >
        Ubaid Hussain
      </h3>
      <p
        className="sidebar-profile-bio"
        style={{ visibility: collapsed ? "hidden" : "visible" }}
      >
        Web developer
      </p>
    </div>
  );
};

export default ProfileCard;
