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
        height: 69px;
        @media (min-width: 768px) {
            bottom: 0;

        }
        #wrap {
            padding: 0 .5rem;
            height: 100%;
            display: grid;
            align-items: center;
            grid-template-columns: auto 8.5fr 2.2fr;
            gap: 1rem;
            /* align-items: center; */
            @media (min-width: 768px) {
                padding: 0 2rem;
                max-width: 65%;
                margin: 0 auto;
            }
           

        > div {
            span {
                font-weight: bold;
                font-family: 'Paytone One';
            }
            &:nth-of-type(2) {
                display: flex;
                flex-flow: column;
                position: relative;
                input {
                    background: none;
                    border: none;
                    border-bottom: 2px solid white;
                    padding: .25rem 0;
                    color: white;
                    font-weight: 600;
                    font-size: 97%;
                }
                svg {
                    position: absolute;
                    right: 0;
                    font-size: 1.1rem;
                    bottom: .3rem;
                }
            }
            &:last-of-type {
                background-color: #fff;
                color: #2e782a;
                display: flex;
                align-items: center; 
                justify-content: center;
                max-width: 90px;
                gap: .4rem;
                padding: .25rem 0;
                border-radius: 99999px;
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
			<div id="wrap">
                <div>
                    <ImLocation />
                </div>
                <div>
                    <span>For item availability</span>
                    <input type="text" placeholder="Choose a Location" />
                    <AiOutlineRight />
                </div>
                <div>
                    <HiOutlineShoppingBag />
                                <span>0</span>
                </div>
            </div>
		</StyledLocationbar>
	)
}
export default Locationbar
