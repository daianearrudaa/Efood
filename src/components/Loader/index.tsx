import { BeatLoader } from 'react-spinners'
import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <BeatLoader color={colors.white} />
  </Container>
)

export default Loader
