import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  skills: string;

  @IsString()
  @IsNotEmpty()
  origin: string;
}
