import styled from 'styled-components'
import Card from "./Card/Card"
const StyledCards = styled.div`
  padding: .75rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 640px) {
    flex-flow: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
    padding: .75rem 0;
    
  }
`
const Cards = () => {
return (
<StyledCards>
  <Card />
  <Card />
  <Card />
  <Card />
</StyledCards>
)
}
export default Cards