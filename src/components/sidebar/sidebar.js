import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  ShopOutlined,
  ScissorOutlined,
  PoundCircleOutlined,
  GiftOutlined,
  TagsOutlined,
  BellOutlined,
  TrophyOutlined,
  NotificationOutlined,
  ZhihuOutlined,
  QuestionCircleOutlined,
  FrownOutlined,
  TeamOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  width: 100% !important;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden !important;

  * {
    font-family: Quicksand;
  }

  //---------------------
  // Ant Menu Background
  //---------------------
  &.ant-menu {
    background-color: ${(props) =>
      props.theme[props.theme.mode].background.primary + " !important"};
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    display: flex;
    align-items: center;
    padding: 0 13px !important;
    font-size: 14px;
    width: 80%;
    margin: 0 auto;
    font-weight: 900;
    border-radius: 10px;
    .anticon {
      font-size: 18px;
      line-height: 0;
    }
    span,
    a {
      font-size: 14px;
      font-weight: 700;
      color: ${(props) =>
        props.theme[props.theme.mode].textColor.primary + " !important"};
    }
  }

  //--------------------
  // On menu item hover
  //--------------------
  .ant-menu-item-active,
  .ant-menu-submenu-title:hover {
    color: ${(props) =>
      props.theme[props.theme.mode].menu.hover + " !important"};
    a {
      color: ${(props) =>
        props.theme[props.theme.mode].menu.hover + " !important"};
    }
  }

  //-------------------
  // For sub-menu item
  //-------------------
  .ant-menu-sub {
    .ant-menu-item {
      :before {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${(props) =>
          props.theme[props.theme.mode].textColor.primary + " !important"};
        margin: 0 8px 0 24px;
      }

      &.ant-menu-item-selected {
        // background-color:
        border-radius: 10px;
        color: ${(props) =>
          props.theme[props.theme.mode].textColor.primary + "!important"};
        a {
          color: ${(props) =>
            props.theme[props.theme.mode].textColor.primary + "!important"};
        }
        :after {
          content: none;
        }
        :before {
          background-color: #304aca !important;
        }
      }
    }
  }

  //----------------------------------------------
  // When menu-item and sub-menu-item is selected
  //----------------------------------------------
  .ant-menu-item-selected,
  .ant-menu-submenu-selected .ant-menu-submenu-title {
    background-color: ${(props) =>
      props.theme[props.theme.mode].menu.background + " !important"};
    border-radius: 10px;
    color: #fff !important;
    a {
      color: #fff !important;
    }
    :after {
      content: none;
    }
    .ant-menu-submenu-arrow {
      color: #fff !important;
      :before,
      :after {
        background: #fff !important;
      }
    }
  }

  // -------------------------
  // Menu scroll bar style
  // -------------------------
  ::-webkit-scrollbar {
    width: 3px !important;
    // display: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #9297af;
    border-radius: 10px;
  }

  &:hover {
    ::-webkit-scrollbar {
      // display: inline;
    }
  }
`;

const { SubMenu } = Menu;

const LeftSideBar = () => {
  return (
    <StyledMenu mode="inline">
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>

      <SubMenu
        key="sub1"
        icon={<MailOutlined />}
        title={<p style={{ fontWeight: 700, margin: 0 }}>Navigation One</p>}
      >
        <Menu.Item key="1.1">Option 1</Menu.Item>
        <Menu.Item key="1.2">Option 2</Menu.Item>
        <Menu.Item key="1.3">Option 3</Menu.Item>
        <Menu.Item key="1.4">Option 4</Menu.Item>
      </SubMenu>

      <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to="/customers">Customers</Link>
      </Menu.Item>

      <Menu.Item key="3" icon={<ShopOutlined />}>
        <Link to="/salons">Salons</Link>
      </Menu.Item>

      <Menu.Item key="4" icon={<ScissorOutlined />}>
        <Link to="/services">Services</Link>
      </Menu.Item>

      <Menu.Item key="5" icon={<PoundCircleOutlined />}>
        <Link to="/payments">Payments</Link>
      </Menu.Item>

      <Menu.Item key="6" icon={<GiftOutlined />}>
        <Link to="/offers">Offers</Link>
      </Menu.Item>

      <Menu.Item key="7" icon={<TagsOutlined />}>
        <Link to="/coupons">Coupons</Link>
      </Menu.Item>

      <Menu.Item key="8" icon={<BellOutlined />}>
        <Link to="/subscriptions">Subscriptions</Link>
      </Menu.Item>

      <Menu.Item key="9" icon={<TrophyOutlined />}>
        <Link to="/manage-points">Manage Points</Link>
      </Menu.Item>

      <Menu.Item key="10" icon={<NotificationOutlined />}>
        <Link to="/email-push-notifications">Email and Push Notifications</Link>
      </Menu.Item>

      <Menu.Item key="11" icon={<ZhihuOutlined />}>
        <Link to="/languages">Language</Link>
      </Menu.Item>

      <Menu.Item key="12" icon={<QuestionCircleOutlined />}>
        <Link to="/help">Help</Link>
      </Menu.Item>
      <Menu.Item key="13" icon={<FrownOutlined />}>
        <Link to="/complaints">Complaints</Link>
      </Menu.Item>
      <Menu.Item key="14" icon={<TeamOutlined />}>
        <Link to="/admins">Sub Admins</Link>
      </Menu.Item>
    </StyledMenu>
  );
};
export default LeftSideBar;
