import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  // create
  const user = await prisma.user.create({
    data: { 
      name: 'Matheus',
      email: 'matttalves@gmail.com',
      age: 26,
      userPreferences: {
        create: {
          emailUpdates: true
        }
      },
    },
    select: {
      name: true,
      userPreferences: true
    }
  })

  console.log(user)
}

main()
  .catch(console.error)
  .catch(async () => {
    await prisma.$disconnect()
  })