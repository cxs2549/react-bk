import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsFillCaretDownFill } from 'react-icons/bs'
import Bottombar from './Bottombar/Bottombar'
import Locationbar from './Locationbar/Locationbar'
const StyledNavbar = styled.header`
	height: 60px;
	width: 100%;
	overflow-x: hidden;
	@media (min-width: 768px) {
		height: 98px;
	}
	#wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		min-width: 375px;
		max-width: 1300px;
		margin: 0 auto;
		height: 100%;
		padding: 0 1.25rem;
		position: relative;
		@media (min-width: 768px) {
			/* padding: 0 2rem; */
			justify-content: space-between;
		}
		nav {
			display: none;
			text-transform: capitalize;
			@media (min-width: 768px) {
				display: flex;
				align-items: center;
                margin-left: 90px;
				gap: 1.5rem;
			}
			a {
				color: #333;
				text-decoration: none;
				font-size: 108%;
				&:last-of-type {
					display: none;
					@media (min-width: 824px) {
						display: flex;
						align-items: center;
						gap: .2rem;
						svg {
							margin-top: 4px;
							font-size: 86%;
						}
					}
				}
			}
		}
		img {
			max-width: 48px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			@media (min-width: 768px) {
				max-width: 76px;
                left: 1rem;
                transform: translateX(0);
			}
		}
		#buttons {
			display: flex;
			gap: 1rem;
			button {
				border: none;
				background-color: #ca2216;
				color: white;
				padding: .5rem 1.3rem;
				border-radius: 99999px;
				font-size: 90%;
				letter-spacing: .09px;
				@media (min-width: 768px) {
					padding: .5rem 1.5rem;
				}
				&:last-of-type {
					display: none;
					background-color: transparent;
					color: #ca2216;
					border: 2px solid #ca2216;
					@media (min-width: 768px) {
						display: block;
					}
					> div {
						display: flex;
						align-items: center;
						gap: .4rem;
						svg {
							font-size: 1.2rem;
						}
					}
				}
			}
		}
	}
`
const Navbar = () => {
	const links = [
		{ name: 'menu', to: '', link: [] },
		{ name: 'offers', to: '', link: [] },
		{ name: 'restaurants', to: '', link: [] },
		{ name: 'careers', to: '', link: [] },
		{
			name: 'more',
			to: '',
			link: [ 'about BK', 'nutrition', 'offer terms' ]
		}
	]
	return (
		<StyledNavbar>
			<div id="wrapper">
				<nav>
					{links.map((link, i) => (
						<a href="/">
							{link.name} {i === 4 && <BsFillCaretDownFill />}
						</a>
					))}
				</nav>
				<img src={logo} alt="" />
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
