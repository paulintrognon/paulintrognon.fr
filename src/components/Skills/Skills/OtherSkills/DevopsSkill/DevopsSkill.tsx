import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import DockerLogo from './docker.svg'

const DevopsSkill: React.FC = () => {
  return (
    <Skill icon={<DockerLogo />}>
      <SkillTitle>DevOps</SkillTitle>
      <BulletLine>
        Familier avec <A href="https://hub.docker.com/search?q=paulintrognon&type=image">Docker</A>{' '}
        et docker-compose, je crée mes propres containers pour la partie Front
      </BulletLine>
      <BulletLine>
        J&apos;administre moi même les VPS qui hébergent mes projets persos, qui sont déployés via
        des github-actions
      </BulletLine>
      <BulletLine>Bonnes connaissances de Nginx, et d&apos;Apache</BulletLine>
      <BulletLine>
        À l&apos;aise avec Linux : <A href="https://github.com/paulintrognon/.bashrc">Debian</A> est
        mon OS du quotidien
      </BulletLine>
    </Skill>
  )
}
export default DevopsSkill
