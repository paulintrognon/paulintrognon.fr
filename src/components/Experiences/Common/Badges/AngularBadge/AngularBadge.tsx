import Badge from '../Badge/Badge'
import AngularIcon from './angular.svg'

interface Props {
  isJs?: boolean
}
const AngularBadge: React.FC<Props> = ({ isJs = false }) => (
  <Badge>
    <AngularIcon />
    Angular{isJs ? '.js' : null}
  </Badge>
)
export default AngularBadge
