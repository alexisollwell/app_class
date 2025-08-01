import 'package:flutter/material.dart';
import '../../theme/AppCardStyles.dart';
import '../../theme/AppColors.dart';
import '../../theme/AppShadows.dart';
import '../../theme/AppTextStyles.dart';

class CustomTitulacionStyles {
  static Widget buildTitulo(String texto) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Text(
        texto,
        style: AppTextStyles.kardexTitle.copyWith(fontSize: 20),
      ),
    );
  }

  static Widget buildCard({
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
