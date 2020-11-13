import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import PhpLogo from './php.svg'

const PhpSkill: React.FC = () => {
  return (
    <Skill icon={<PhpLogo />}>
      <SkillTitle>PHP / Laravel / Symfony</SkillTitle>
      <BulletLine>
        À l&apos;aise manière générale avec le PHP, que j&apos;utilise depuis près de 10 ans
        maintenant.
      </BulletLine>
      <BulletLine>
        Expertise de <A href="https://laravel.com/docs/8.x">Laravel</A> et d&apos;Eloquent
      </BulletLine>
      <BulletLine>Bonne expérience de Symfony et de Doctrine</BulletLine>
      <BulletLine>Connaissances de bases de Drupal</BulletLine>
    </Skill>
  )
}
export default PhpSkill
