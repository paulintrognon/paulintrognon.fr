import Badge from '../Badge/Badge'
import ReactIcon from './react.svg'

interface Props {
  native?: boolean
}
const ReactBadge: React.FC<Props> = ({ native }) => {
  if (native) {
    return (
      <Badge>
        <ReactIcon />
        React Native
      </Badge>
    )
  }
  return (
    <Badge>
      <ReactIcon />
      React.js
    </Badge>
  )
}
export default ReactBadge
