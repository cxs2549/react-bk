import styled from 'styled-components'
import { HiHome } from 'react-icons/hi';
import { IoFastFoodSharp } from 'react-icons/io5';
import { IoMdRibbon } from 'react-icons/io';
import { ImLoop2 } from 'react-icons/im';
import { RiUser3Fill } from 'react-icons/ri';
const StyledBottombar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-content: space-between;
    font-size: 76%;
    text-transform: capitalize;
    font-weight: 600;
    color: rgb(80, 35, 20);
    @media (min-width: 768px) {
        display: none;
    }
    > div {
        display: flex;
        flex-flow: column;
        gap: .2rem;
        align-items: center;
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
            font-size: 1.3rem;
        }
    }
    .active {
        color: red;
    }
`
const Bottombar = () => {
    const icons = [
        {name: 'home', icon: <HiHome />},
        {name: 'order', icon: <IoFastFoodSharp />},
        {name: 'offers', icon: <IoMdRibbon />},
        {name: 'reorder', icon: <ImLoop2 />},
        {name: 'account', icon: <RiUser3Fill />},
    ]
return (
<StyledBottombar>
    {icons.map((icon, i) => (
        <div key={i}>
            {icon.icon}
            <span>{icon.name}</span>
        </div>
    ))}
</StyledBottombar>
)
}
export default Bottombar