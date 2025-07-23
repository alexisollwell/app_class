import 'package:flutter/material.dart';
import 'package:cesunapp/pages/pdf_viewer_page.dart';

class PracticasProfesionalesScreen extends StatelessWidget {
  const PracticasProfesionalesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey[50],
      appBar: AppBar(
        title: const Text('Prácticas Profesionales'),
        backgroundColor: const Color(0xFF0070BA),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Ponte a prueba y gana experiencia',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            const Text(
              'Las prácticas profesionales en CESUN están diseñadas para enriquecer tu formación académica, alineadas con tu carrera y plan de estudios.',
              textAlign: TextAlign.justify,
              style: TextStyle(fontSize: 16),
            ),
            const SizedBox(height: 20),
            const SectionTitle('Cumplimiento'),
            const CustomListItem('Aplicar conocimientos adquiridos'),
            const CustomListItem('Adquirir experiencia práctica'),
            const CustomListItem('Desarrollar habilidades profesionales'),
            const CustomListItem('Conectar con el mundo laboral'),
            const SizedBox(height: 20),
            const SectionTitle('Requisitos'),
            const CustomListItem('Estar inscrito en tu plan de estudios'),
            const CustomListItem('Buscar unidad receptora'),
            const CustomListItem(
              'Presentar solicitud, reportes y guía integral',
            ),
            const SizedBox(height: 20),
            const SectionTitle('Formatos disponibles'),
            buildLocalPdfButton(
              context,
              'Solicitud de inscripción',
              'assets/pdfs/solicitud.pdf',
            ),
            buildLocalPdfButton(
              context,
              'Reporte de actividades',
              'assets/pdfs/reporte.pdf',
            ),
            buildLocalPdfButton(
              context,
              'Unidades receptoras',
              'assets/pdfs/unidades.pdf',
            ),
            buildLocalPdfButton(
              context,
              'Guía integral',
              'assets/pdfs/guia.pdf',
            ),
          ],
        ),
      ),
    );
  }
}

class SectionTitle extends StatelessWidget {
  final String text;
  const SectionTitle(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Text(
        text,
        style: const TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.bold,
          color: Color(0xFF0070BA),
        ),
      ),
    );
  }
}

class CustomListItem extends StatelessWidget {
  final String text;
  const CustomListItem(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: const Icon(Icons.check_circle_outline, color: Colors.blue),
      title: Text(text, style: const TextStyle(fontSize: 16)),
      contentPadding: const EdgeInsets.only(left: 0, right: 0),
      dense: true,
    );
  }
}

Widget buildLocalPdfButton(
  BuildContext context,
  String label,
  String assetPath,
) {
  return Padding(
    padding: const EdgeInsets.symmetric(vertical: 6),
    child: OutlinedButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (_) => PdfViewerPage(title: label, assetPath: assetPath),
          ),
        );
      },
      icon: const Icon(Icons.picture_as_pdf, color: Color(0xFF0070BA)),
      label: Text(
        label,
        style: const TextStyle(
          color: Color(0xFF0070BA),
          fontSize: 16,
          fontWeight: FontWeight.w500,
        ),
      ),
      style: OutlinedButton.styleFrom(
        side: const BorderSide(color: Color(0xFF0070BA), width: 1.5),
        padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 20),
        backgroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      ),
    ),
  );
}
