# Topicos_Espaciales_Telematica
## Este proyecto tiene como fin construir una app para almacenamiento, procesamiento y visualizacion de datos asociados a un usuario aplicando herramientas de desarrollo web modernas ademas del conocimiento sobre desarrollo web

# Requisitos funcionales
# - Se debe contar un incio de sesion para autenticacion de usuarios
# - La aplicacion debe permitir visualizar los datos asociados al usuario
# - La aplicacion debe permitir mantener la sesion iniciada
# - La aplicacion debe de ser de facil uso

# Requisitos no funcionales
# - La aplicacion no debe permitir la visualizacion de los datos del usuario
# - La aplicacion debe de contar con cifrado de contraseñas
# - La aplicacion debe de tener las rutas protegidas
# - La aplicacion debe de responder en menos de 3 segundos


# Tecnologias de desarrollo  - MERN
# - En el frondend se uso Reactjs, generando el proyecto con su herramienta y luego se añadio    que utiliza css para el diseño grafico
# - En el backend se uso nodejs con express y mongodb, ademas para la ecriptacion de contraseñas se uso bcrypt, para la generacion de tokens se uso json web token, adicional se usaron algunos modulos como nodemon para facilidad de desarrollo

# Servicios de backend y su especificacion
# El api se divide en dos partes los servicios que se ofrecen para el usuario y los que se ofrecen para el "data" o el dispositivo arduino
# - Usuario: posee dos servicios, uno de registro, que pasa por una primera ruta para identificar la categoria, luego pasa a la identificacion del tipo de peticion, en este caso es POST, se encripta la contraseña y se hace el registro en mongodb. Tenemos un segundo servicio que es el de logeo o inicio de sesion, este al ser identificado (es tipo POST porque envia dos datos y responde con un token) realiza la confirmacion de los datos con la base de datos y luego genera un token con JWT tenniendo en cuenta los datos recibidos, una clave especificada y el tiempo que durara el token
# - Datos: posee dos servicios, el primero es el registro de datos, para realizar el registro de datos al llegar la peticion se identifica el tipo de categoria y luego el tipo de peticion, antes de llevar acabo las tareas de dicha peticion se hace un middleware que verifica que en la cabecera exista un token de autenticacion, si lo hay continua y en el metodo de registro se proporciona la clave para verificar que el token es veridico, esto quiere decir que si existe un dispositivo no identificado no podra guardar datos. Para el segundo servicio se hace una peticion get desde react, esta peticion tambien esta protegida por lo tanto el usuario debe de estar autenticado o no podra recuperar los datos

# Autenticacion
# Como se menciona en el apartado anterior, utilice en react la herramienta de sessionStorage para mantener la autenticacion esta la dada de baja, esto al generar un token con unos datos y una contraseña que permite manipular el acceso a las rutas del frondend, en el api (backend) se realizo con JWT que el dispositivo al inciar sesion o el usuario, los servicios especificados anteriormente devulven un token, con este se puede realizar las peticiones enviandolo en la cabecera de la peticion, de lo contrario no habra acceso a las rutas protegidas

# Dificultades
# - Temas que aun se desconocian o tenia informacion incompleta, el tema de seguridad fue nuevo para mi, aun asi pude dar solucion a gran parte de lo requerido en objetivos del proyceto
# - No tenia conocimiento del tema de seguridad, lleve a cabo uno de los metodos mas sencillos, el reto es mejorar estos metodos para una seguridad mas robusta en mis desarrollos
# - Realmente me faltan muchas habilidades, pero para este proyecto podria terminar los pequeños faltantes, como el diseño o la autenticacion del dispositivo, siendo este ultimo algo que ya hice con el usuario
# - N/A
# - Temas de seguridad, integracios del entorno MERN, uso de middlewares e introducir un poco del concepto de responsive
