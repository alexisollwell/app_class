import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ServicioSocialScreen extends StatefulWidget {
  @override
  ServicioSocialScreenState createState() => ServicioSocialScreenState();
}

class ServicioSocialScreenState extends State<ServicioSocialScreen> {
  final List<String> objetivos = [
    'Desarrollar en el alumno una conciencia de solidaridad y compromiso con la sociedad a la que pertenece.',
    'Adquirir experiencia en las condiciones económicas, políticas y sociales de nuestro país.',
    'Auxiliar de manera directa, dentro de sus posibilidades, al desarrollo de la comunidad y al cambio social.',
    'Satisfacer el requisito legal que todos los estudiantes deben cumplir para obtener el título profesional.',
    'Convertir esta actividad en un verdadero acto de reciprocidad con la sociedad.',
    'Contribuir a la formación académica y capacitación profesional del prestador del Servicio Social.',
  ];

  final List<String> requisitos = [
    'Haber cubierto el 70% de los créditos del plan de estudios correspondiente.',
    'Solicitar la inscripción ante el Departamento de Vinculación y Seguimiento a Egresados.',
    'Obtener la carta de aceptación emitida por la institución receptora.',
    'Registrar las actividades diarias durante el servicio.',
    'Elaborar un reporte final con mínimo una cuartilla.',
    'Cumplir al menos 6 meses y 480 horas.',
    'Obtener carta de terminación emitida por la institución receptora.',
    'Realizar el servicio en asociaciones civiles, organismos públicos, etc.',
  ];

  final List<String> pdfNames = [
    'Registro de programas',
    'Solicitud de inscripción',
    'Reporte de actividades',
    'Unidades receptoras',
    'Guía integral',
  ];

  final List<String> pdfPaths = [
    'assets/pdfs/registro.pdf',
    'assets/pdfs/solicitud.pdf',
    'assets/pdfs/reporte.pdf',
    'assets/pdfs/unidades.pdf',
    'assets/pdfs/guia.pdf',
  ];

  bool mostrarObjetivos = true;

  void openPdf(String assetPath) async {
    final Uri url = Uri.parse(assetPath);
    if (await canLaunchUrl(url)) {
      await launchUrl(url);
    } else {
      throw 'No se pudo abrir el archivo: $assetPath';
    }
  }

  void toggleObjetivos(bool valor) {
    setState(() {
      mostrarObjetivos = valor;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Guía de Servicio Social'),
        backgroundColor: const Color(0xFF0062B1),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text(
                        '¡Estás a un paso de titularte!',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Color(0xFF0062B1),
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        'El Servicio Social Profesional en CESUN es más que una obligación; es tu oportunidad de llevar los conocimientos adquiridos a la práctica real, alineándolos con nuestra filosofía y misión institucional.',
                        style: TextStyle(color: Colors.black),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text(
                        '¿Es necesario?',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Color(0xFF0062B1),
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        'Recuerda que cumplir con el servicio social profesional no solo es un requisito legal, también es una etapa esencial para tu desarrollo académico y humano. Para obtener tu título de Licenciatura en CESUN, este paso es indispensable.',
                        style: TextStyle(color: Colors.black),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(flex: 3, child: _buildToggleCard()),
                const SizedBox(width: 16),
                Expanded(flex: 2, child: _buildDownloadsCard()),
              ],
            ),
            const SizedBox(height: 32),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                _buildContactCard(
                  nombre: 'Julia Brizeida Chávez Guzmán',
                  puesto: 'Coordinadora de Servicios Estudiantiles',
                  correo: 'coord.serviciosestudiantiles@cesun.edu.mx',
                  telefono: '+52 664 903 4115 Ext. 141',
                ),
                const SizedBox(width: 24),
                _buildContactCard(
                  nombre: 'Yair Daniel Álvarez Terán',
                  puesto: 'Analista de Vida Estudiantil',
                  correo: 'vidaestudiantil@cesun.edu.mx',
                  telefono: '+52 664 903 4115 Ext. 160',
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildToggleCard() {
    return Padding(
      padding: const EdgeInsets.all(0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              IconButton(
                iconSize: 48,
                icon: Icon(
                  Icons.menu_book,
                  color: mostrarObjetivos ? Color(0xFF0062B1) : Colors.green,
                ),
                onPressed: () => toggleObjetivos(true),
              ),
              Text(
                'Objetivos',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: mostrarObjetivos ? Color(0xFF0062B1) : Colors.green,
                ),
              ),
              const SizedBox(height: 16),
              IconButton(
                iconSize: 48,
                icon: Icon(
                  Icons.menu_book,
                  color: mostrarObjetivos ? Colors.green : Color(0xFF0062B1),
                ),
                onPressed: () => toggleObjetivos(false),
              ),
              Text(
                'Requisitos',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: mostrarObjetivos ? Colors.green : Color(0xFF0062B1),
                ),
              ),
            ],
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  mostrarObjetivos ? 'OBJETIVOS' : 'REQUISITOS',
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                    color: Colors.lightGreen,
                  ),
                ),
                const SizedBox(height: 8),
                ...List.generate(
                  mostrarObjetivos ? objetivos.length : requisitos.length,
                  (index) => Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2.0),
                    child: Text(
                      '${index + 1}. ${(mostrarObjetivos ? objetivos : requisitos)[index]}',
                      style: const TextStyle(color: Colors.black),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDownloadsCard() {
    return Padding(
      padding: const EdgeInsets.all(0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Descarga los formatos',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 18,
              color: Color(0xFF0062B1),
            ),
          ),
          const SizedBox(height: 8),
          ...List.generate(
            pdfNames.length,
            (index) => Padding(
              padding: const EdgeInsets.symmetric(vertical: 4.0),
              child: OutlinedButton(
                style: OutlinedButton.styleFrom(
                  side: const BorderSide(color: Color(0xFF0062B1)),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 12.0,
                    vertical: 12.0,
                  ),
                ),
                onPressed: () => openPdf(pdfPaths[index]),
                child: Text(
                  pdfNames[index],
                  style: const TextStyle(color: Color(0xFF0062B1)),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContactCard({
    required String nombre,
    required String puesto,
    required String correo,
    required String telefono,
  }) {
    return Card(
      elevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
      child: Container(
        width: 300,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              '¿Necesitas ayuda?',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Color(0xFF0062B1),
              ),
            ),
            const Divider(color: Color(0xFF0062B1)),
            Text(
              'Contacta a $nombre',
              style: const TextStyle(
                fontWeight: FontWeight.bold,
                color: Color(0xFF0062B1),
              ),
            ),
            const SizedBox(height: 4),
            Text(puesto, style: const TextStyle(color: Colors.grey)),
            const SizedBox(height: 4),
            Text(correo, style: const TextStyle(color: Colors.grey)),
            const SizedBox(height: 8),
            OutlinedButton(
              onPressed: () {},
              style: OutlinedButton.styleFrom(
                side: const BorderSide(color: Color(0xFF0062B1)),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
              child: Text(
                'Llamar $telefono',
                style: const TextStyle(color: Color(0xFF0062B1)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
