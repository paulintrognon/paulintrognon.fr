import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string
  doNotExtendTitle?: true
  description: string
}
const Seo: React.FC<Props> = ({ title, description, doNotExtendTitle, children }) => {
  const getTitle = (): string => {
    const rootTitle = 'Développeur TypeScript Fullstack (React/NodeJS) - Paulin Trognon, Annecy'
    if (!title) {
      return rootTitle
    }
    if (doNotExtendTitle) {
      return title
    }
    return `${title} | ${rootTitle}`
  }
  return (
    <Head>
      <title>{getTitle()}</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  )
}
export default Seo
