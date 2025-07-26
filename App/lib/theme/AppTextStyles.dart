import 'package:flutter/material.dart';
import 'AppColors.dart';
import 'AppShadows.dart';

class AppTextStyles {
  static const TextStyle appBarTitle = TextStyle(
    fontSize: 22,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  );

  static final TextStyle kardexTitle = TextStyle(
    fontSize: 28,
    fontWeight: FontWeight.bold,
    color: AppColors.primaryBlue,
    shadows: AppShadows.textBlueLight,
  );

  static const TextStyle kardexSubtitle = TextStyle(
    fontSize: 16,
    fontStyle: FontStyle.italic,
    color: Colors.black87,
  );

  static const TextStyle subjectName = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.bold,
    color: AppColors.primaryBlue,
  );

  static const TextStyle gradeText = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.bold,
    color: AppColors.primaryBlue,
  );

  static final TextStyle finalNote = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.w600,
    fontStyle: FontStyle.italic,
    color: AppColors.primaryBlue.withOpacity(0.7),
  );

  static const TextStyle bottomNavSelected = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.w600,
    shadows: AppShadows.textBlack,
  );

  static const TextStyle bottomNavUnselected = TextStyle(
    fontSize: 14,
    fontWeight: FontWeight.w500,
    color: AppColors.bottomNavUnselected,
    shadows: AppShadows.textBlack,
  );

  static const TextStyle logoutWarning = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.bold,
    color: AppColors.warning,
  );

  static const TextStyle logoutButtonText = TextStyle(
    fontSize: 18,
    color: Colors.white,
    fontWeight: FontWeight.w600,
  );
}
