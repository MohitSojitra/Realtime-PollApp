import { Request, response } from "express";
import { QuestionRepository } from "./repository/question/QuestionRepository";

import { UserRepository } from "./repository/user/UserRepository";

interface Icontext {
  _userRepository: UserRepository;
  _questionRepository: QuestionRepository;
}

class Context implements Icontext {

  private _request: Request;
  private _response: Response;

  public _userRepository: UserRepository = UserRepository.getInstance();
  public _questionRepository: QuestionRepository = QuestionRepository.getInstance();

  constructor(req: Request, res: Response) {
    this._request = req;
    this._response = res;
  }
}

export { Context, Icontext };
