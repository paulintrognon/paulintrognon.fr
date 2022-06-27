import BoironExperience from './Experiences/BoironExperience'
import DanoneExperience from './Experiences/DanoneExperience'
import EoviExperience from './Experiences/JacquetExperience'
import ReportLinkerExperience from './Experiences/ReportLinkerExperience'
import DcdlExperience from './Experiences/DcdlExperience'
import LeonPaulExperience from './Experiences/LeonPaulExperience'
import CkcNetExperience from './Experiences/CkcNetExperience'
import OzedExperience from './Experiences/OzedExperience'
import SwileExperience from './Experiences/SwileExperience'

const Experiences: React.FC = () => {
  return (
    <div data-cy="Experiences">
      <SwileExperience />
      <BoironExperience />
      <DanoneExperience />
      <EoviExperience />
      <CkcNetExperience />
      <OzedExperience />
      <ReportLinkerExperience />
      <DcdlExperience />
      <LeonPaulExperience />
    </div>
  )
}
export default Experiences
