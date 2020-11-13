import BoironExperience from './Experiences/BoironExperience'
import DanoneExperience from './Experiences/DanoneExperience'
import EoviExperience from './Experiences/JacquetExperience'
import ReportLinkerExperience from './Experiences/ReportLinkerExperience'
import DCDLExperience from './Experiences/DCDLExperience'
import LeonPaulExperience from './Experiences/LeonPaulExperience'

const Experiences: React.FC = () => {
  return (
    <div>
      <BoironExperience />
      <DanoneExperience />
      <EoviExperience />
      <ReportLinkerExperience />
      <DCDLExperience />
      <LeonPaulExperience />
    </div>
  )
}
export default Experiences
