import styled from 'styled-components'
import Card from "./Card/Card"
const StyledCards = styled.div`
  padding: .75rem;
`
const Cards = () => {
return (
<StyledCards>
  <Card />
</StyledCards>
)
}
export default Cards