import 'package:flutter/material.dart';
import 'dart:async';
import 'package:cesunapp/pages/student_page.dart'; // 👈 pantalla de perfil

class LoadPage extends StatefulWidget {
  const LoadPage({super.key});

  @override
  State<LoadPage> createState() => _LoadPageState();
}

class _LoadPageState extends State<LoadPage> {
  @override
  void initState() {
    super.initState();

    // Esperar 2 segundos y luego navegar al perfil
    Future.delayed(const Duration(seconds: 2), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const PerfilUsuarioScreen()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image(
              image: AssetImage('assets/images/cesun_logo.png'),
              width: 150,
            ),
            SizedBox(height: 20),
            CircularProgressIndicator(),
            SizedBox(height: 10),
            Text('Cargando...', style: TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }
}
