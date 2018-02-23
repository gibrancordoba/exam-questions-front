import { TypeQuestion } from './type-question';
import { Option } from './option';

export class Question {
  id: string;
  title: string;
  description: string;
  type: TypeQuestion;
  options: Option[];

}

