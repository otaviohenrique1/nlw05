import 'package:devquiz/core/app_images.dart';
import 'package:devquiz/home/home_state.dart';
import 'package:devquiz/shared/models/awnser_model.dart';
import 'package:devquiz/shared/models/question_model.dart';
import 'package:devquiz/shared/models/quiz_model.dart';
import 'package:devquiz/shared/models/user_model.dart';

class HomeController {
  HomeState state = HomeState.empty;

  // ? => pode ser null (nulo) (inicia com o valor null)
  UserModel? user;
  List<QuizModel>? quizzes;

  void getUser() {
    user = UserModel(
      name: "Otavio DEV",
      photoUrl: "https://avatars.githubusercontent.com/u/42388160?v=4",
    );
  }

  void getQuizzes() {
    quizzes = [
      QuizModel(
        title: "NLW 5 Flutter",
        imagem: AppImages.blocks,
        level: Level.facil,
        questions: [
          QuestionModel(
            title: "Esta curtindo o Flutter?",
            awnsers: [
              AwnserModel(
                title: "Estou curtindo",
              ),
              AwnserModel(
                title: "Amando Flutter",
              ),
              AwnserModel(
                title: "Muito top",
              ),
              AwnserModel(
                title: "Show de bola!",
                isRight: true,
              ),
            ],
          ),
          QuestionModel(
            title: "Esta curtindo o Flutter?",
            awnsers: [
              AwnserModel(
                title: "Estou curtindo",
              ),
              AwnserModel(
                title: "Amando Flutter",
              ),
              AwnserModel(
                title: "Muito top",
              ),
              AwnserModel(
                title: "Show de bola!",
                isRight: true,
              ),
            ],
          ),
        ],
      ),
    ];
  }
}
