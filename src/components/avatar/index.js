import React from "react";
import { Avatar } from "antd";

const AvatarWrapper = (props) => {
  return (
    <div style={{ paddingRight: "8px" }}>
      <Avatar {...props} />
      {props.text ? <span>{props.text}</span> : null}
    </div>
  );
};

export default AvatarWrapper;
