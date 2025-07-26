// Dart
import 'package:flutter/material.dart';
import '../utils/constants.dart';

class CustomAppBar extends AppBar {
  CustomAppBar({required String title, Key? key})
      : super(
    key: key,
    title: Text(title),
    backgroundColor: AppColors.primaryBlue,
    foregroundColor: Colors.white,
  );
}