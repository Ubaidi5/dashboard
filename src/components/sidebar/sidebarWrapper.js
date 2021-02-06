import React from "react";
import { Layout, Drawer } from "antd";
import ProfileCard from "../cards/profileCard";
import styled from "styled-components";
import Sidebar from "./sidebar";

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: ${(props) =>
    props.theme[props.theme.mode].background.primary + " !important"};
  .ant-layout-sider-children ul {
    background-color: transparent !important;
  }
`;

const SidebarWrapper = ({ collapsed, toggleCollapsed }) => {
  let BB = window.innerWidth < 700 ? Drawer : StyledSider;
  return (
    <div>
      <BB
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={window.innerWidth < 700 ? 0 : 56}
        width="256px"
        onCollapse={toggleCollapsed}
        // onMouseOver={() => toggleCollapsed(false)}
        // onMouseLeave={() => {
        //   toggleCollapsed(true);
        // }}
        // I don't know why it is working.. ¯\_(ツ)_/¯
        placement="left"
        closable={false}
        onClose={() => toggleCollapsed(true)}
        visible={!collapsed}
        bodyStyle={{ padding: 0 }}
      >
        <div style={{ height: collapsed ? 136 : 236 }}>
          <ProfileCard collapsed={collapsed} />
        </div>
        <div
          style={{ height: `calc(100vh - ${collapsed ? "200px" : "300px"})` }}
        >
          <Sidebar collapsed={collapsed} />
        </div>
      </BB>
    </div>
  );
};

export default SidebarWrapper;
