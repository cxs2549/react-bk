import { useState } from "react";
import styled from "styled-components";
import { WiSunrise } from "react-icons/wi";
import { FiSun } from "react-icons/fi";

const StyledHeader = styled.div`
  background-color: #502314;
  color: var(--brandBase);
  @media (min-width: 768px) {
    height: 200px;
    background-color: #d62300;
  }
  @media (min-width: 1300px) {
    border-radius: 12px;
  }
  
  #wrapper {
    display: grid;
    align-items: center;
    height: 100%;
    grid-template-columns: 1.5fr auto;
    max-width: var(--maxWidth);
    margin: 0 auto;
@media (min-width: 768px) {

}
    > div:first-of-type {
      font-size: 220%;
      font-family: "Paytone One";
      text-transform: capitalize;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 768px) {
        font-size: 370%;
      }
    }
    > div:last-of-type {
      display: flex;
      height: 100%;
      > div {
        @media (min-width: 768px) {
          gap: .5rem;
          padding: 1.5rem;
        }
        
     
        > div {
          min-width: min-content;
          cursor: pointer;
          @media (min-width: 768px) {
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
        > div:first-of-type {
          padding: 1rem;
          background-color: ${props => (props.isBreakfast ? 'rgba(0, 0, 0, 0.2);' : 'transparent')};
        }
        > div:last-of-type {
          padding: 1rem;
          background-color: ${props => (!props.isBreakfast ? 'rgba(0, 0, 0, 0.2);' : 'transparent')};
          /* background-color: #491c10; */
  
          svg {
            font-size: 1.5rem;
          }
        }
        display: flex;
        align-items: center;
        > div {
          display: flex;
          flex-flow: column;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
          font-size: 90%;
          svg {
            min-height: 30px;
            max-height: 30px;
            font-size: 2rem;
          }
          span {
            min-height: 1rem;
          }
          padding: 0 0.5rem;
          text-transform: capitalize;
        }
      }
    }
  }

`;
const Header = () => {
  const [isBreakfast, setIsBreakfast] = useState(false)
  return (
    <StyledHeader isBreakfast={isBreakfast}>
      <div id="wrapper">
        <div>our menu</div>
        <div>
          <div>
            <div onClick={() => setIsBreakfast(true)}>
              <WiSunrise />
              <span>breakfast</span>
            </div>
            <div onClick={() => setIsBreakfast(false)}>
              <FiSun />
              <span>daytime</span>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;
