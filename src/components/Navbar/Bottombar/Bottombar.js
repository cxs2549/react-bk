import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoMdRibbon } from "react-icons/io";
import { ImLoop2 } from "react-icons/im";
import { RiUser3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const StyledBottombar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 54px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: space-between;
  font-size: 70%;
  text-transform: capitalize;
  font-weight: 600;
  color: rgb(80, 35, 20);
  @media (min-width: 768px) {
    display: none;
    font-size: 75%;
  }
  > a {
    display: flex;
    flex-flow: column;
    gap: 0.2rem;
    align-items: center;
    height: 100%;
    justify-content: center;
    &:nth-of-type(4) {
      svg {
        font-size: 1rem;
      }
    }
    &:nth-of-type(5) {
      svg {
        font-size: 1.2rem;
      }
    }
    svg {
        min-height: 20px;
    }
    span {
        display: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        @media (min-width: 375px) {
            display: flex;
            height: 20px;
        }
    }
    svg {
      font-size: 1.3rem;
    }
  }
  .active {
    color: #ca2216;;
  }
`;
const Bottombar = () => {
  const icons = [
    { name: "home", to: "/", icon: <HiHome /> },
    { name: "order", to: "/order", icon: <IoFastFoodSharp /> },
    { name: "offers", to: "/offers", icon: <IoMdRibbon /> },
    { name: "reorder", to: "/reorder", icon: <ImLoop2 /> },
    { name: "account", to: "/account", icon: <RiUser3Fill /> },
  ];
  return (
    <StyledBottombar>
      {icons.map((icon, i) => (
        <NavLink to={icon.to} end key={i}>
          {icon.icon}
          <span>{icon.name}</span>
        </NavLink>
      ))}
    </StyledBottombar>
  );
};
export default Bottombar;
