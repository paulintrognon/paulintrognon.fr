import Badge from '../Badge/Badge'
import ReactIcon from './react.svg'

interface Props {
  native?: boolean
}
const ReactBadge: React.FC<Props> = ({ native }) => {
  if (native) {
    return <Badge icon={<ReactIcon />}>React Native</Badge>
  }
  return <Badge icon={<ReactIcon />}>React.js</Badge>
}
export default ReactBadge
