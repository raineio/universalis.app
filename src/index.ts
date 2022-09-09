import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"]
});

const server = express();

async function main() {
    server.use(express.json());
    server.use(express.static("public"));
    server.route("/");

    server.listen(3001, () => {
        console.log("Server listening on port 3001 | http://localhost:3001")
    })

    // const newItem = await prisma.item.create({
    //     data:
    //         id: String,
    // });

    // prisma.$on("query", (e) => {
    //     console.log("Query: ", e)
    // });
    
}

main();