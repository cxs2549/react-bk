import styled from 'styled-components'
import { ImLocation } from 'react-icons/im'
import { AiOutlineRight } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const StyledLocationbar = styled.div`
	background-color: #2e782a;
	position: fixed;
	bottom: 60px;
	left: 0;
	width: 100%;
	color: white;
	height: auto;
	padding: .5rem 0;
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
		display: flex;
		align-items: center;
		gap: 1rem;
		@media (min-width: 768px) {
			padding: 0 2rem;
			max-width: min-content;
		}
		@media (min-width: 1280px) {
			padding: 0;
		}

		> div {
			span,
			p {
				font-weight: bold;
				font-family: "Paytone One";
			}
			p {
				font-size: 88%;
				@media (min-width: 768px) {
					font-size: 110%;
				}
			}
			&:nth-of-type(2) {
				display: flex;
				flex-flow: column;
				position: relative;
				flex-grow: 1;
				@media (min-width: 768px) {
					flex-grow: 0;
					min-width: 240px;
				}

				input {
					background: none;
					border: none;
					border-bottom: 2px solid white;
					padding: 0.25rem 0;
					color: white;
					font-weight: 600;
					font-size: 97%;
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
				@media (min-width: 375px) {
					min-width: 90px;
				}
			}
		}
		svg {
			&:nth-of-type(1) {
				font-size: 1.3rem;
			}
		}
	}
`
const Locationbar = () => {
	return (
		<StyledLocationbar>
			<div id="wrapContainer">
				<div id="wrap">
					<div>
						<ImLocation />
					</div>
					<div>
						<p>Pick Up</p>
						<input type="text" placeholder="1830 W 8th Street" />
						<AiOutlineRight />
					</div>
					<div>
						<HiOutlineShoppingBag />
						<span>0</span>
					</div>
				</div>
			</div>
		</StyledLocationbar>
	)
}
export default Locationbar
