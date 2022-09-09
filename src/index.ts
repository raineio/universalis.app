import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"]
});

async function main() {
    const newItem = await prisma.item.create({
        data:
            
    });

    prisma.$on("query", (e) => {
        console.log("Query: ", e)
    });
}

main();