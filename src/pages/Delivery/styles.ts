import styled from 'styled-components'
import { Sidebar as OriginalSidebar } from '../../components/Cart/styles'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CustomSidebar = styled(OriginalSidebar)`
  /* Adicione aqui os estilos específicos para o componente Delivery */
  h2 {
    color: ${colors.beige}; /* Exemplo: Alterar a cor do título */
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 1em;
  }

  form {
    width: 94%;

    button {
      margin-top: 16px;
      width: 100%;
    }
  }
`

export const DivInputs = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  height: 56px;
  margin-bottom: 8px;
  flex: auto;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    color: ${colors.beige};
  }

  input {
    width: 100%;
    height: 32px;
    border: none;
    background-color: ${colors.beige};
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`