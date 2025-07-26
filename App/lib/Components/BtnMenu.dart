import 'package:flutter/material.dart';

class BtnMenu extends StatefulWidget {
  final IconData icon;
  final String? label;
  final VoidCallback onPressed;
  final Color backgroundColor;
  final Color iconColor;
  final Color? textColor;

  const BtnMenu({
    Key? key,
    required this.icon,
    required this.onPressed,
    this.label,
    this.backgroundColor = const Color(0xFFE0E5EC),
    this.iconColor = const Color(0xFF4B4B4B),
    this.textColor,
  }) : super(key: key);

  @override
  State<BtnMenu> createState() => _BtnMenuState();
}

class _BtnMenuState extends State<BtnMenu> {
  bool _isPressed = false;

  void _onTapDown(TapDownDetails details) {
    setState(() => _isPressed = true);
  }

  void _onTapUp(TapUpDetails details) {
    setState(() => _isPressed = false);
  }

  void _onTapCancel() {
    setState(() => _isPressed = false);
  }

  @override
  Widget build(BuildContext context) {
    final boxShadow = _isPressed
        ? [
      const BoxShadow(
        color: Colors.white,
        offset: Offset(-2, -2),
        blurRadius: 6,
      ),
      BoxShadow(
        color: Colors.black.withOpacity(0.15),
        offset: const Offset(2, 2),
        blurRadius: 6,
      ),
    ]
        : [
      const BoxShadow(
        color: Colors.white,
        offset: Offset(-6, -6),
        blurRadius: 10,
      ),
      BoxShadow(
        color: Colors.black.withOpacity(0.15),
        offset: const Offset(6, 6),
        blurRadius: 10,
      ),
    ];

    return GestureDetector(
      onTap: widget.onPressed,
      onTapDown: _onTapDown,
      onTapUp: _onTapUp,
      onTapCancel: _onTapCancel,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 100),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
        decoration: BoxDecoration(
          color: widget.backgroundColor,
          borderRadius: BorderRadius.circular(16),
          boxShadow: boxShadow,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(widget.icon, color: widget.iconColor, size: 26),
            if (widget.label != null) ...[
              const SizedBox(width: 12),
              Text(
                widget.label!,
                style: TextStyle(
                  color: widget.textColor ?? widget.iconColor,
                  fontSize: 17,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 0.5,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
