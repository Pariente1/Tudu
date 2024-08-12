CREATE TABLE tb_usuario
(
    id_usuario serial PRIMARY KEY,
	nick_usuario character(30),
	correo character(60),
    usuario_activo NOT NULL DEFAULT 1,
	marketer bigint NOT NULL DEFAULT 0,
	password bytea NOT NULL
);

CREATE INDEX nick_correo ON tb_usuario (nick_usuario, correo);
ALTER TABLE tb_usuario
ADD UNIQUE KEY uk_correo (correo);


CREATE TABLE tb_datos_personales
(
    fecha_alta date NOT NULL DEFAULT now(),
    nombres character(70) NOT NULL,
    apellido_paterno character(70) NOT NULL,
    apellido_materno character(70) NOT NULL,
    fecha_baja date NOT NULL DEFAULT '1900-01-01'::date,
    CONSTRAINT fk_datos_personales_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES tb_usuario (id_usuario)
);

CREATE TABLE tb_imagenes
(
    fecha_alta date NOT NULL DEFAULT now(),
    foto_perfilB64 text,
    foto_ine text,
    CONSTRAINT fk_tb_imagenes
        FOREIGN KEY (id_usuario)
        REFERENCES tb_usuario (id_usuario)
);


CREATE TABLE cat_rechazos
(
    numero_rechazo serial,
    tipo_rechazo character(25) NOT NULL
);