import { number, bool } from "prop-types"
import styled from "styled-components"

export const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.globalPadding(theme.padding)}
  ${({ theme, margin }) => margin && theme.globalMargin()}
`

Inner.propTypes = {
  padding: number.isRequired,
  margin: bool.isRequired
}

Inner.defaultProps = {
  margin: false
}
