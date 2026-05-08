export const TOPICS = [
  "Almacenamiento y Arquitecturas",
  "Procesamiento Distribuido",
  "Calidad del Dato",
  "Observabilidad y DataOps",
  "Visualización y BI",
];

export const QUESTIONS = [
  // ── TEMA 0: Almacenamiento y Arquitecturas ───────────────────────────────────
  {
    t: 0,
    q: "Explica la diferencia entre Schema-on-Read y Schema-on-Write. Identifica a qué sistema pertenece cada uno y argumenta por qué el Schema-on-Read es vital para una Smart City.",
    hint: "Uno obliga a estructurar antes de guardar; el otro guarda primero y estructura al leer.",
    a: `Schema-on-Write: obliga a catalogar los datos y que encajen en una tabla específica ANTES de guardarlos. Modelo rígido del Data Warehouse.

Schema-on-Read: guarda cualquier dato en su formato original y aplica la estructura solo cuando se va a procesar. Base del Data Lake.

Para una Smart City es vital porque aporta flexibilidad ante la gran variedad de formatos (CSV, JSON, imágenes) y permite almacenar toda la información ahora, preparándonos para necesidades de análisis futuras que aún desconocemos.`,
  },
  {
    t: 0,
    q: "Diseña el almacenamiento para tres sistemas: un sistema bancario transaccional, una app móvil con perfiles cambiantes, y un sistema de entrenamiento de ML. Asigna SQL, NoSQL o Data Lake a cada caso y justifica.",
    hint: "Piensa en qué necesita cada uno: integridad ACID, flexibilidad de esquema o capacidad masiva de ficheros.",
    a: `Sistema bancario → SQL (Relacional): entorno OLTP que requiere estructura rígida, escalabilidad vertical e integridad en operaciones rápidas.

App móvil → NoSQL (Documental): esquema dinámico y flexible para evolucionar la estructura sin rigidez, con escalabilidad horizontal para altas cargas.

Entrenamiento ML → Data Lake: escalabilidad horizontal virtualmente infinita para almacenar todo tipo de ficheros históricos crudos y analizarlos mediante OLAP.`,
  },
  {
    t: 0,
    q: "Define el papel de Apache Spark. ¿Por qué es una pieza clave con Data Lakes frente a un motor SQL clásico?",
    hint: "Piensa en dónde almacena los cálculos Spark vs un motor SQL.",
    a: `Apache Spark es el corazón del ecosistema Big Data y su principal herramienta de procesamiento unificado.

Es clave porque opera almacenando los cálculos en memoria (RAM), lo que lo hace increíblemente rápido para procesar datos crudos sobre Data Lakes.

A diferencia de un motor SQL clásico (rígido y con dificultades para escalar horizontalmente sobre datos no estructurados), Spark maneja Batch, Streaming, SQL y Machine Learning de forma unificada sobre arquitecturas distribuidas.`,
  },
  {
    t: 0,
    q: "¿Por qué se descarta CSV/JSON para analítica profunda en favor de Parquet? Explica cómo el diseño columnar optimiza, por ejemplo, calcular la velocidad media del tráfico.",
    hint: "¿Qué tiene que leer un CSV completo vs lo que lee Parquet para obtener una sola columna?",
    a: `CSV: frágil, pesado, no comprime bien y no especifica qué contiene.
JSON: organizado pero muy voluminoso por ser texto.

Parquet es un formato binario superligero y columnar. Si necesitas calcular la velocidad media de los autobuses, un lector CSV tiene que escanear todo el fichero fila a fila. Parquet va directamente a la columna de velocidades ignorando el resto, haciéndolo el más rápido y barato para el análisis.`,
  },
  {
    t: 0,
    q: "Enumera las 4 Vs del Big Data haciendo especial foco en la Veracidad. Describe un escenario de error en sensores urbanos y por qué las herramientas tradicionales no pueden absorberlo.",
    hint: "Las 4 Vs son Volumen, Velocidad, Variedad y... la cuarta es la más difícil de garantizar.",
    a: `Las 4 Vs: Volumen, Velocidad, Variedad y Veracidad.

La Veracidad representa la constante lucha por asegurar la confianza en la información.

Escenario: un sensor de temperatura estropeado que reporta masivamente -50ºC en agosto.

Las herramientas tradicionales no pueden absorberlo porque carecen de capacidad para procesar esta inconsistencia a la velocidad ininterrumpida y en los volúmenes extremos que generan los sensores urbanos.`,
  },
  {
    t: 0,
    q: "Contrasta Escalabilidad Vertical (Scale-Up) vs Horizontal (Scale-Out). ¿Qué tipo de bases de datos usa principalmente cada una?",
    hint: "Uno compra una máquina más potente; el otro añade más máquinas al clúster.",
    a: `Escalabilidad Vertical (Scale-Up): requiere una máquina físicamente más grande, potente y cara. Enfoque propio de las Bases de Datos Relacionales (SQL).

Escalabilidad Horizontal (Scale-Out): amplía la potencia conectando más servidores o nodos al clúster para distribuir la carga. Arquitectura fundamental de Data Lakes y bases de datos NoSQL.`,
  },
  {
    t: 0,
    q: "Define técnicamente qué es un Data Swamp. ¿En qué sistema existe el mayor riesgo y por qué?",
    hint: "¿Qué sistema almacena todo sin orden ni gobierno?",
    a: `Un Data Swamp (pantano de datos) es un repositorio masivo de información caótica e inutilizable.

El mayor riesgo existe en el Data Lake debido a su filosofía de guardar absolutamente todos los datos crudos a gran escala ("almacenar todo, preguntar después"). Si no se establece un gobierno estricto, el almacén se vuelve inmanejable.`,
  },
  {
    t: 0,
    q: "Diferencia OLTP y OLAP indicando en qué arquitectura encaja idealmente cada uno.",
    hint: "Uno procesa transacciones individuales muy rápido; el otro analiza grandes volúmenes históricos.",
    a: `OLTP (Procesamiento Transaccional Online): operaciones ultrarrápidas de lectura, escritura y actualización de registros puntuales. Encaja en Base de Datos Relacional (SQL).

OLAP (Procesamiento Analítico Online): consultas complejas para analizar volúmenes gigantescos de datos históricos en busca de tendencias. Su arquitectura ideal es un Data Lake.`,
  },
  {
    t: 0,
    q: "¿Qué significa que una base de datos Documental (NoSQL) tenga 'Esquema Flexible/Dinámico' y qué ventaja aporta?",
    hint: "¿Todos los documentos de una colección necesitan los mismos campos?",
    a: `Significa que no todos los documentos de una misma colección necesitan tener exactamente la misma estructura interna.

Ventaja: inmensa rapidez y flexibilidad para el desarrollo. Los ingenieros pueden añadir nuevos atributos dinámicamente y evolucionar el diseño sin enfrentar la rigidez de una base SQL.`,
  },
  {
    t: 0,
    q: "Usando la analogía de la 'biblioteca', explica la principal limitación del Data Warehouse ante nuevos datos no convencionales.",
    hint: "¿Qué pasa si llega un libro que no encaja en ninguna estantería catalogada?",
    a: `El Data Warehouse funciona como una biblioteca perfectamente etiquetada donde cada "libro" exige tener un lugar exacto antes de guardarse (Schema-on-Write).

Su limitación: si un dato nuevo no encaja en las tablas fuertemente tipadas ya definidas, el sistema tiene enormes dificultades para asimilarlo. Es extremadamente rígido ante datos no estructurados o semiestructurados.`,
  },

  // ── TEMA 1: Procesamiento Distribuido ────────────────────────────────────────
  {
    t: 1,
    q: "Justifica técnicamente por qué Apache Spark ha desplazado a Hadoop MapReduce. Analiza diferencias en almacenamiento, rendimiento y modelo de procesamiento.",
    hint: "¿Dónde almacena Spark los cálculos vs MapReduce?",
    a: `Spark opera procesamiento unificado en memoria (RAM), hasta 100 veces más veloz que MapReduce.

MapReduce: lee y escribe en discos duros (HDFS) después de cada fase. Solo soporta lotes (Batch) pesados como una lenta cadena de montaje.

Spark: consolida Streaming, SQL y Machine Learning de forma unificada en memoria, permitiendo cambiar de estrategia computacional en milisegundos.`,
  },
  {
    t: 1,
    q: "Diseña dos sistemas: detección de fraudes en milisegundos y panel analítico actualizado cada minuto. Compara Streaming Nativo vs Micro-Batch y asigna Flink o Spark a cada caso.",
    hint: "¿Qué modelo procesa evento a evento? ¿Y cuál agrupa en pequeños lotes?",
    a: `Streaming Nativo: evalúa evento a evento ininterrumpidamente, latencia mínima. → Apache Flink para detección de fraude en milisegundos.

Micro-Batch: lee las transmisiones en pequeñísimas secuencias agrupadas velozmente. → Apache Spark para el panel analítico cada minuto con su capacidad versátil.`,
  },
  {
    t: 1,
    q: "Define el ecosistema de Apache Spark y describe la función de Spark Core, Spark SQL y MLlib. ¿Por qué esta unificación es una ventaja arquitectónica?",
    hint: "¿Qué hace cada módulo y por qué tenerlos todos en una misma plataforma es mejor que tecnologías separadas?",
    a: `Spark Core: motor central que gestiona la comunicación, memoria y tareas del clúster.
Spark SQL: interfaz para lanzar consultas sobre volúmenes masivos mediante SQL estándar.
MLlib: librería para entrenar algoritmos de Machine Learning a enorme escala.

Ventaja arquitectónica: plataforma unificada para casi cualquier tarea de Big Data sin cambiar de tecnología.`,
  },
  {
    t: 1,
    q: "Explica la evolución desde Apache Pig hasta la API de DataFrames de Spark. ¿Qué papel juega el Optimizador Catalyst?",
    hint: "¿Cómo abstrae Catalyst el código del programador para optimizarlo automáticamente?",
    a: `Apache Pig: usaba scripts rudimentarios para abstraer operaciones de bajo nivel de MapReduce.

DataFrames de Spark: API moderna con lenguajes declarativos intuitivos (Python, Java, R).

Optimizador Catalyst: traduce todas las declaraciones del DataFrame en un plan físico de ejecución altamente optimizado aprovechando la memoria del clúster, produciendo el gran salto de rendimiento.`,
  },
  {
    t: 1,
    q: "Si Spark SQL es más rápido que MapReduce, ¿por qué Apache Hive sigue siendo relevante en un Data Lakehouse moderno?",
    hint: "Hive ya no ejecuta consultas, pero sigue siendo el catálogo de metadatos.",
    a: `Aunque las consultas originales HiveQL compiladas a MapReduce eran lentas, Apache Hive mantiene importancia porque actúa como metastore o catálogo central.

En ecosistemas Data Lakehouse modernos, Hive organiza las estructuras mientras Spark actúa como el potente motor de ejecución subyacente.`,
  },
  {
    t: 1,
    q: "Identifica a qué tecnología corresponde cada analogía: 'Cadena de montaje', 'Fórmula 1' y 'Central hidroeléctrica'.",
    hint: "Uno es lento y secuencial, otro es rápido y versátil, el tercero gestiona flujos continuos.",
    a: `Cadena de montaje industrial → Hadoop MapReduce: ejecuta lentamente pasos discretos guardando en discos rígidos.

Motor de Fórmula 1 → Apache Spark: asombrosa versatilidad y rapidez al ejecutar transformaciones en RAM.

Control de central hidroeléctrica → Apache Flink: diseñado para gestionar y reaccionar al instante sobre caudales de información continua.`,
  },
  {
    t: 1,
    q: "Sabiendo que Flink domina en latencia mínima, ¿cuál ha sido históricamente su principal desventaja frente a Spark?",
    hint: "¿En qué tipo de operaciones (SQL, Batch) estaba menos maduro Flink?",
    a: `Su principal desventaja histórica: las APIs y utilidades para operaciones analíticas convencionales (SQL) y el modelo puramente Batch no habían madurado ni estaban tan optimizadas como el vasto ecosistema estándar de Apache Spark.`,
  },
  {
    t: 1,
    q: "Diferencia la complejidad de programación de MapReduce vs las APIs modernas de Spark.",
    hint: "¿En qué lenguaje y con qué nivel de abstracción se programa cada uno?",
    a: `MapReduce: gran dificultad. Requiere código verboso de bajo nivel programando componentes lógicos en Java de manera aislada.

Spark: catálogo moderno de APIs (DataFrames/Datasets) con lenguajes declarativos intuitivos en Python, Java o R. Los analistas son mucho más productivos.`,
  },
  {
    t: 1,
    q: "¿Qué interfaz de Spark está diseñada para un analista tradicional y cuál para un desarrollador o ingeniero de datos?",
    hint: "¿Qué lenguaje usa cada perfil profesional habitualmente?",
    a: `Para analista tradicional → Spark SQL: permite acceder a consultas masivas usando SQL estándar con el que ya está familiarizado.

Para desarrollador/ingeniero → DataFrames y Datasets: APIs para control programático total usando Python, Scala o Java.`,
  },
  {
    t: 1,
    q: "¿Para qué escenarios actuales se considera Hadoop MapReduce totalmente obsoleto?",
    hint: "¿Qué tipos de procesamiento no puede hacer MapReduce?",
    a: `MapReduce es absolutamente obsoleto para la mayoría de los casos de uso nuevos porque es difícil de programar, lento y rígido. No puede atender:
• Necesidades analíticas interactivas.
• Tareas de streaming con latencia mínima.
• Algoritmos de Machine Learning modernos.`,
  },

  // ── TEMA 2: Calidad del Dato ─────────────────────────────────────────────────
  {
    t: 2,
    q: "Explica la diferencia filosófica entre un enfoque Ad-Hoc (Scripting Manual) y un Framework Declarativo para validaciones de calidad. ¿En qué contexto aplicarías cada uno?",
    hint: "Uno tiene control total pero es manual; el otro es estándar y autodocumentado.",
    a: `Ad-Hoc (Scripting Manual): control y flexibilidad absoluta construyendo la prueba en código desde cero. Ideal para prototipos rápidos o reglas muy particulares no cubiertas por frameworks.

Framework Declarativo (Great Expectations): la regla funciona como configuración estandarizada que se autodocumenta. Estándar de oro para pipelines empresariales maduros o proyectos con CI/CD (DataOps).`,
  },
  {
    t: 2,
    q: "Explica el riesgo de leer datos incompletos en un clúster distribuido y cómo lo resuelve Spark. ¿Cuál es la 'Regla de Oro' antes de iniciar una lectura?",
    hint: "¿Qué archivo especial crea Spark cuando termina con éxito?",
    a: `Riesgo: un trabajo puede fallar a medias y dejar carpetas con ficheros corruptos e incompletos.

Solución de Spark: al finalizar con éxito, crea un archivo en blanco llamado _SUCCESS en la carpeta.

Regla de Oro: un pipeline siempre debe confirmar la existencia del archivo _SUCCESS antes de leer. Si no está, el trabajo debe detenerse de inmediato.`,
  },
  {
    t: 2,
    q: "Define Completitud, Validez y Consistencia en el contexto de una Smart City. Pon un ejemplo de fallo en un sensor para cada dimensión.",
    hint: "Completo = sin huecos. Válido = dentro de rangos. Consistente = coherente con su historia.",
    a: `Completitud: no haya huecos en la información.
→ Fallo: sensor apagado que no reporta datos durante horas.

Validez: el dato obedece parámetros definidos.
→ Fallo: sensor enviando -100ºC (físicamente inválido) o IDs erróneos.

Consistencia: comportamiento coherente a lo largo del tiempo.
→ Fallo: sensor que envía 20ºC a las 10:00 y repentinamente 200ºC un minuto después.`,
  },
  {
    t: 2,
    q: "Justifica el uso de la 'Regla de las 3 Desviaciones Estándar' para detectar anomalías. ¿Por qué es 'contextual' y cómo se aplicaría en diferentes sensores de la Smart City?",
    hint: "¿Por qué no podemos aplicar la misma regla a un sensor de autopista y a uno de parque urbano?",
    a: `Justificación: en toda distribución normal, el 99.7% de los valores cae dentro de 3 desviaciones estándar. Los que crucen esa franja son estadísticamente anómalos (outliers).

Es "contextual" porque cada sensor genera su propia normalidad. No podemos medir con la misma regla un sensor de tráfico denso en autopista que un sensor tranquilo en un parque urbano.`,
  },
  {
    t: 2,
    q: "Describe las tres fases de madurez en la gestión de calidad de datos. ¿Por qué construir un mini-framework propio en Spark es un paso vital antes de adoptar herramientas declarativas?",
    hint: "Primero scripts, luego frameworks, luego herramientas corporativas.",
    a: `Fase 1: scripts manuales rápidos para solucionar problemas puntuales.
Fase 2: unificación con un framework declarativo estandarizado.
Fase 3: adopción de sistemas comerciales de alta gestión corporativa.

Construir un mini-framework propio en Spark es vital para asimilar los principios matemáticos internos de la calidad "bajo el capó", antes de pasar a la abstracción de las herramientas de mercado.`,
  },
  {
    t: 2,
    q: "¿Cuál es la diferencia entre Validez y Precisión del dato? Usa el ejemplo del GPS.",
    hint: "Un dato puede seguir el formato correcto pero aun así ser físicamente incorrecto.",
    a: `Validez: verifica si los datos siguen las reglas o formatos definidos (rango correcto, estructura correcta).

Precisión: evalúa si el dato, a pesar de ser válido, refleja correctamente la realidad.

Ejemplo GPS: un sensor que envía coordenadas con formato perfectamente válido pero sitúa al autobús en medio de un lago. Es válido (sigue la estructura) pero impreciso (es físicamente incorrecto).`,
  },
  {
    t: 2,
    q: "Define el problema de la falta de Unicidad en datos hospitalarios y su impacto en la analítica.",
    hint: "¿Qué ocurre si el mismo paciente entra dos veces en el sistema exactamente igual?",
    a: `La falta de unicidad ocurre cuando entran registros duplicados en el sistema.

Ejemplo: dos registros de admisión idénticos para el mismo paciente en el mismo segundo.

Impacto en la analítica: los duplicados engañan al sistema e inflan artificialmente las estadísticas médicas y operativas, arruinando los análisis posteriores.`,
  },
  {
    t: 2,
    q: "¿Qué son los 'Data Docs' y qué ventaja aportan frente al scripting manual?",
    hint: "Se generan automáticamente, no hay que escribirlos a mano.",
    a: `Los Data Docs son páginas HTML generadas automáticamente por los frameworks declarativos a partir de las reglas de calidad y los resultados de validación.

Ventaja: se construyen solos y actúan como una fuente de verdad autodocumentada y siempre actualizada sobre la calidad de los datos, sin necesidad de elaborar informes manualmente.`,
  },
  {
    t: 2,
    q: "¿Cómo se comporta un Framework Declarativo (como Great Expectations) dentro de un pipeline de Airflow cuando los datos fallan?",
    hint: "¿El pipeline continúa o se detiene automáticamente?",
    a: `Los frameworks declarativos están diseñados para la automatización total.

Al integrarse como un paso dentro de un DAG en Airflow, tienen la capacidad de detener automáticamente la ejecución del pipeline si los datos ingeridos no superan el umbral de calidad esperado.`,
  },
  {
    t: 2,
    q: "Menciona las dos ventajas técnicas principales del enfoque Ad-Hoc (Scripting con PySpark).",
    hint: "Una es sobre flexibilidad; la otra sobre dependencias del sistema.",
    a: `1. Flexibilidad Ilimitada: permite programar reglas a medida y lógicas de negocio por complejas o específicas que sean.

2. Sin Dependencias Adicionales: se ejecuta usando las mismas librerías base que ya posee el sistema (Spark o Python), sin instalar nada extra.`,
  },

  // ── TEMA 3: Observabilidad y DataOps ────────────────────────────────────────
  {
    t: 3,
    q: "Describe el flujo de resolución de incidentes en un pipeline de Spark integrando métricas y logs. ¿Cómo pasas de una alerta a encontrar la causa raíz de un fallo de memoria?",
    hint: "Alerta → métricas → logs → causa raíz.",
    a: `1. Grafana lanza alerta automática: la latencia cruzó el SLO estipulado.
2. Diagnóstico en Grafana: el uso de CPU está al 100% justo cuando sube la latencia.
3. Investigación forense en Kibana: filtrar logs en el momento del pico revela "WARN - Container is running out of memory".

Causa raíz: un pico masivo de datos consumió toda la RAM, obligando al recolector de basura de Java a disparar la CPU y ralentizar todo.`,
  },
  {
    t: 3,
    q: "Contrasta Logs y Métricas en formato, volumen de almacenamiento e idoneidad para alertas automáticas.",
    hint: "Uno genera terabytes de texto; el otro genera series numéricas compactas.",
    a: `Logs: eventos discretos en texto (JSON). Generan terabytes al día, muy caros de almacenar. Difíciles para automatizar alertas por búsquedas de texto complejas.

Métricas: mediciones numéricas indexadas (series temporales). Volumen medio pero extremadamente eficientes en almacenamiento y consulta. Ideales para disparar alertas basadas en umbrales numéricos.`,
  },
  {
    t: 3,
    q: "Diferencia SLI, SLO y Alerta. Diseña un ejemplo aplicado a sensores de tráfico de una Smart City.",
    hint: "SLI = qué mides. SLO = el límite aceptable. Alerta = la regla que avisa si se supera.",
    a: `SLI: métrica de rendimiento que elegimos observar.
SLO: umbral de calidad u objetivo aceptable.
Alerta: regla automática que avisa si se incumple la promesa.

Ejemplo Smart City:
• SLI: "latencia del pipeline de sensores de tráfico".
• SLO: "debe mantenerse por debajo de 10 segundos".
• Alerta: "si la latencia cruza 10 segundos durante más de 5 minutos, notificar al ingeniero".`,
  },
  {
    t: 3,
    q: "Explica el stack de Prometheus y Grafana. ¿Por qué Prometheus usa scraping y cómo interactúa Grafana?",
    hint: "¿Prometheus espera que le lleguen datos o va él a buscarlos?",
    a: `Prometheus: base de datos de series temporales que usa scraping (interroga activamente a los servicios cada pocos segundos: "dame tus métricas") almacenando los datos de forma ultrarrápida.

Grafana: capa visual que se conecta a Prometheus, solicita el historial de métricas y renderiza cuadros de mando (líneas, mapas) que se actualizan dinámicamente en tiempo real.`,
  },
  {
    t: 3,
    q: "Analiza el papel de las Trazas como tercer pilar de la observabilidad. ¿Qué formato usan, qué pregunta resuelven y cuál es su mayor debilidad?",
    hint: "Las trazas siguen un paquete a través de múltiples microservicios.",
    a: `Formato: Spans (tramos con inicio, fin, duración y contexto padre/hijo).

Pregunta que resuelven: "¿DÓNDE está el cuello de botella?" al seguir una petición entre múltiples microservicios.

Mayor debilidad: son altamente intrusivas. Requieren que todo el código esté explícitamente "instrumentado" por los desarrolladores, dificultando su adopción masiva.`,
  },
  {
    t: 3,
    q: "Asocia las tecnologías Elasticsearch/Kibana, Prometheus/Grafana y Jaeger/Zipkin con las analogías: 'Diario de a Bordo', 'Panel de Instrumentos' y 'GPS'.",
    hint: "¿Cuál anota eventos, cuál muestra signos vitales y cuál rastrea rutas?",
    a: `Diario de a Bordo (anota cada incidente en texto) → Logs: Elasticsearch/Kibana.

Panel de Instrumentos (signos vitales en tiempo real) → Métricas: Prometheus/Grafana.

GPS (mapea la ruta de la información) → Trazas: Jaeger/Zipkin.`,
  },
  {
    t: 3,
    q: "¿Qué pregunta (Qué, Cómo o Dónde) responde cada uno de los tres pilares del DataOps?",
    hint: "Logs = forense del incidente. Métricas = salud general. Trazas = localización del problema.",
    a: `Logs → "¿QUÉ pasó y POR QUÉ?": información textual detallada de un suceso forense.

Métricas → "¿CÓMO está el sistema AHORA y en el tiempo?": visión histórica general y numérica.

Trazas → "¿DÓNDE está el cuello de botella?": visualiza el punto exacto de fricción entre microservicios.`,
  },
  {
    t: 3,
    q: "Si quieres observar tendencias y salud general de un clúster de Spark durante un año, ¿por qué apoyarte en Logs sería un error arquitectónico?",
    hint: "¿Qué tipo de dato es mejor para tendencias: texto discreto o series numéricas?",
    a: `Sería un error porque la "salud general" exige una visión macro, e intentar obtenerla leyendo y cruzando terabytes de texto discreto (Logs) diarios es totalmente ineficiente y muy caro de almacenar.

Los logs son microscópicos y no son buenos para tendencias. Esa tarea la hacen nativamente las métricas de series temporales.`,
  },
  {
    t: 3,
    q: "¿Cuál es la deficiencia técnica de tener un dashboard increíble en Grafana sin SLIs y SLOs implementados?",
    hint: "¿Puede reaccionar automáticamente un dashboard sin umbrales definidos?",
    a: `Sin SLIs (indicadores) y SLOs (límites), la monitorización se mantiene pasiva y dependiente de un humano mirando la pantalla.

El sistema es incapaz de reaccionar proactivamente lanzando alertas automáticas ante un problema, reduciendo todo a un panel gráfico vistoso pero inservible para el control real de incidentes.`,
  },
  {
    t: 3,
    q: "¿Qué significa técnicamente que una base de datos de métricas indexe con timestamp + labels?",
    hint: "¿Qué información extra aportan las labels a una simple medición numérica?",
    a: `Significa que no se guarda solo un número plano, sino que cada evento se estructura con:
• Un sello de tiempo (timestamp).
• Variables de contexto llamadas labels o etiquetas.

Ejemplo: (timestamp, valor, {sensor="tráfico", zona="norte"})

Esto permite a sistemas como Grafana buscar, filtrar y agrupar métricas con diferentes perspectivas analíticas rápidamente.`,
  },

  // ── TEMA 4: Visualización y BI ───────────────────────────────────────────────
  {
    t: 4,
    q: "¿Por qué es un error crítico conectar Power BI directamente al Data Lake? ¿Cómo resuelve esto el Data Mart?",
    hint: "Usa la analogía de la cocina: ¿quieres cocinar desde cero cada vez que alguien pide un plato?",
    a: `Conectar BI al Data Lake hundiría el rendimiento porque equivaldría a ir al "campo" a cosechar y cocinar millones de ingredientes cada vez que un usuario hace clic.

Solución: el Data Mart funciona como la "despensa" con ingredientes pre-procesados. Spark recoge los datos crudos masivos y prepara tablas pre-calculadas en el Data Mart; las herramientas BI consumen esos paquetes pequeños acelerando inmensamente las respuestas.`,
  },
  {
    t: 4,
    q: "Un Ayuntamiento necesita un informe estratégico con DAX complejo y un panel operativo online para hoy mismo. ¿Qué herramienta elegirías para cada caso y por qué?",
    hint: "Una es 'ingeniería de precisión'; la otra es velocidad inmediata sin complejidad.",
    a: `Informe para el Ayuntamiento → Power BI: su motor Power Query y el lenguaje DAX satisfacen las capacidades para modelar fórmulas densas de altísima complejidad ("caja de ingeniería de precisión").

Panel operativo inmediato → Google Looker Studio: herramienta veloz 100% web con curva de aprendizaje casi nula, ideal cuando se demanda velocidad inmediata sin lógicas analíticas complejas.`,
  },
  {
    t: 4,
    q: "Indica el gráfico exacto para: (1) correlación temperatura/NO2, (2) ubicar zonas de alerta, (3) comparar sensores, (4) visualizar contaminación anual. Y enuncia la Regla de Oro.",
    hint: "Scatter, Mapa, Barras, Líneas... ¿y cuál es la regla para no saturar una presentación?",
    a: `1. Correlación temperatura/NO2 → Gráfico de Dispersión (Scatter Plot).
2. Ubicar zonas de alerta → Mapa geoespacial.
3. Comparar qué sensor registra peores cifras → Gráfico de Barras.
4. Contaminación a lo largo del año → Gráfico de Líneas.

Regla de Oro: nunca saturar la imagen. Usar el título para enunciar la conclusión principal, manteniendo todo claro para entregar insights efectivos.`,
  },
  {
    t: 4,
    q: "Contrasta las filosofías de Tableau vs Power BI. ¿Por qué representan dos formas opuestas de atacar la capa de consumo de datos?",
    hint: "Uno es un estudio de diseño visual; el otro es una caja de ingeniería analítica.",
    a: `Tableau → "Libertad visual": enfocado como un puro estudio de diseño. Audiencia: Artistas y Científicos de Datos que necesitan agilidad ilimitada para explorar patrones visualmente.

Power BI → "Autoservicio Analítico": ingeniería estructurada para analistas financieros que demandan controles minuciosos y modelados rigurosos.

Son diametralmente opuestos: diseño puro vs control analítico.`,
  },
  {
    t: 4,
    q: "¿Por qué dominar Power BI no garantiza el éxito de un proyecto si fallan las etapas previas? ¿Cuál es el rol real del profesional moderno de datos?",
    hint: "Una visualización no puede arreglar una arquitectura rota.",
    a: `No existen "balas de plata": una visualización no arregla arquitecturas quebradas subyacentes.

El éxito depende de lo que se hizo antes: Data Lake bien diseñado, limpieza y preparación real ejecutada con Spark.

Rol del profesional moderno: ser un "traductor" agnóstico con capacidad para comunicar y transformar escenarios complejos, escogiendo las piezas técnicas más adecuadas en cada ocasión.`,
  },
  {
    t: 4,
    q: "¿Cuál es la principal debilidad de Google Looker Studio si el proyecto requiere cruzar complejas reglas financieras?",
    hint: "¿Tiene Looker Studio algo equivalente al DAX de Power BI?",
    a: `Su sistema de modelaje está limitado. Aunque soporta variables interactivas simples, carece totalmente de entornos de programación avanzada en el front-end (como el DAX de Microsoft).

Resulta impotente para calcular o gestionar métricas donde intervengan lógicas complejas directamente en la vista.`,
  },
  {
    t: 4,
    q: "¿Qué dependencia de sistema operativo destaca como gran debilidad de Power BI?",
    hint: "¿En qué sistema operativo funciona Power BI Desktop?",
    a: `Dependencia de Windows: Power BI Desktop requiere exclusivamente el sistema operativo Windows para crear modelos y analítica pesada.

Inhabilita ecosistemas con ordenadores Apple o distribuciones Linux para crear los modelos directamente.`,
  },
  {
    t: 4,
    q: "¿En qué ecosistema corporativo es insuperable la conectividad de Looker Studio? Cita ejemplos concretos.",
    hint: "¿Con qué proveedor de nube está perfectamente integrado?",
    a: `Insuperable en el ecosistema corporativo de Google Cloud.

Conectores impecables: Google Analytics, Google Ads, BigQuery, Google Sheets.

Para organizaciones que ya usan el ecosistema Google, la integración es nativa y sin fricciones.`,
  },
  {
    t: 4,
    q: "¿Cuál es el motor subyacente que otorga a Tableau su agilidad para la exploración de patrones?",
    hint: "Es un motor patentado con nombre propio que traduce arrastres en consultas.",
    a: `El motor exclusivo llamado VizQL: un sistema de traducción directa patentado que ejecuta cálculos ultra eficaces directamente al arrastrar entidades en la interfaz, sin retrasos.

Permite a los usuarios explorar datos de forma visual e intuitiva con respuesta inmediata.`,
  },
  {
    t: 4,
    q: "Relaciona Power BI, Looker Studio y Tableau con sus analogías: 'Navaja Suiza', 'Estudio de Diseño' y 'Caja de Ingeniería de Precisión'.",
    hint: "Uno es para todo, otro es para artistas, el tercero es para ingenieros.",
    a: `Power BI → "Caja de herramientas de ingeniería de precisión": modelado de control exhaustivo para métricas complejas.

Google Looker Studio → "Navaja suiza elegante y conectada": dashboards elementales y compartibles en la nube, para todo.

Tableau → "Estudio de diseño gráfico para datos": gráficos vistosos para artistas de datos.`,
  },

  // ── PREGUNTAS CLAVE AÑADIDAS ─────────────────────────────────────────────────
  {
    t: 0,
    q: "Justifica la elección entre un Data Lake y un Data Warehouse para un proyecto de Smart City con orígenes de datos heterogéneos, utilizando los conceptos de 'Schema-on-Read' y 'Schema-on-Write'.",
    hint: "¿Qué pasa si intentas meter un vídeo de tráfico, un JSON de sensores y un CSV de facturación en un DW con Schema-on-Write?",
    a: `Para una Smart City con datos heterogéneos (sensores, imágenes, JSON, CSV de distintas fuentes), la elección correcta es el Data Lake con Schema-on-Read.

Por qué no el Data Warehouse (Schema-on-Write):
• Exige catalogar y estructurar ANTES de guardar. Con decenas de formatos distintos y cambiantes, el proceso de modelado sería infinito y frágil.
• Cualquier dato nuevo que no encaje en el esquema ya definido es rechazado o requiere una migración costosa.

Por qué sí el Data Lake (Schema-on-Read):
• Almacena absolutamente cualquier dato en su formato original, sin transformación previa.
• La estructura se aplica solo en el momento del análisis, permitiendo explorar datos históricos con perspectivas futuras que aún no conocemos.
• Escala horizontalmente para absorber los volúmenes masivos e imprevisibles de la ciudad.

Conclusión: en un entorno donde la variedad y la velocidad de nuevos formatos es constante, el Data Lake es la única arquitectura sostenible.`,
  },
  {
    t: 0,
    q: "Diseña el almacenamiento para: un sistema transaccional de facturación y un histórico masivo de logs de navegación para entrenar modelos ML.",
    hint: "Uno necesita ACID y transacciones rápidas; el otro necesita escala infinita y ficheros crudos.",
    a: `Sistema transaccional de facturación → Base de Datos SQL (Relacional):
• Entorno OLTP: requiere transacciones atómicas, consistencia ACID y acceso ultrarrápido a registros individuales.
• El esquema rígido garantiza la integridad de los datos financieros.

Histórico masivo de logs de navegación para ML → Data Lake:
• Volumen virtualmente ilimitado de ficheros semiestructurados o no estructurados.
• Arquitectura OLAP: lecturas analíticas masivas para feature engineering y entrenamiento de modelos.
• Escalabilidad horizontal para absorber años de histórico sin degradar el rendimiento.`,
  },
  {
    t: 0,
    q: "¿Por qué Parquet es el 'superhéroe' del Data Lake frente a CSV o JSON? Explica su ventaja más importante con una analogía.",
    hint: "¿Qué tiene que hacer un CSV para darte solo una columna? ¿Y Parquet?",
    a: `CSV y JSON son formatos de texto: pesados, frágiles y sin estructura interna que permita leer selectivamente.

Parquet es un formato binario columnar, el estándar para analítica Big Data porque:

1. Lectura selectiva: si necesitas solo la columna "velocidad", Parquet la lee directamente sin tocar el resto. CSV tiene que recorrer TODAS las filas para extraer ese dato.

2. Compresión brutal: al agrupar datos del mismo tipo, los algoritmos comprimen mucho mejor. Los ficheros Parquet son 5-10x más pequeños.

3. Autoescriptivo: lleva el esquema incrustado (sabe qué es cada columna y de qué tipo).

Analogía: CSV es un libro de texto donde tienes que leer cada página para encontrar una palabra. Parquet es un índice que te lleva directamente al capítulo exacto.`,
  },
  {
    t: 2,
    q: "¿Qué función cumple el fichero _SUCCESS en un Data Lake y qué Regla de Oro se deriva para cualquier pipeline de producción?",
    hint: "¿Qué ocurre si un job de Spark falla a mitad de escritura? ¿Cómo sabes si la carpeta está completa?",
    a: `El problema: un job distribuido de Spark puede fallar a mitad de la escritura, dejando una carpeta con ficheros corruptos o incompletos que parecen válidos desde fuera.

La solución de Spark: al finalizar con ÉXITO la escritura completa, crea automáticamente un fichero vacío llamado _SUCCESS en la carpeta de destino. Es una señal atómica de "todo ha ido bien".

La Regla de Oro para pipelines de producción:
→ NUNCA iniciar la lectura de una carpeta sin verificar primero la existencia de _SUCCESS.

Si el archivo no está presente, el pipeline debe detenerse inmediatamente y no continuar con los pasos siguientes, evitando propagar datos corruptos o incompletos aguas abajo.`,
  },
];

// ── IDs de las preguntas más importantes para el examen ──────────────────────
// Indices en QUESTIONS (0-based) que deben aparecer en el modo "⭐ Más Importantes"
export const IMPORTANT_IDS = [
  1,   // Diseña almacenamiento tres sistemas (SQL/NoSQL/DataLake)
  2,   // Define el papel de Apache Spark vs motor SQL clásico
  3,   // CSV/JSON vs Parquet – diseño columnar
  10,  // Spark vs MapReduce – justificación técnica
  11,  // Fraude + panel analítico: Flink vs Spark Streaming/Micro-Batch
  12,  // Ecosistema Spark: Core, SQL, MLlib
  13,  // Apache Pig → DataFrames, Optimizador Catalyst
  20,  // Ad-Hoc vs Framework Declarativo para calidad
  21,  // Riesgo datos incompletos + archivo _SUCCESS
  22,  // Completitud, Validez y Consistencia en Smart City
  23,  // Regla de las 3 Desviaciones Estándar
  30,  // Flujo resolución de incidentes (alerta → métricas → logs)
  31,  // Logs vs Métricas: formato, volumen, alertas
  32,  // SLI, SLO y Alerta – ejemplo sensores tráfico
  33,  // Prometheus + Grafana: scraping y visualización
  40,  // Power BI directamente al Data Lake → error + Data Mart
  41,  // Ayuntamiento: DAX complejo vs panel operativo inmediato
  42,  // Gráficos específicos (Scatter/Mapa/Barras/Líneas) + Regla de Oro
  50,  // Data Lake vs Data Warehouse para Smart City heterogénea
  51,  // Almacenamiento: facturación transaccional + logs ML
  52,  // Parquet como superhéroe del Data Lake
  53,  // Función del fichero _SUCCESS y Regla de Oro del pipeline
];
