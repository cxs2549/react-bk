import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const StyledLocationbar = styled.div`
  background-color: #2e782a;
  position: fixed;
  bottom: 54px;
  left: 0;
  width: 100%;
  color: white;
  height: auto;
  padding: .25rem 0;
  @media (min-width: 768px) {
    bottom: 0;
  }
  #wrapContainer {
      max-width: var(--maxWidth);
      margin: 0 auto;
      height: 100%;
    }
    #wrap {
    padding: 0 0.5rem;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr 80px;
    gap: 1rem;
    @media (min-width: 768px) {
      padding: 0 2rem;
      max-width: 600px;
     
    }
    @media (min-width: 1280px) {
      padding: 0;
    }

    > div {
      span, p {
        font-weight: bold;
        font-family: "Paytone One";
      }
      p {
          font-size: 80%;
          @media (min-width: 365px) {
            font-size: 100%;
          }
      }
      &:nth-of-type(2) {
        display: flex;
        flex-flow: column;
        position: relative;
        max-width: 176px;
        @media (min-width: 375px) {
            max-width: 100%;
        }
        input {
          background: none;
          border: none;
          border-bottom: 2px solid white;
          padding: 0.25rem 0;
          color: white;
          font-weight: 600;
          font-size: 97%;
          &:focus {
            outline: none;
          }
        }
        svg {
          position: absolute;
          right: 0;
          font-size: 1.1rem;
          bottom: 0.3rem;
        }
      }
      &:last-of-type {
        background-color: #fff;
        color: #2e782a;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 60px;
        min-width: 50px;
        gap: 0.4rem;
        padding: 0.25rem 0;
        border-radius: 99999px;
        transition: filter 300ms;
        cursor: pointer;
        &:hover {
          filter: brightness(1.2);
        }
        @media (min-width: 375px) {
            max-width: 90px;
        }
      }
    }
    svg {
      &:nth-of-type(1) {
        font-size: 1.3rem;
      }
    }
  }
`;
const Locationbar = () => {
  return (
    <StyledLocationbar>
      <div id="wrapContainer">
        <div id="wrap">
          <div>
            <ImLocation />
          </div>
          <div>
            <p>For item availability</p>
            <input type="text" placeholder="Choose a Location" />
            <AiOutlineRight />
          </div>
          <div>
            <HiOutlineShoppingBag />
            <span>0</span>
          </div>
        </div>
      </div>
    </StyledLocationbar>
  );
};
export default Locationbar;
