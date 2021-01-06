import { PrismaClient, words } from '@prisma/client'

function About({data}: {data: words[]}) {
  return <div>About {data[0].swedish}</div>
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const data = await prisma.words.findMany()

  return {
    props: {
      data
    }
  }
}

export default About