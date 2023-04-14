import icons from "@/assets/icons";
import images from "@/assets/images";
import React from "react";
import styled from "styled-components";

declare interface PROPS {
  image: string;
  subTitle: string;
  description: string;
  button: string;
}

const Circle = (props: PROPS): JSX.Element => {
  function noFunction(e: any): void {
    e.preventDefault();
    alert("테마 기능 테스트 중이라 아무것도 안뜹니다.");
  }
  return (
    <Li>
      <div className="img-wrap">
        <img src={props.image} alt="" />
      </div>
      <div className="text-wrap">
        <h3>{props.subTitle}</h3>
        <p>{props.description}</p>
      </div>
      <button onClick={noFunction}>
        <span>{props.button}</span>
        <icons.arrowRight />
      </button>
    </Li>
  );
};

export default Circle;

const Li = styled.li`
  width: calc(100% / 4);
  min-height: 566.5px;
  /* min-height: 26vw; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 42px;

  .img-wrap {
    position: relative;
    background-color: var(--reversal-color-theme);
    border-radius: 50%;
    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    img {
      position: absolute;
      width: 40%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .text-wrap {
    h3 {
      font-size: 24px;
      line-height: 30px;
    }
    p {
      padding-top: 16px;
      color: #6f6f6f;
      font-weight: 500;
      line-height: 22px;
    }
  }
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #a5a5a5;
    border-radius: 4px;
    color: #a5a5a5;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    transition: 0.3s;

    &:hover {
      border-color: transparent;
      background-color: #f9b337;
      color: white;
      path {
        fill: white;
      }
    }
  }
`;
