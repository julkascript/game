-- AlterTable
ALTER TABLE "users" ADD COLUMN     "queueId" TEXT;

-- CreateTable
CREATE TABLE "Queue" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Queue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "Queue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
