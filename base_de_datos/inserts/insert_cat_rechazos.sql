CREATE TABLE cat_rechazos
(
    numero_rechazo serial,
    tipo_rechazo character(25) NOT NULL
);

INSERT INTO cat_rechazos(tipo_rechazo) values ('exito'),('error');