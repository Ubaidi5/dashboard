import React, { useState } from "react";
import { connect } from "react-redux";
import LoginTopImage from "../assets/loginTopImage.png";
import { Form } from "antd";
import CheckboxWrapper from "../components/inputs/checkboxWrapper";
import { LockFilled } from "@ant-design/icons";
import ButtonWrapper from "../components/buttons";
import InputFeild from "../components/inputs/InputField";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginInfo, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...loginInfo, [name]: value });
  };

  const handleSubmit = () => {};
  return (
    <div>
      {/* <ErrorModal
        title="Error"
        visible={errorModal.vis}
        onCancel={setErrorModal}
        // onOk={setErrorModal}
        errorMessage={errorModal.e}
      /> */}

      {/* Main Column */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Login Card */}
        <div
          style={{
            width: 448,
            height: 512,
            padding: "0 32px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={LoginTopImage}
            alt="Logo"
            width={448}
            style={{ position: "relative", right: 32 }}
          />
          <div
            style={{
              textAlign: "left",
              position: "relative",
              top: "-80px",
              left: "0px",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 600 }}>Welcome Back</span>
            <br />
            <span style={{ fontSize: 14, fontWeight: 400 }}>
              Sign in to continue to Komb
            </span>
          </div>

          <Form onFinish={handleSubmit} validateTrigger={["onFinish"]}>
            <Form.Item
              name="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter valid email",
                },
              ]}
              validateFirst={false}
              initialValue={loginInfo.email}
            >
              <InputFeild
                label="Email"
                name="email"
                value={loginInfo.email}
                placeholder="abc@xyz.com"
                onChange={handleChange}
                onKeyPress={(e) => e.which === 13 && handleSubmit()}
                style={{ margin: 0 }}
              />
            </Form.Item>

            <Form.Item
              name="Password"
              rules={[
                {
                  type: "string",
                  required: true,
                  min: 8,
                },
              ]}
              validateFirst={false}
            >
              <InputFeild
                label="Password"
                name="password"
                value={loginInfo.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                onKeyPress={(e) => e.which === 13 && handleSubmit()}
                style={{ margin: 0 }}
              />
            </Form.Item>

            <div style={{ margin: "24px 0", textAlign: "left" }}>
              <CheckboxWrapper>Remember me</CheckboxWrapper>
            </div>
            <br />
            <ButtonWrapper style={{ height: 40 }} htmlType="submit">
              Login
            </ButtonWrapper>
          </Form>
          <div style={{ marginTop: 16 }}>
            <Link to="/forgotpassword">
              <LockFilled /> Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => {},
});

export default connect(null, mapDispatchToProps)(Login);
