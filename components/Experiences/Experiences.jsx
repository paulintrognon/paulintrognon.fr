import FadeIn from '../FadeIn/FadeIn';
import FindoutExperience from './FindoutExperience';
import OzedExperience from './OzedExperience';
import DcdlExperience from './DcdlExperience';
import LeonPaulExperience from './LeonPaulExperience';
import CkcNetExperience from './CkcNetExperience';
import IoLabExperience from './IoLabExperience';

export default () => (
  <div>
    <FadeIn>
      <IoLabExperience />
      <OzedExperience />
      <CkcNetExperience />
      <FindoutExperience />
      <DcdlExperience />
      <LeonPaulExperience />
    </FadeIn>
  </div>
);
