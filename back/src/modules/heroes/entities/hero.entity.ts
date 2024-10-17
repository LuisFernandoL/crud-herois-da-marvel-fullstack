import { randomUUID } from 'crypto';

// enum SkillType{
//   FORÇA = ,
//   VELOCIDADE = ,

// }

export class Hero {
  readonly id: string;
  name: string;
  skills: string;
  origin: string;

  constructor() {
    this.id = randomUUID();
  }
}
