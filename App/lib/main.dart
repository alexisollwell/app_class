import 'package:flutter/material.dart';
import 'theme/AppTheme.dart';
import 'Home/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mi App',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme, // ← tema global
      home: const HomeScreen(),
    );
  }
}

