import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class PracticasProfesionalesScreen extends StatefulWidget {
  const PracticasProfesionalesScreen({Key? key}) : super(key: key);

  @override
  State<PracticasProfesionalesScreen> createState() =>
      _PracticasProfesionalesScreenState();
}

class _PracticasProfesionalesScreenState
    extends State<PracticasProfesionalesScreen> {
  int selectedTab = 0;

  final List<String> cumplimientoList = [
    "Integrar al alumno en el ámbito laboral, permitiéndole aplicar los conocimientos adquiridos durante su formación académica.",
    "Facilitar la adquisición de experiencia práctica en el área profesional correspondiente a su carrera.",
    "Fomentar el desarrollo de habilidades y competencias necesarias para su futuro desempeño profesional.",
    "Contribuir al proceso de inserción laboral del estudiante, facilitando el establecimiento de contactos profesionales.",
    "Proporcionar al alumno una visión real de las condiciones y exigencias del mercado laboral.",
    "Fortalecer la relación entre la institución educativa y el sector productivo.",
  ];

  final List<String> requisitosList = [
    "Estar inscrito y tener un avance académico mínimo del 70% en créditos.",
    "No adeudar materias seriadas.",
    "Haber cursado y aprobado el taller de habilidades profesionales.",
    "Presentar carta de presentación emitida por la institución.",
    "Registrar el proyecto en el sistema institucional.",
    "Cubrir un mínimo de 480 horas en un periodo no menor a 6 meses.",
  ];

  final List<Map<String, String>> pdfFiles = [
    {"title": "Solicitud de inscripción", "url": "assets/pdfs/solicitud.pdf"},
    {"title": "Reporte de actividades", "url": "assets/pdfs/reporte.pdf"},
    {"title": "Unidades receptoras", "url": "assets/pdfs/unidades.pdf"},
    {"title": "Guía integral", "url": "assets/pdfs/guia.pdf"},
  ];

  Future<void> _launchPDF(String path) async {
    final Uri url = Uri.parse(path);
    if (!await launchUrl(url)) {
      throw 'No se pudo abrir el PDF: $path';
    }
  }

  @override
  Widget build(BuildContext context) {
    final isCumplimiento = selectedTab == 0;
    final sectionTitle = isCumplimiento
        ? "¿Qué es importante?"
        : "¿Qué necesitas?";
    final sectionList = isCumplimiento ? cumplimientoList : requisitosList;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Prácticas Profesionales"),
        backgroundColor: Colors.blue,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    "Ponte a prueba y gana experiencia",
                    style: Theme.of(context).textTheme.titleLarge!.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Colors.blue[900],
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            const Text(
              "Tu Práctica Profesional en CESUN está diseñada para enriquecer tu formación. Siguiendo tu Plan de Estudios, te preparará específicamente para los retos de tu carrera.\n\n"
              "Tus Prácticas Profesionales siempre se alinearán con lo que tu Plan de Estudios dicta. ¡Nada de desvíos, todo en orden!\n\n"
              "Es importante que sigas fielmente lo que tu carrera y Plan de Estudios especifican para tus prácticas. ¡Estamos aquí para guiarte!",
              style: TextStyle(color: Colors.black),
            ),
            const SizedBox(height: 20),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Column(
                  children: [
                    _buildTabButton(Icons.menu_book, "Cumplimiento", 0),
                    const SizedBox(height: 10),
                    _buildTabButton(Icons.menu_book_outlined, "Requisitos", 1),
                  ],
                ),
                const SizedBox(width: 16),
                Expanded(
                  flex: 2,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        sectionTitle,
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: Colors.grey[100],
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Column(
                          children: sectionList
                              .map(
                                (text) => Padding(
                                  padding: const EdgeInsets.only(bottom: 8),
                                  child: Row(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      const Icon(
                                        Icons.circle,
                                        size: 8,
                                        color: Colors.blue,
                                      ),
                                      const SizedBox(width: 8),
                                      Expanded(
                                        child: Text(
                                          text,
                                          style: const TextStyle(
                                            color: Colors.black,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              )
                              .toList(),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  flex: 1,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        "Descarga los formatos",
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                        ),
                      ),
                      const SizedBox(height: 12),
                      ...pdfFiles.map(
                        (pdf) => Padding(
                          padding: const EdgeInsets.only(bottom: 8),
                          child: OutlinedButton.icon(
                            icon: const Icon(
                              Icons.picture_as_pdf,
                              color: Colors.blue,
                            ),
                            label: Text(
                              pdf['title']!,
                              style: const TextStyle(color: Colors.blue),
                            ),
                            onPressed: () => _launchPDF(pdf['url']!),
                            style: OutlinedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(
                                vertical: 14,
                                horizontal: 10,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 30),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  BoxShadow(
                    color: Colors.blue.withOpacity(0.1),
                    blurRadius: 10,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "¿Necesitas ayuda?",
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.blue,
                    ),
                  ),
                  const Divider(),
                  const Text(
                    "Contacta a Gustavo Jimenez Tripp",
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Colors.blue,
                    ),
                  ),
                  const SizedBox(height: 4),
                  const Text("vinculacionyegresados@cesun.edu.mx"),
                  const SizedBox(height: 8),
                  OutlinedButton(
                    onPressed: () {},
                    child: const Text("Llamar +52 664 903 4115 Ext. 113"),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTabButton(IconData icon, String label, int index) {
    final isSelected = selectedTab == index;
    return GestureDetector(
      onTap: () => setState(() => selectedTab = index),
      child: Container(
        width: 120,
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          color: isSelected ? Colors.green : Colors.white,
          border: Border.all(color: Colors.green),
          borderRadius: BorderRadius.circular(30),
        ),
        child: Column(
          children: [
            Icon(
              icon,
              color: isSelected ? Colors.white : Colors.green,
              size: 36,
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(color: isSelected ? Colors.white : Colors.green),
            ),
          ],
        ),
      ),
    );
  }
}
