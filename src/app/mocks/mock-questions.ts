import { Question } from '../models/question';
import { TypeQuestion } from '../models/type-question';
import { Option } from '../models/option';

const typeDesplegable: TypeQuestion = {
  id: 1,
  name: 'Desplegable'
};

const options: Option[] = [
  {
    id: 1,
    value: 'Valor 1'
  },
  {
    id: 2,
    value: 'Valor 2'
  }
];

export const QUESTIONS: Question[] = [
  {
    id: '5a8f31f8ea2f133d738682e1',
    title: 'titulo # 1',
    description: 'some description # 1',
    type: typeDesplegable,
    options: options
  },
  {
    id: '5a8f3138ea2f133d718682e1',
    title: 'titulo # 2',
    description: 'some description # 2',
    type: typeDesplegable,
    options: options
  },
  {
    id: '5a8f31f8ea2sf133d734682e1',
    title: 'titulo # 4',
    description: 'some description # 2',
    type: typeDesplegable,
    options: options
  }
];
