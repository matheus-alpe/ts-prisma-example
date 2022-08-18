import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // create
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Matheus'
  //   }
  // })

  //list
  const users = await prisma.user.findMany()

  console.log(users)
}

main()
  .catch(console.error)
  .catch(async () => {
    await prisma.$disconnect()
  })