// Dart
import 'package:flutter/material.dart';
import 'servicio_comunitario_screen.dart';
import 'servicio_social_screen.dart';
import 'practicas_profesionales_screen.dart';

class ServiciosMenuScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Servicios')),
      body: ListView(
        children: [
          ListTile(
            title: Text('Servicio Comunitario'),
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => ServicioComunitarioScreen()),
            ),
          ),
          ListTile(
            title: Text('Servicio Social'),
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => ServicioSocialScreen()),
            ),
          ),
          ListTile(
            title: Text('Prácticas Profesionales'),
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => PracticasProfesionalesScreen()),
            ),
          ),
        ],
      ),
    );
  }
}