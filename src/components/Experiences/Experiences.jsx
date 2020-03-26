import FadeIn from '../FadeIn/FadeIn';
import FindoutExperience from './FindoutExperience';
import OzedExperience from './OzedExperience';
import DcdlExperience from './DcdlExperience';
import CkcNetExperience from './CkcNetExperience';
import IoLabExperience from './IoLabExperience';

export default () => (
  <FadeIn>
    <IoLabExperience />
    <OzedExperience />
    <CkcNetExperience />
    <FindoutExperience />
    <DcdlExperience />
  </FadeIn>
);
