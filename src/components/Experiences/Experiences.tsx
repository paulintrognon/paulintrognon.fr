import ExperienceGroup from './Common/ExperienceGroup/ExperienceGroup'
import PeriodSeparator from './Common/PeriodSeparator/PeriodSeparator'
import BoironExperience from './Experiences/BoironExperience'
import CkcNetExperience from './Experiences/CkcNetExperience'
import DanoneExperience from './Experiences/DanoneExperience'
import DcdlExperience from './Experiences/DcdlExperience'
import JacquetExperience from './Experiences/JacquetExperience'
import LeonPaulExperience from './Experiences/LeonPaulExperience'
import NexteneoExperience from './Experiences/NexteneoExperience'
import OzedExperience from './Experiences/OzedExperience'
import ReportLinkerExperience from './Experiences/ReportLinkerExperience'
import SwileExperience from './Experiences/SwileExperience'

const Experiences: React.FC = () => {
  return (
    <div data-cy="Experiences">
      <NexteneoExperience />
      <PeriodSeparator />
      <SwileExperience />
      <PeriodSeparator />
      <ExperienceGroup
        title="Développeur Freelance"
        mission="Missions en prestation chez mes clients"
        timePeriod="01.2017 - 12.2020"
      >
        <BoironExperience />
        <DanoneExperience />
        <JacquetExperience />
        <CkcNetExperience />
        <OzedExperience />
      </ExperienceGroup>
      <PeriodSeparator />
      <ReportLinkerExperience />
      <PeriodSeparator />
      <ExperienceGroup title="Développeur Stagiaire" mission="Stages pendant mes études">
        <DcdlExperience />
        <LeonPaulExperience />
      </ExperienceGroup>
    </div>
  )
}
export default Experiences
