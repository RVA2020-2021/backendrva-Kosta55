INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES (nextval('projekat_seq'),'Fashion and Friends Online','FAFO','Web sajt prodavnice "Fashion and friends" na kome mozete poruciti zeljeni artikl po nizoj ceni.');
INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES (nextval('projekat_seq'),'Text On Photo','TOP','Mobilna aplikacija za uredjivanje fotgrafija na vasem telefonu.');
INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES (nextval('projekat_seq'),'MAKITA Busilica','MB','Sklop skica svih delova busilice.');
INSERT INTO "projekat"("id","naziv","oznaka","opis")
VALUES(nextval('projekat_seq'),'Nike Air Fox','NAF','Graficki dizajn novog modela Nike patika.');

INSERT INTO "smer"("id","naziv","oznaka")
VALUES (nextval('smer_seq'),'Informacione tehnologije','IT');
INSERT INTO "smer"("id","naziv","oznaka")
VALUES (nextval('smer_seq'),'Racunarstvo i autpmatika','RA');
INSERT INTO "smer"("id","naziv","oznaka")
VALUES (nextval('smer_seq'),'Proizvodno masinstvo','PM');
INSERT INTO "smer"("id","naziv","oznaka")
VALUES (nextval('smer_seq'),'Graficko inzenjerstvo i dizajn','GI');

INSERT INTO "grupa"("id","oznaka","smer")
VALUES (nextval('grupa_seq'),'1.Grupa',2);
INSERT INTO "grupa"("id","oznaka","smer")
VALUES (nextval('grupa_seq'),'2.Grupa',4);
INSERT INTO "grupa"("id","oznaka","smer")
VALUES (nextval('grupa_seq'),'3.Grupa',1);
INSERT INTO "grupa"("id","oznaka","smer")
VALUES (nextval('grupa_seq'),'4.Grupa',3);

INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (nextval('student_seq'),'Milos','Markovic','53/2017',2,4);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (nextval('student_seq'),'Stefan','Kovacevic','8/2017',1,1);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (nextval('student_seq'),'Anastasija','Zarkovic','23/2018',4,3);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (nextval('student_seq'),'Milica','Milosevic','37/2017',3,2);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (nextval('student_seq'),'Kosta','Milosev','9/2017',4,3);
INSERT INTO "student"("id","ime","prezime","broj_indeksa","grupa","projekat")
VALUES (nextval('student_seq'),'Ana','Zarkovic','18/2017',1,1);
