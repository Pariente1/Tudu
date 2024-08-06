CREATE OR REPLACE FUNCTION fn_validar_cuenta(character,character)
  RETURNS TABLE(tValor integer, tTipo_rechazo TEXT)
  LANGUAGE 'plpgsql'
  COST 100
  VOLATILE PARALLEL UNSAFE
AS $BODY$

DECLARE
  cNick_correo   ALIAS FOR $1;
  cPasswor      ALIAS FOR $2;
  iValor       INTEGER;
  cTipo_rechazo CHARACTER(25);

BEGIN
  -- Combinar las dos consultas en una sola
  SELECT INTO iValor
    CASE WHEN COUNT(*) > 0 THEN 1 ELSE 2 END
  FROM tb_usuario
  WHERE correo = cNick_correo AND password = cPasswor;

  SELECT tipo_rechazo INTO cTipo_rechazo
  FROM cat_rechazos WHERE numero_rechazo = iValor;

  RETURN QUERY
  SELECT numero_rechazo::integer, tipo_rechazo::text
  FROM cat_rechazos WHERE numero_rechazo = iValor;

END;
$BODY$;
ALTER FUNCTION fn_validar_cuenta(character,character)
  OWNER TO postgres;


--SELECT fn_validar_cuenta('jchavez4164@gmail.com','Prueba123')    