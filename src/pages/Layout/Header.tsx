import images from "@/assets/images";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "@/assets/icons/perProject/logo_main_black_cl.svg";
import { Link } from "react-router-dom";
import icons from "@/assets/icons";
import { useMediaQuery } from "react-responsive";

const Header = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const headerMobileBreak = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = (e: any): void => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, [isDarkMode]);

  function noFunction(e: any): void {
    e.preventDefault();
    alert("테마 기능 테스트 중이라 아무것도 안뜹니다.");
  }

  return (
    <Style>
      <h1 className="logo">
        {isDarkMode ? (
          <img src={images.perLogoWhite} alt="로고" />
        ) : (
          <img src={images.perLogoBlack} alt="로고" />
        )}
      </h1>
      <nav>
        {!headerMobileBreak && (
          <>
            <ul className="gnb">
              <li>
                <Link to="/" onClick={noFunction}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" onClick={noFunction}>
                  Agora
                </Link>
              </li>
              <li>
                <Link to="/" onClick={noFunction}>
                  Helper
                </Link>
              </li>
            </ul>
            <div className="divide"></div>
          </>
        )}
        <button onClick={noFunction}>Connect wallet</button>
        {headerMobileBreak ? (
          <>햄버겈</>
        ) : (
          <button onClick={noFunction}>
            <icons.globe />
          </button>
        )}
      </nav>
    </Style>
  );
};

export default Header;

const Style = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1364px;
  margin: 0 auto;
  padding: 1.5rem 2rem;

  .logo {
    max-width: 180px;
    img {
      width: 100%;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.125rem;

    path {
      fill: var(--font-color-theme);
    }

    button {
      color: var(--font-color-theme);
      font-size: 1rem;
      margin: 0 0.5rem;

      &:nth-of-type(1) {
        padding: 0.25rem 0.8rem;
        border-radius: 6px;
        &:hover {
          color: var(--bg-color-theme);
          background-color: var(--hover-color-theme);
        }
      }
    }
  }

  .gnb {
    display: flex;
    gap: 0.875rem;
    li {
      a {
        padding: 0.25rem 1rem;
        border-radius: 6px;

        &:hover {
          color: var(--bg-color-theme);
          background-color: var(--hover-color-theme);
        }
      }
    }
  }

  .divide {
    border-left: 1px solid var(--font-color-theme);
    height: 14px;
  }
`;
