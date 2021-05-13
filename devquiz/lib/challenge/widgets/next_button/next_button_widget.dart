import 'package:devquiz/core/app_colors.dart';
import 'package:devquiz/core/app_text_styles.dart';
import 'package:flutter/material.dart';

class NextButtonWidget extends StatelessWidget {
  final String label;

  NextButtonWidget({
    Key? key,
    required this.label,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      child: Text(label),
      onPressed: () {},
    );
  }
}
