import React, { useState } from "react";
import { Layout } from "antd";
import SidebarWrapper from "./components/sidebar/sidebarWrapper";
import HeaderWrapper from "./components/header";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const Main = () => {
  const [collapsed, toggleCollapsed] = useState(false);
  return (
    <Layout>
      {/* <--- header ---> ;) */}
      <Layout
        style={{
          height: 64,
          background: "#353D46",
          position: "sticky",
          top: 0,
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={56}
          width={window.innerWidth < 700 ? 56 : 256}
          style={{
            display: "flex",
            justifyContent: collapsed ? "center" : "flex-end",
            padding: 8,
          }}
        >
          <button
            onClick={() => toggleCollapsed(!collapsed)}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              lineHeight: "52px",
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: 24, color: "#fafafa" }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: 24, color: "#fafafa" }} />
            )}
          </button>
        </Sider>

        <HeaderWrapper
          collapsed={collapsed}
          toggleCollapsed={() => toggleCollapsed(!collapsed)}
        />
      </Layout>

      {/* <--- Body ---> */}
      <Layout>
        <SidebarWrapper
          collapsed={collapsed}
          toggleCollapsed={(e) =>
            e == null ? toggleCollapsed(!collapsed) : toggleCollapsed(e)
          }
        />
        <Content style={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
          <div>{/* <h1>Main</h1> */}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
