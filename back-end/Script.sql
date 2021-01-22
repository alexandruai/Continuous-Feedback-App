
ALTER TABLE Utilizator
DROP CONSTRAINT FK_User_Rol;

ALTER TABLE Feedback
DROP CONSTRAINT FK_User_Feedback;

ALTER TABLE Activitate
DROP CONSTRAINT FK_User_Activitate;


DROP TABLE Rol;
DROP TABLE Utilizator;
DROP TABLE Activitate;
DROP TABLE Feedback;

IF (DB_ID('ContinuousFeedback') IS NULL)
 CREATE DATABASE ContinuousFeedback
 GO
 USE ContinuousFeedback
 GO
 IF OBJECT_ID('Rol') IS NULL
--  Crearea tabelei Rol
  CREATE TABLE Rol
  (
  RolId INT NOT NULL IDENTITY(1,1),
  NumeRol NVARCHAR(100) NOT NULL,
  CONSTRAINT PK_Rol PRIMARY KEY(RolId)
  )
  GO
  IF OBJECT_ID('Utilizator') IS NULL
--   Crearea tabelei utilizator
   CREATE TABLE Utilizator
   (
   UserId int NOT NULL IDENTITY(1,1),
   Email NVARCHAR(100) NOT NULL,
   Password NVARCHAR(100)  NOT NULL,
   RolId int NOT NULL 
   CONSTRAINT PK_User PRIMARY KEY(UserId)
   )
   IF OBJECT_ID('FK_User_Rol') IS NULL
   ALTER TABLE Utilizator ADD CONSTRAINT FK_User_Rol FOREIGN KEY (RolId) REFERENCES Rol(RolId)
  GO
  IF OBJECT_ID('Feedback') IS NULL 
--   Crearea tabelei Feedback
   CREATE TABLE Feedback
	 (
	 FeedbackId int NOT NULL IDENTITY(1,1),
	 Mesaj NVARCHAR(500),
	 Recenzie NVARCHAR(100) NOT NULL,
	 DataFeedback NVARCHAR(500) NOT NULL,
	 UserId int NOT NULL
	 CONSTRAINT PK_Feedback PRIMARY KEY(FeedbackId)
	 )
	 IF OBJECT_ID('FK_User_Feedback') IS NULL
	  ALTER TABLE Feedback ADD CONSTRAINT FK_User_Feedback FOREIGN KEY(UserId) REFERENCES Utilizator(UserId)
   GO
   IF OBJECT_ID('Activitate') IS NULL 
--    Crearea tabelei Activitate
    CREATE TABLE Activitate
	 (
      ActivitateId int NOT NULL IDENTITY(1,1),
	  Denumire NVARCHAR(300) NOT NULL,
	  Descriere NVARCHAR(500) NOT NULL,
	  DataActivitate NVARCHAR(500) NOT NULL,
	  Durata int NOT NULL,
	  Cod NVARCHAR(100) NOT NULL,
	  UserId int NOT NULL
	  CONSTRAINT PK_Activitate PRIMARY KEY(ActivitateId),
	  CONSTRAINT UK_Activitate UNIQUE(Cod)
      ) 
	  IF OBJECT_ID('FK_User_Activitate') IS NULL
	  ALTER TABLE Activitate ADD CONSTRAINT FK_User_Activitate FOREIGN KEY(UserId) REFERENCES Utilizator(UserId)
