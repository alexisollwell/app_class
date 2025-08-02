import 'package:flutter/material.dart';

class ServicioComunitarioScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Servicio Comunitario'),
        backgroundColor: const Color(0xFF0062B1),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const Text(
              '¡Ayuda a tu comunidad y gana horas de servicio!',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
                color: Colors.black,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            Card(
              elevation: 4,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text(
                      '¡ATENCIÓN COMUNIDAD CESUN!',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                        color: Color(0xFF0062B1),
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 8),
                    const Text(
                      '¿Listos para marcar la diferencia y salvar vidas? 🩸💪 Nos complace invitarlos a participar en la campaña de donación de sangre en colaboración con Fundación Castro-Limón. Al donar sangre, estarás contribuyendo a que pequeños pacientes continúen con su tratamiento y tengan una oportunidad de vida más saludable.',
                      style: TextStyle(fontSize: 16),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Detalles del Evento:',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                        color: Color(0xFF0062B1),
                      ),
                    ),
                    const SizedBox(height: 8),
                    _buildDetailRow(
                      icon: Icons.calendar_today,
                      text: 'Fecha: Sábado 09 de Diciembre del 2023',
                    ),
                    _buildDetailRow(
                      icon: Icons.access_time,
                      text: 'Horario: De 8:00 am a 2:00 pm',
                    ),
                    _buildDetailRow(
                      icon: Icons.location_on,
                      text: 'Lugar: Fundación Castro-Limón (Ubicación: P.º del Río s/n, Río Tijuana 3a. Etapa, Rio Tijuana 3ra Etapa, 22540 Tijuana, B.C.)',
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      '¡No te preocupes si es tu primera vez donando sangre! Ya que habrá personal capacitado y experimentado para brindarte una experiencia segura y cómoda durante todo el proceso. ¿Quieres formar parte de esta noble causa? ¡Es muy fácil! Regístrate por Whatsapp al enlace:',
                      style: TextStyle(fontSize: 16),
                    ),
                    const SizedBox(height: 8),
                    ElevatedButton.icon(
                      onPressed: () {
                        // Aquí podrías agregar la lógica para abrir el enlace de WhatsApp
                      },
                      icon: const Icon(Icons.message),
                      label: const Text('Registrarme por Whatsapp'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.green,
                        foregroundColor: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Recuerda que con cada donación, estarás liberando 100 horas de servicio comunitario, además de estar haciendo una diferencia real en la vida de quienes más lo necesitan. ¡No pierdas la oportunidad de ser un héroe en la vida de alguien! 🦸‍♂🦸‍♀ ¡Te esperamos! ¡Comparte este evento con tus amigos y familiares para multiplicar el impacto positivo! #DonarSangreEsDonarVida #ServicioComunitario #FundaciónCastroLimón #SalvandoVidas',
                      style: TextStyle(fontSize: 16),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow({required IconData icon, required String text}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: const Color(0xFF0062B1)),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              text,
              style: const TextStyle(fontSize: 16),
            ),
          ),
        ],
      ),
    );
  }
}