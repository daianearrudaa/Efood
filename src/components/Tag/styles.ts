import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div`
  background-color: ${colors.orange};
  color: ${colors.beige};
  font-size: 12px;
  font-weight: 700;
  width: 61px;
  height: 26px;
  display: flex; /* Adiciona Flexbox */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  text-align: center;
  position: absolute;
  top: 16px;
  right: 16px;
`
