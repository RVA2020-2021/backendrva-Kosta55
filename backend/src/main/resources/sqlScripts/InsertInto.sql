INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES (1,'Fashion and Friends Online','FAFO','Web sajt prodavnice "Fashion and friends" na kome mozete poruciti zeljeni artikl po nizoj ceni.');
INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES (2,'Text On Photo','TOP','Mobilna aplikacija za uredjivanje fotgrafija na vasem telefonu.');
INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES (3,'MAKITA Busilica','MB','Sklop skica svih delova busilice.');
INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES(4,'Nike Air Fox','NAF','Graficki dizajn novog modela Nike patika.');

INSERT INTO "smer"("id","naziv","oznaka")
VALUES (1,'Informacione tehnologije','IT');
INSERT INTO "smer"("id","naziv","oznaka")
VALUES (2,'Racunarstvo i autpmatika','RA');
INSERT INTO "smer"("id","naziv","oznaka")
VALUES (3,'Proizvodno masinstvo','PM');
INSERT INTO "smer"("id","naziv","oznaka")
VALUES (4,'Graficko inzenjerstvo i dizajn','GI');

INSERT INTO "grupa"("id","oznaka","smer")
VALUES (1,'1.Grupa',2);
INSERT INTO "grupa"("id","oznaka","smer")
VALUES (2,'2.Grupa',4);
INSERT INTO "grupa"("id","oznaka","smer")
VALUES (3,'3.Grupa',1);
INSERT INTO "grupa"("id","oznaka","smer")
VALUES (4,'4.Grupa',3);

INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (1,'Milos','Markovic','53/2017',2,4);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (2,'Stefan','Kovacevic','8/2017',1,1);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (3,'Anastasija','Zarkovic','23/2018',4,3);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (4,'Milica','Milosevic','37/2017',3,2);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (5,'Kosta','Milosev','9/2017',4,3);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (6,'Ana','Zarkovic','18/2017',1,1);
