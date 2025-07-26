import 'package:flutter/material.dart';

class AppCardStyles {
  static const double elevation = 3.0;
  static const BorderRadius borderRadius = BorderRadius.all(Radius.circular(12));
  static final BoxShadow shadow = BoxShadow(
    color: Colors.black12,
    offset: Offset(0, 2),
    blurRadius: 6,
  );

  static final BoxDecoration cardDecoration = BoxDecoration(
    borderRadius: borderRadius,
    color: Colors.white,
    boxShadow: [shadow],
  );
}
