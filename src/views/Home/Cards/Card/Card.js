import styled from 'styled-components'
import card1 from '../../../../assets/cards/card-1.png'
const StyledCard = styled.div`
  border: 2px solid white;
  border-radius: 8px;
  min-height: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .75rem;
  padding-bottom: 4px;
  font-family: 'Paytone One';
  position: relative;
  max-width: 440px;
  >div:first-of-type{
    min-width: 50%˛;
    max-width: 50%˛;
    h5 {
      font-size: 85%;
    }
    h4 {
      font-size: 95%;
      line-height: .9;
    }
    h1 {
      font-size: 360%;
      margin-top: -20px;
      color: var(--brandRed);
      span {
        font-size: 70%;
      }
    }
    p {
      font-size: 80%;
      line-height: 1.1;
      max-width: 75%;
      margin-top: -6px;
    }
    h3 {
      font-size: 80%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin-top: 1rem;
    }
  }
  >div:last-of-type {
    
    position: absolute;
    right: 8px;
    bottom: 0;
    display: flex;
    padding: 1rem 0;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
    img {
      width: 100%;
      max-width: 150px;
      object-fit: contain;
     
    }
    button {
      border: none;
        background-color: #ca2216;
        color: white;
        padding: 0.5rem .75rem;
        border-radius: 99999px;
        font-size: 90%;
        letter-spacing: 0.09px;
        transition: filter 300ms;
        &:hover {
          filter: brightness(1.2);
        }
    }
  }
`
const Card = () => {
return (
<StyledCard>
  <div>
    <h5>Have no mo' FOMO.</h5>
    <h4>Royal Perks members <br /> are getting</h4>
    <h1>2<span>for</span>$5</h1>
    <p>Stop missing out. Tap to join and get 2 select menu items for just $5* on the BK App or bk.com, plus more great deals.</p>
    <h3>*Click here for terms.</h3>
  </div>
  <div>

    <img src={card1} alt="" />
    <button>Join Now</button>
  </div>
</StyledCard>
)
}
export default Card