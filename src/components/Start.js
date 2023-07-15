import React from "react";
import "../App.css";

function Start() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <h1>About:</h1>
        <div className="font-formatting">
          Welcome to my calculator app, a tool that combines the functionality
          of both simple and binary computations. This app is designed to
          provide you with a seamless experience for all your mathematical
          calculations. With this calculator, you can perform basic arithmetic
          operations like addition, subtraction, multiplication, and division,
          making it ideal for everyday calculations. Whether you need to quickly
          add numbers, calculate percentages, or divide values, this calculator
          is here to assist you. But that's not all! This calculator also offers
          advanced features for binary calculations. It allows you to perform
          bitwise operations, binary arithmetic, and logical operations. Whether
          you're working with binary numbers, encoding and decoding data, or
          exploring the fascinating world of digital logic, our binary
          calculator is your reliable companion. I have created this app with a
          user-friendly interface, making it easy to input your numbers and
          execute computations. The clear and intuitive design ensures a smooth
          and efficient experience, whether you are a student, professional, or
          simply someone who loves numbers. Happy calculating!
        </div>
      </div>
    </>
  );
}

export default Start;
