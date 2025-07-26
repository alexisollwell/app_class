import 'package:flutter/material.dart';
import '../../theme/AppCardStyles.dart';
import '../../theme/AppColors.dart';
import '../../theme/AppShadows.dart';
import '../../theme/AppTextStyles.dart';

class TitulacionScreen extends StatefulWidget {
  const TitulacionScreen({super.key});

  @override
  State<TitulacionScreen> createState() => _TitulacionScreenState();
}

class _TitulacionScreenState extends State<TitulacionScreen> {
  int selectedStepIndex = 0;

  final List<Map<String, dynamic>> pasos = [
    {
      'titulo': '1. Solicita',
      'contenido': [
        'Certificado Validado',
        'Formato de no adeudo',
        'Pago del certificado validado',
      ]
    },
    {
      'titulo': '2. Cumple',
      'contenido': [
        'Certificado validado',
        'Liberación de servicio, servicio social y prácticas profesionales',
        'Puntaje TOEFL que requiere tu Licenciatura',
        'Fotografías Título (6 x 9 cm)',
      ]
    },
    {
      'titulo': '3. Acude',
      'contenido': [
        'Obtén asesoría sobre las opciones de Titulación de CESUN Universidad',
      ]
    },
    {
      'titulo': '4. Obtén',
      'contenido': [
        'Elige la opción de titulación',
        'Solicita autorización del Coordinador Académico',
      ]
    },
    {
      'titulo': '5. Realiza',
      'contenido': [
        'Acude a Cobranza',
        'Solicita datos bancarios',
        'Realiza el pago correspondiente',
      ]
    },
    {
      'titulo': '6. Regresa',
      'contenido': [
        'Presenta: registro, sustento de método y recibo de pago',
      ]
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundColor,
      appBar: AppBar(
        title: const Text(
          '📘 Opciones de Titulación',
          style: AppTextStyles.appBarTitle,
        ),
        backgroundColor: AppColors.primaryBlue,
        elevation: 6,
        shadowColor: AppShadows.appBarShadow.color,
        centerTitle: true,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFFE8F0FF), Color(0xFFFFFFFF)],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [

            _buildTitulo('🚀 Pasos para Titulación'),

            // Chips horizontales
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: List.generate(pasos.length, (index) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: ChoiceChip(
                      label: Text(
                        pasos[index]['titulo'],
                        style: const TextStyle(color: Colors.white),
                      ),
                      selected: selectedStepIndex == index,
                      onSelected: (_) {
                        setState(() {
                          selectedStepIndex = index;
                        });
                      },
                      selectedColor: AppColors.primaryBlue,
                      backgroundColor: Colors.grey[400],
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                  );
                }),
              ),
            ),

            const SizedBox(height: 16),

            // Contenido del paso seleccionado
            _buildCard(
              icon: Icons.check_circle_outline,
              titulo: pasos[selectedStepIndex]['titulo'],
              contenido: (pasos[selectedStepIndex]['contenido'] as List<String>).join('\n'),
            ),

            const SizedBox(height: 20),
            _buildTitulo('📚 Opciones de Titulación'),

            _buildCard(
              icon: Icons.grade,
              titulo: '1. Promedio',
              contenido:
              'Ser alumno regular y haber obtenido un promedio igual o mayor a 9.5. Podrá tener mención de Excelencia Académica cuando se haya logrado un promedio igual o mayor de 9.8.',
            ),
            _buildCard(
              icon: Icons.description,
              titulo: '2. Tesis',
              contenido:
              'Documento de investigación que resuelve un problema del área profesional. Puede ser individual (80 cuartillas) o grupal (150 cuartillas).',
            ),
            _buildCard(
              icon: Icons.group,
              titulo: '3. Taller de Investigación',
              contenido:
              'Taller académico para desarrollar un artículo actualizado en tu campo profesional. Impartido en CESUN.',
            ),
            _buildCard(
              icon: Icons.auto_stories,
              titulo: '4. Diplomado',
              contenido:
              'Diplomado especializado en tu área de estudios, cursado directamente en CESUN.',
            ),
            _buildCard(
              icon: Icons.star_rate,
              titulo: '5. Superación Académica',
              contenido:
              'Estudios de posgrado o especialidad en CESUN u otra institución reconocida oficialmente.',
            ),
            _buildCard(
              icon: Icons.work_history,
              titulo: '6. Experiencia Profesional',
              contenido:
              'Trabajo comprobable en el área de tu carrera por un periodo igual o mayor a la duración de la licenciatura.',
            ),
            _buildCard(
              icon: Icons.verified,
              titulo: '7. Doble Certificación',
              contenido:
              'Obtener dos certificaciones oficiales por CONOCER, relacionadas con tu carrera.',
            ),
            _buildCard(
              icon: Icons.assessment,
              titulo: '8. Examen CENEVAL',
              contenido:
              'Examen EGEL con resultado “Satisfactorio” o superior para titularte por conocimiento general.',
            ),

            const SizedBox(height: 20),
            _buildTitulo('❗ Importante'),
            _buildCard(
              icon: Icons.assignment_turned_in,
              titulo: 'Autorización',
              contenido:
              'Debes solicitar tu opción de titulación al Coordinador Académico mediante el formato oficial.',
            ),

            const SizedBox(height: 20),
            _buildTitulo('📞 Contacto'),
            _buildCard(
              icon: Icons.mail_outline,
              titulo: 'Informes',
              contenido:
              '✉ vinculacionyegresados@cesun.edu.mx\n📞 Tel: (664) 903 4115 ext.113',
            ),
            const SizedBox(height: 30),
          ],
        ),
      ),
    );
  }

  Widget _buildTitulo(String texto) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Text(
        texto,
        style: AppTextStyles.kardexTitle.copyWith(fontSize: 20),
      ),
    );
  }

  Widget _buildCard({
    required String titulo,
    required String contenido,
    required IconData icon,
  }) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8),
      padding: const EdgeInsets.all(18),
      decoration: AppCardStyles.cardDecoration.copyWith(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: [AppShadows.cardShadow],
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: AppColors.primaryBlue, size: 30),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(titulo, style: AppTextStyles.subjectName.copyWith(fontSize: 18)),
                const SizedBox(height: 6),
                Text(
                  contenido,
                  style: AppTextStyles.kardexSubtitle.copyWith(color: Colors.grey[800]),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
