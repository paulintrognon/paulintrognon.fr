import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import NodeJsLogo from './nodejs.svg'

const NodeJsSkill: React.FC = () => {
  return (
    <Skill icon={<NodeJsLogo />}>
      <SkillTitle>Node.js</SkillTitle>
      <BulletLine>
        6 ans d&apos;expérience en développement de backends et d&apos;API REST en{' '}
        <A href="https://nodejs.org/en/">Node.js</A>
      </BulletLine>
      <BulletLine>
        Frameworks <A href="https://expressjs.com/">Express</A> et{' '}
        <A href="https://docs.nestjs.com/">Nest.js</A>
      </BulletLine>
      <BulletLine>
        <A href="https://docs.nestjs.com/graphql/quick-start">GraphQL</A>&nbsp;: Resolvers &amp;
        Mutations côté back
      </BulletLine>
      <BulletLine>
        ORM&nbsp;&amp; MySQL&nbsp;: <A href="https://sequelize.org/master/">Sequelize</A>,{' '}
        <A href="http://knexjs.org/">Knex.js</A>
      </BulletLine>
      <BulletLine>
        Initié aux APIs temps réel avec <A href="https://socket.io/">Socket.io</A>
      </BulletLine>
      <BulletLine>
        J&apos;ai travaillé avec{' '}
        <A href="https://github.com/rabbitmq/rabbitmq-server#rabbitmq-server">RabbitMQ</A> pendant 3
        ans.
      </BulletLine>
    </Skill>
  )
}
export default NodeJsSkill
