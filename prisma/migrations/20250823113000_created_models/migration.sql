-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "user_contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Form" (
    "id" SERIAL NOT NULL,
    "form_id" TEXT,
    "form_title" TEXT NOT NULL,
    "form_desc" TEXT NOT NULL,
    "images" TEXT[],
    "form_budget" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "form_user_name" TEXT,
    "form_user_contact" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "action" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" SERIAL NOT NULL,
    "admin_name" TEXT NOT NULL,
    "admin_email" TEXT NOT NULL,
    "admin_password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "public"."User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "public"."User"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_admin_email_key" ON "public"."Admin"("admin_email");
