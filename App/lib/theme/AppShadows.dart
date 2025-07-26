import 'package:flutter/material.dart';

class AppShadows {
  static const List<Shadow> textBlueLight = [
    Shadow(
      color: Color(0xFFBBDEFB), // azul claro
      offset: Offset(1, 1),
      blurRadius: 2,
    ),
  ];

  static const List<Shadow> textBlack = [
    Shadow(
      color: Colors.black26,
      offset: Offset(1, 1),
      blurRadius: 2,
    ),
  ];

  static const BoxShadow appBarShadow = BoxShadow(
    color: Colors.black26,
    offset: Offset(0, 2),
    blurRadius: 4,
  );

  static const BoxShadow cardShadow = BoxShadow(
    color: Color(0xFFBBDEFB),
    offset: Offset(0, 2),
    blurRadius: 6,
  );
}
