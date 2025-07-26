import 'package:flutter/material.dart';
import 'AppColors.dart';
import 'AppTextStyles.dart';

class AppButtonStyles {
  static final ButtonStyle logoutButton = ElevatedButton.styleFrom(
    backgroundColor: AppColors.warning,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10),
    ),
    textStyle: AppTextStyles.logoutButtonText,
    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
  );
}
