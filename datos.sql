DELETE FROM public."Client";
INSERT INTO public."Client" ("Id", "Email", "Name")
values
(0, 'santi@fiuba.com', 'Santiago FIUBA'),
(1, 'ezequiel@fiuba.com', 'Ezequiel FIUBA'),
(2, 'alex@fiuba.com', 'Alex FIUBA'),
(3, 'contacto@arcor.com', 'Arcor'),
(4, 'info@ypf.com', 'YPF'),
(5, 'clientes@clarin.com', 'Clarín'),
(6, 'soporte@telecom.com.ar', 'Telecom Argentina'),
(7, 'atencion@mercadolibre.com', 'Mercado Libre'),
(8, 'info@galicia.com.ar', 'Banco Galicia'),
(9, 'contacto@pampaenergia.com', 'Pampa Energía'),
(10, 'clientes@patagonia.com.ar', 'Banco Patagonia'),
(11, 'soporte@tenaris.com', 'Tenaris'),
(12, 'atencion@garbarino.com', 'Garbarino');
SELECT setval('public."Client_Id_seq"', 13, false);


DELETE FROM public."User";
INSERT INTO public."User" ("Id", "Email", "Password", "Group")
values
(0, 'santi@fiuba.com', '1234', 3),
(1, 'ezequiel@fiuba.com', '1234', 1),
(2, 'alex@fiuba.com', '1234', 2),
(3, 'contacto@arcor.com', '1234', 1),
(4, 'info@ypf.com', '1234', 1),
(5, 'clientes@clarin.com', '1234', 1),
(6, 'soporte@telecom.com.ar', '1234', 1),
(7, 'atencion@mercadolibre.com', '1234', 1),
(8, 'info@galicia.com.ar', '1234', 1),
(9, 'contacto@pampaenergia.com', '1234', 1),
(10, 'clientes@patagonia.com.ar', '1234', 1),
(11, 'soporte@tenaris.com', '1234', 1),
(12, 'atencion@garbarino.com', '1234', 1);
SELECT setval('public."User_Id_seq"', 13, false);


DELETE FROM public."ConfigurationItem";
INSERT INTO public."ConfigurationItem" (
  "Id", "Title", "Description", "CreatedDate", "UserId", "VersionId",
  "VersionHistory", "Disabled", "ClientEmail", "ClientName")
VALUES
(1, 'Firewall Fortinet', 'FortiGate 60F', '2025-06-25 09:15:00 -0300', 0, 0,
 '{"0":"Titulo:Firewall Fortinet|Descripcion:FortiGate 60F"}', false, 'clientes@patagonia.com.ar', 'Banco Patagonia'),
(2, 'Switch TP-Link', 'TL-SG3428 JetStream 24P', '2025-06-26 10:30:00 -0300', 1, 0,
 '{"0":"Titulo:Switch TP-Link|Descripcion:TL-SG3428 JetStream 24P"}', false, 'soporte@tenaris.com', 'Tenaris'),
(3, 'Notebook HP', 'EliteBook 840 G8', '2025-06-27 11:00:00 -0300', 2, 0,
 '{"0":"Titulo:Notebook HP|Descripcion:EliteBook 840 G8"}', false, 'contacto@arcor.com', 'Arcor'),
(4, 'Servidor Dell', 'PowerEdge R740, 128GB RAM', '2025-06-28 12:15:00 -0300', 0, 0,
 '{"0":"Titulo:Servidor Dell|Descripcion:PowerEdge R740, 128GB RAM"}', false, 'info@galicia.com.ar', 'Banco Galicia'),
(5, 'Router Cisco', 'Modelo RV340 Dual WAN', '2025-06-29 13:00:00 -0300', 1, 0,
 '{"0":"Titulo:Router Cisco|Descripcion:Modelo RV340 Dual WAN"}', false, 'clientes@clarin.com', 'Clarín'),
(6, 'Notebook Dell', 'Latitude 7430 i7 16GB RAM', '2025-06-30 14:10:00 -0300', 0, 0,
 '{"0":"Titulo:Notebook Dell|Descripcion:Latitude 7430 i7 16GB RAM"}', false, 'atencion@garbarino.com', 'Garbarino'),
(7, 'Impresora Epson', 'WorkForce WF-2830', '2025-06-30 15:25:00 -0300', 1, 0,
 '{"0":"Titulo:Impresora Epson|Descripcion:WorkForce WF-2830"}', false, 'info@ypf.com', 'YPF'),
(8, 'Servidor Lenovo', 'ThinkSystem SR650', '2025-07-01 09:00:00 -0300', 2, 0,
 '{"0":"Titulo:Servidor Lenovo|Descripcion:ThinkSystem SR650"}', false, 'soporte@telecom.com.ar', 'Telecom Argentina'),
(9, 'Switch Cisco', 'Catalyst 9200 24P', '2025-07-01 10:15:00 -0300', 0, 0,
 '{"0":"Titulo:Switch Cisco|Descripcion:Catalyst 9200 24P"}', false, 'clientes@clarin.com', 'Clarín'),
(10, 'PC Escritorio', 'AMD Ryzen 7, 32GB RAM', '2025-07-01 11:30:00 -0300', 1, 0,
 '{"0":"Titulo:PC Escritorio|Descripcion:AMD Ryzen 7, 32GB RAM"}', false, 'info@galicia.com.ar', 'Banco Galicia'),
(11, 'Firewall SonicWall', 'TZ270 Advanced', '2025-07-02 09:30:00 -0300', 0, 0,
 '{"0":"Titulo:Firewall SonicWall|Descripcion:TZ270 Advanced"}', false, 'contacto@arcor.com', 'Arcor'),
(12, 'NAS Synology', 'DS920+ 4-bay', '2025-07-02 10:00:00 -0300', 2, 0,
 '{"0":"Titulo:NAS Synology|Descripcion:DS920+ 4-bay"}', false, 'atencion@mercadolibre.com', 'Mercado Libre'),
(13, 'Scanner Fujitsu', 'fi-7160', '2025-07-02 11:10:00 -0300', 1, 0,
 '{"0":"Titulo:Scanner Fujitsu|Descripcion:fi-7160"}', false, 'clientes@patagonia.com.ar', 'Banco Patagonia'),
(14, 'Monitor LG', 'UltraFine 27UN880-B 27"', '2025-07-03 09:45:00 -0300', 0, 0,
 '{"0":"Titulo:Monitor LG|Descripcion:UltraFine 27UN880-B 27\""}', false, 'soporte@tenaris.com', 'Tenaris'),
(15, 'Notebook Apple', 'MacBook Pro M2 14"', '2025-07-03 11:15:00 -0300', 2, 0,
 '{"0":"Titulo:Notebook Apple|Descripcion:MacBook Pro M2 14\""}', false, 'ezequiel@fiuba.com', 'Ezequiel FIUBA'),
(16, 'Access Point Ubiquiti', 'UniFi U6-LR', '2025-07-04 08:00:00 -0300', 1, 0,
 '{"0":"Titulo:Access Point Ubiquiti|Descripcion:UniFi U6-LR"}', false, 'info@ypf.com', 'YPF'),
(17, 'Docking Station', 'Dell WD19TB Thunderbolt', '2025-07-04 10:45:00 -0300', 0, 0,
 '{"0":"Titulo:Docking Station|Descripcion:Dell WD19TB Thunderbolt"}', false, 'santi@fiuba.com', 'Santiago FIUBA'),
(18, 'Cámara de Seguridad', 'Hikvision DS-2CD2043G0', '2025-07-04 13:30:00 -0300', 2, 0,
 '{"0":"Titulo:Cámara de Seguridad|Descripcion:Hikvision DS-2CD2043G0"}', false, 'contacto@pampaenergia.com', 'Pampa Energía'),
(19, 'Tablet Samsung', 'Galaxy Tab S8', '2025-07-05 09:00:00 -0300', 1, 0,
 '{"0":"Titulo:Tablet Samsung|Descripcion:Galaxy Tab S8"}', false, 'atencion@garbarino.com', 'Garbarino'),
(20, 'Proyector BenQ', 'TH685 Full HD', '2025-07-05 10:30:00 -0300', 0, 0,
 '{"0":"Titulo:Proyector BenQ|Descripcion:TH685 Full HD"}', false, 'soporte@telecom.com.ar', 'Telecom Argentina');
SELECT setval('public."ConfigurationItem_Id_seq"', 21, false);


DELETE FROM public."Incident";
INSERT INTO public."Incident"
("Id", "Title", "Description", "CreatedDate", "UserId", "ConfigurationItemId", "ClosedDate", "LastUpdated", "RootCause", "TrackingNumber", "State", "AssignedUserId", "Impact", "Priority", "Comments", "Disabled")
VALUES
(1, 'La tableta no carga bateria', 'Al conectar el cargador la tableta no carga', '2025-04-07 08:23:14.000', 0, 19, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 5, 'low', 'low', '{}', false),
(2, 'No enciende', 'El proyector enciende', '2025-04-09 15:41:32.000', 1, 20, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 3, 'low', 'low', '{}', false),
(3, 'Impresora no imprime', 'La impresora no responde a trabajos de impresión', '2025-04-13 11:12:08.000', 2, 12, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 10, 'low', 'low', '{}', false),
(4, 'Falla en el router', 'Pérdida de conexión intermitente en red', '2025-04-16 17:55:47.000', 0, 5, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 0, 'low', 'low', '{}', false),
(5, 'Problema con el switch', 'El switch no conecta algunos dispositivos', '2025-04-19 09:34:21.000', 1, 9, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 7, 'low', 'low', '{}', false),
(6, 'Servidor lento', 'Retraso en respuestas del servidor', '2025-04-22 13:18:05.000', 2, 8, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 2, 'low', 'low', '{}', false),
(7, 'No funciona el proyector', 'El proyector no enciende', '2025-04-25 19:02:44.000', 0, 20, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 12, 'low', 'low', '{}', false),
(8, 'Falla en el NAS', 'No se pueden acceder a los archivos en el NAS', '2025-04-28 07:45:56.000', 1, 12, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 8, 'low', 'low', '{}', false),
(9, 'Problemas con docking station', 'No reconoce dispositivos USB', '2025-05-01 12:11:33.000', 2, 17, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 1, 'low', 'low', '{}', false),
(10, 'Tablet sin carga', 'La tablet no mantiene carga después de desconectar el cargador', '2025-05-04 16:29:10.000', 0, 19, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 4, 'low', 'low', '{}', false),
(11, 'Error de sincronización de archivos', 'Los archivos no se sincronizan entre dispositivos.', '2025-05-07 10:54:27.000', 1, 20, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 0, 'low', 'low', '{}', false),
(12, 'Tablet se reinicia sola', 'La tablet se reinicia varias veces al día sin aviso.', '2025-05-10 18:37:59.000', 2, 15, '-infinity', '2025-07-05 18:48:01.172', '', 0, 'ABIERTO', 9, 'low', 'low', '{}', false),
(13, 'Servidor lento', 'El servidor responde con lentitud a los usuarios conectados.', '2025-05-13 14:22:18.000', 0, 17, '2025-05-13 14:57:18.000', '2025-07-05 18:48:01.172', '', 0, 'IMPLEMENTADO', 8, 'low', 'low', '{}', false),
(14, 'Tablet se reinicia sola', 'La tablet se reinicia varias veces al día sin aviso.', '2025-05-16 20:48:36.000', 2, 16, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 8, 'low', 'low', '{}', false),
(15, 'Problema con el switch', 'Varios puertos del switch no están funcionando correctamente.', '2025-05-19 09:15:03.000', 0, 3, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 3, 'low', 'low', '{}', false),
(16, 'Problemas con la red Wi-Fi', 'La señal de la red Wi-Fi se pierde constantemente en el segundo piso.', '2025-05-22 13:59:41.000', 1, 12, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 6, 'low', 'low', '{}', false),
(17, 'Impresora no responde', 'La impresora del departamento de contabilidad no imprime ningún documento.', '2025-05-25 17:33:28.000', 3, 14, '2025-05-30 18:09:28.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 4, 'medium', 'low', '{}', false),
(18, 'Pantalla azul al iniciar', 'Varias PCs muestran una pantalla azul al iniciar el sistema.', '2025-05-28 08:47:55.000', 2, 5, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 5, 'high', 'medium', '{}', false),
(19, 'Actualización de software falla', 'La actualización automática del antivirus no se completa correctamente.', '2025-05-31 11:21:17.000', 0, 9, '2025-05-31 11:59:17.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 7, 'medium', 'medium', '{}', false),
(20, 'No funciona el correo electrónico', 'El cliente de correo no permite enviar ni recibir mensajes.', '2025-06-03 15:56:42.000', 4, 2, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 9, 'high', 'high', '{}', false),
(21, 'Corte de energía en servidor', 'El servidor principal se apagó debido a un corte de energía no programado.', '2025-06-06 19:40:29.000', 2, 7, '2025-06-06 20:40:29.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 7, 'high', 'high', '{}', false),
(22, 'Usuarios no pueden iniciar sesión', 'Los usuarios informan que sus credenciales no funcionan en el sistema.', '2025-06-09 07:13:54.000', 1, 10, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 8, 'medium', 'high', '{}', false),
(23, 'Ruido extraño en PC', 'Una computadora emite un ruido fuerte al encenderse, probablemente del ventilador.', '2025-06-12 12:28:11.000', 0, 4, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 3, 'low', 'medium', '{}', false),
(24, 'VPN intermitente', 'La conexión VPN se desconecta sin razón aparente cada ciertos minutos.', '2025-06-15 16:02:37.000', 4, 11, '2025-06-15 16:42:37.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 5, 'medium', 'medium', '{}', false),
(25, 'Error en lector biométrico', 'El sistema biométrico de acceso no reconoce huellas digitales.', '2025-06-18 09:36:20.000', 3, 6, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 4, 'low', 'low', '{}', false),
(26, 'Sistema de tickets caído', 'La aplicación de gestión de tickets no responde desde esta mañana.', '2025-06-21 13:50:58.000', 1, 13, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 6, 'high', 'high', '{}', false),
(27, 'Error en carga de documentos', 'No se pueden subir archivos PDF al sistema interno.', '2025-06-24 18:25:44.000', 2, 8, '2025-06-30 19:44:44.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 5, 'medium', 'low', '{}', false),
(28, 'Monitor parpadea', 'El monitor del puesto 18 parpadea constantemente y dificulta el trabajo.', '2025-06-27 08:59:12.000', 0, 1, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 3, 'low', 'medium', '{}', false),
(29, 'Cliente VPN bloqueado', 'Un usuario fue bloqueado por múltiples intentos fallidos de conexión a la VPN.', '2025-06-30 11:33:27.000', 4, 7, '2025-07-01 11:51:27.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 6, 'medium', 'medium', '{}', false),
(30, 'Correo masivo no entregado', 'Un correo enviado a toda la empresa nunca llegó a los destinatarios.', '2025-07-02 15:07:55.000', 3, 9, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 7, 'medium', 'high', '{}', false),
(31, 'Fallo en el escáner', 'El escáner conectado a la PC de recepción no es reconocido por el sistema.', '2025-07-03 09:42:18.000', 2, 6, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 4, 'low', 'low', '{}', false),
(32, 'Micrófono no funciona en videollamada', 'Durante videollamadas, el micrófono no transmite sonido.', '2025-07-03 17:16:41.000', 1, 10, '2025-07-03 20:53:41.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 5, 'medium', 'medium', '{}', false),
(33, 'Inestabilidad en sistema de inventario', 'El sistema de inventario se congela aleatoriamente.', '2025-07-04 08:51:04.000', 0, 2, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 6, 'medium', 'medium', '{}', false),
(34, 'Cámara de videoconferencia sin señal', 'La cámara del salón principal no emite imagen.', '2025-07-04 12:25:27.000', 3, 12, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 5, 'low', 'medium', '{}', false),
(35, 'Red de invitados sin acceso a internet', 'La red Wi-Fi para invitados no permite navegar.', '2025-07-04 15:59:50.000', 4, 11, '2025-07-05 16:59:50.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 4, 'low', 'low', '{}', false),
(36, 'Retraso en notificaciones de sistema', 'Las notificaciones llegan con varios minutos de retraso.', '2025-07-05 07:34:13.000', 1, 13, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 5, 'medium', 'low', '{}', false),
(37, 'Desincronización de hora', 'La hora del servidor no coincide con la hora real.', '2025-07-05 11:08:36.000', 2, 3, '2025-07-05 11:38:36.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 3, 'low', 'low', '{}', false),
(38, 'Error en sistema de tickets al cerrar incidencia', 'Al intentar cerrar un ticket, el sistema lanza un error.', '2025-07-05 14:42:59.000', 0, 14, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 6, 'medium', 'medium', '{}', false),
(39, 'Actualización de firmware fallida', 'La actualización del firmware del router se interrumpe.', '2025-07-05 18:17:22.000', 3, 14, '2025-07-05 19:17:22.000', '2025-07-05 18:48:01.171', '', 0, 'IMPLEMENTADO', 4, 'medium', 'high', '{}', false),
(40, 'Altavoces sin sonido', 'Los altavoces de la sala de reuniones no emiten sonido.', '2025-07-05 21:51:45.000', 4, 8, '-infinity', '2025-07-05 18:48:01.171', '', 0, 'ABIERTO', 3, 'low', 'medium', '{}', false);
SELECT setval('public."Incident_Id_seq"', 41, false);



DELETE FROM public."Change";
INSERT INTO public."Change" (
  "Id", "Title", "Description", "CreatedDate", "UserId", "ConfigurationItemId",
  "State", "AssignedUserId", "Impact", "Priority", "Comments", "ScheduledDate", "Disabled"
) VALUES
(1, 'Actualización de software', 'Actualizar sistema operativo a la última versión', '2025-05-10 08:30:00.000 -0300', 0, 3, 'ABIERTO', 1, 'medium', 'medium', '{}', '2025-05-11 09:00:00.000 -0300', false),
(2, 'Remplazo de router', 'Cambio de router defectuoso en sede central', '2025-05-28 11:45:00.000 -0300', 1, 5, 'ABIERTO', 2, 'medium', 'high', '{}', '2025-05-28 15:00:00.000 -0300', false),
(3, 'Instalación de antivirus', 'Instalar antivirus corporativo en equipos nuevos', '2025-06-12 10:00:00.000 -0300', 2, 8, 'ABIERTO', 1, 'low', 'low', '{}', '2025-06-13 09:00:00.000 -0300', false),
(4, 'Cambio de servidor', 'Migrar base de datos al nuevo servidor físico', '2025-06-25 14:20:00.000 -0300', 1, 12, 'ABIERTO', 0, 'high', 'high', '{}', '2025-06-26 10:00:00.000 -0300', false),
(5, 'Impresora nueva', 'Cambio de impresora Epson', '2025-07-05 19:28:30.114 -0300', 0, 7, 'ABIERTO', 2, 'low', 'low', '{}', '2025-07-05 21:00:00.000 -0300', false);
SELECT setval('public."Change_Id_seq"', 6, false);



DELETE FROM public."Problem";
INSERT INTO public."Problem" (
  "Id", "Title", "Description", "CreatedDate", "UserId", "AssignedUserId",
  "Impact", "Priority", "Comments", "Disabled"
) VALUES
(1, 'Falla recurrente en conexión Wi-Fi', 'Los usuarios pierden la conexión cada 2 horas', '2025-06-20 08:00:00 -0300', 1, 2, 'medium', 'high', '{}', false),
(2, 'Errores aleatorios en sistema de login', 'Usuarios reportan fallos aleatorios al iniciar sesión', '2025-06-25 09:30:00 -0300', 0, 1, 'medium', 'medium', '{}', false),
(3, 'Lentitud del servidor principal', 'El servidor de archivos presenta lentitud intermitente', '2025-06-29 11:00:00 -0300', 2, 2, 'high', 'high', '{}', false),
(4, 'Reinicio inesperado de PCs', 'Varias estaciones se reinician sin causa aparente', '2025-07-03 14:00:00 -0300', 1, 0, 'high', 'high', '{}', false),
(5, 'Impresora Epson se rompe cada 2 días', 'La impresora de oficina técnica necesita reinicios frecuentes', '2025-07-05 19:49:28.078 -0300', 0, 0, 'low', 'low', '{}', false);
SELECT setval('public."Problem_Id_seq"', 6, false);

