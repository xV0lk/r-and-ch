-- CreateEnum
CREATE TYPE "ReqStatus" AS ENUM ('pending', 'aprooved', 'denied');

-- CreateEnum
CREATE TYPE "ReqType" AS ENUM ('suggestion', 'request');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'EMPLOYEE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL,
    "tableNum" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ReqStatus" NOT NULL DEFAULT 'pending',
    "type" "ReqType" NOT NULL,
    "tableNum" INTEGER NOT NULL,
    "songId" TEXT NOT NULL,
    "songTitle" TEXT NOT NULL,
    "songThumbnail" TEXT NOT NULL,
    "songTWidth" INTEGER NOT NULL,
    "songTHeight" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "tableNum" INTEGER NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("tableNum")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3) NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "sugLeft" INTEGER NOT NULL DEFAULT 2,
    "reqLeft" INTEGER NOT NULL DEFAULT 2,
    "tableNum" INTEGER NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "tWidth" INTEGER NOT NULL,
    "tHeight" INTEGER NOT NULL,
    "playlistId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "PlaylistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemCount" INTEGER NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "tWidth" INTEGER NOT NULL,
    "tHeight" INTEGER NOT NULL,
    "player" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Token_tableNum_key" ON "Token"("tableNum");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tableNum_fkey" FOREIGN KEY ("tableNum") REFERENCES "Table"("tableNum") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_tableNum_fkey" FOREIGN KEY ("tableNum") REFERENCES "Table"("tableNum") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_tableNum_fkey" FOREIGN KEY ("tableNum") REFERENCES "Table"("tableNum") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistItem" ADD CONSTRAINT "PlaylistItem_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
