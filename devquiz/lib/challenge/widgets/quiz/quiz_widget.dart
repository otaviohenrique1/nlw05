import 'package:devquiz/shared/models/awnser_model.dart';
import 'package:flutter/material.dart';
import 'package:devquiz/challenge/widgets/awnser/awnser_widget.dart';
import 'package:devquiz/core/app_text_styles.dart';
import 'package:devquiz/shared/models/question_model.dart';

class QuizWidget extends StatefulWidget {
  final QuestionModel question;

  QuizWidget({Key? key, required this.question}) : super(key: key);

  @override
  _QuizWidgetState createState() => _QuizWidgetState();
}

class _QuizWidgetState extends State<QuizWidget> {
  int indexSelected = -1;

  AwnserModel awnser(int index) => widget.question.awnsers[index];

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          SizedBox(
            height: 64,
          ),
          Text(
            widget.question.title,
            style: AppTextStyles.heading,
          ),
          SizedBox(
            height: 24,
          ),
          for (var i = 0; i < widget.question.awnsers.length; i++)
            AwnserWidget(
              awnser: awnser(i),
              isSelected: indexSelected == i,
              onTap: () {
                indexSelected = i;
                setState(() {});
              },
            )
          // ...widget.question.awnsers
          //     .map(
          //       (e) => AwnserWidget(
          //         isRight: e.isRight,
          //         title: widget.question.title,
          //       ),
          //     )
          //     .toList(),
        ],
      ),
    );
  }
}

/*
AwnserWidget(
  isRight: true,
  isSelected: true,
  title:
      "Possibilita a criação de aplicativos compilados nativamente",
),
AwnserWidget(
  isRight: false,
  isSelected: true,
  title:
      "Possibilita a criação de aplicativos compilados nativamente",
),
AwnserWidget(
  title:
      "Possibilita a criação de aplicativos compilados nativamente",
),
AwnserWidget(
  title:
      "Possibilita a criação de aplicativos compilados nativamente",
),
*/
