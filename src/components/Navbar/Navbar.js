import { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsFillCaretDownFill } from 'react-icons/bs'
import Bottombar from './Bottombar/Bottombar'
import Locationbar from './Locationbar/Locationbar'
import { Link, NavLink } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'

const StyledNavbar = styled.header`
	height: 69px;
	width: 100%;
  position: relative;
	z-index: 200;
	@media (min-width: 768px) {
    height: 98px;
	}
	#wrapper {
    background-color: var(--brandBase);
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		min-width: 320px;
		max-width: var(--maxWidth);
		margin: 0 auto;
		height: 100%;
		padding: 0 1.25rem;
		position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 69px;
    z-index: 200;
		@media (min-width: 768px) {
			justify-content: space-between;
      height: 98px;
      left: 50%;
      transform: translateX(-50%);
		}
		@media (min-width: 1280px) {
			padding: 0;
		}
    >div:first-of-type {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      nav {
        display: none;
        text-transform: capitalize;
        position: relative;
        z-index: 100;
        color: rgb(80, 35, 20);
        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
       
        #drop {
          position: absolute;
          right: 0;
          top: 2.5rem;
          border-radius: 8px;
          z-index: 100;
          height: auto;
          min-width: 200px;
          background-color: #f2e6d4;
          white-space: nowrap;
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
          padding: 1rem 0;
          li {
            padding: 1rem 2rem;
            font-weight: 600;
            padding: 0.5rem 0;
            min-height: 30px;
  
            &:last-of-type {
              margin-bottom: 0;
            }
            &:nth-of-type(5) {
              padding-bottom: 1.25rem;
              border-bottom: 1px solid #d7c7b5;
            }
            &:nth-of-type(6) {
              padding-top: 1.25rem;
            }
            &:nth-of-type(7) {
              padding-bottom: 1.25rem;
              border-bottom: 1px solid #d7c7b5;
            }
            &:nth-of-type(8) {
              padding-top: 1.25rem;
            }
            &:nth-of-type(10) {
              padding-bottom: 1.25rem;
              border-bottom: 1px solid #d7c7b5;
            }
            &:nth-of-type(11) {
              padding-top: 1.25rem;
            }
            a {
              font-size: 105%;
              padding: .25rem 2rem;
              height: 100%;
              overflow: hidden;
              opacity: .75;
              &:hover {
                color: #ca2216;
                opacity: 1;
              }
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
          }
        }
        >div {
          color: #333;
          text-decoration: none;
          font-size: 108%;
        
          @media (min-width: 1024px) {
            font-size: 125%;
          }
          &:last-of-type {
            /* position: relative; */
            z-index: 10;

            display: none;
            @media (min-width: 824px) {
              display: flex;
              align-items: center;
              gap: 0.2rem;
              svg {
                align-self: flex-end;
                font-size: 85%;
                padding-top: 3px;
              }
            }
          }
        }
      }
      #logo {
        margin-top: 3px;
        img {
          max-width: 54px;
        }
        @media (min-width: 768px) {
          max-width: 76px;
         
        }
        @media (min-width: 1280px) {
          left: 0;
        }
      }
    }
	
		#buttons {
			display: flex;
			gap: 1rem;
			button {
				border: none;
				background-color: #ca2216;
				color: white;
				padding: 0.5rem 1.3rem;
				border-radius: 99999px;
				font-size: 90%;
				letter-spacing: 0.09px;
				@media (min-width: 768px) {
					padding: 0.5rem 1.5rem;
					font-size: 96%;
				}
				@media (min-width: 1280px) {
					font-size: 110%;
				}
				&:last-of-type {
					display: none;
					background-color: transparent;
					color: #ca2216;
					border: 2px solid #ca2216;
					@media (min-width: 375px) {
						display: block;
					}
					> div {
						display: flex;
						align-items: center;
						gap: 0.4rem;
						svg {
							font-size: 1.2rem;
						}
					}
        }
      }
      a {
        color: #333;
        text-decoration: none;
        font-size: 108%;
        @media (min-width: 1024px) {
          font-size: 125%;
        }
        &:last-of-type {
          position: relative;
          z-index: 10;
          display: none;
          @media (min-width: 824px) {
            display: flex;
            align-items: center;
            gap: 0.2rem;
            svg {
              margin-top: 7px;
              font-size: 82%;
            }
          }
        }
      }
    }
    
    #buttons {
      display: flex;
      gap: 1rem;
      button {
        border: none;
        background-color: #ca2216;
        color: white;
        padding: 0.25rem 1.3rem;
        border-radius: 99999px;
        font-size: 90%;
        letter-spacing: 0.09px;
        transition: filter 300ms;
        &:hover {
          filter: brightness(1.2);
        }
        @media (min-width: 768px) {
          padding: 0.5rem 1.5rem;
          font-size: 100%;
        }
        &:last-of-type {
          display: none;
          background-color: transparent;
          color: #ca2216;
          border: 2px solid #ca2216;
          @media (min-width: 375px) {
            display: block;
          }
          > div {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            svg {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;
const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const links = [
		{ name: 'menu', to: '' },
		{ name: 'offers', to: '' },
		{ name: 'restaurants', to: '' },
		{ name: 'careers', to: '' },
		{
			name: 'more',
			to: '',
			links: [
				'about BK',
				'nutrition',
				'offer terms',
				'delivery terms',
				"chi'King instant win",
				'FAQ',
				'contact us',
				'terms of service',
				'privacy policy',
				'trademarks',
				'royal perks',
				'royal perks terms of service'
			]
		}
	]

	const ref = useRef(null)
	useOnClickOutside(ref, () => setIsOpen(false))

	return (
		<StyledNavbar>
			<div id="wrapper">
				<div>
          <Link id="logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <nav>
            {links.map((link, i) => (
              <div key={i} ref={ref}>
                <NavLink to="/" onClick={() => i === 4 && setIsOpen(!isOpen)}>
                  {link.name} {i === 4 && <BsFillCaretDownFill />}
                </NavLink>
                {i === 4 &&
                isOpen && (
                  <ul id="drop">
                    {link.links.map((link, i) => (
                      <li key={i}>
                        <Link to="/">{link}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
				<div id="buttons">
					<button>Sign Up</button>
					<button>
						<div>
							<span>$0.00</span>
							<HiOutlineShoppingBag />
						</div>
					</button>
				</div>
			</div>
			<Locationbar />
			<Bottombar />
		</StyledNavbar>
	)
}
export default Navbar
