import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import ElasticSearchLogo from './elasticsearch.svg'

const ElasticSearchSkill: React.FC = () => {
  return (
    <Skill icon={<ElasticSearchLogo />}>
      <SkillTitle>ElasticSearch</SkillTitle>
      <BulletLine>
        3 ans d&apos;utilisation d&apos;
        <A href="https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html">
          ElasticSearch
        </A>{' '}
        au sein de l&apos;entreprise <A href="https://www.reportlinker.com/">ReportLinker</A>
      </BulletLine>
      <BulletLine>Bonne maîtrise de la technologie et de son langage de requête</BulletLine>
      <BulletLine>
        J&apos;ai suivi une formation sur l&apos;experience de recherche à{' '}
        <A href="https://irsg.bcs.org/SearchSolutions/2015/sse2015.php">Search Solutions 2015</A>
      </BulletLine>
    </Skill>
  )
}
export default ElasticSearchSkill
