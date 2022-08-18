import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      email: 'matttalves@gmail.com'
    }
  })

  console.log(user)
}

main()
  .catch(console.error)
  .catch(async () => {
    await prisma.$disconnect()
  })