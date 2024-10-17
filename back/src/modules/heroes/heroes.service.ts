import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HeroesService {
  constructor(private prisma: PrismaService) {}

  async create(createHeroDto: CreateHeroDto) {
    const findHero = await this.prisma.hero.findFirst({
      where: { name: createHeroDto.name },
    });
    if (findHero) {
      throw new ConflictException('Hero already exists');
    }

    const hero = new Hero();
    Object.assign(hero, {
      ...createHeroDto,
    });
    await this.prisma.hero.create({
      data: { ...hero },
    });
    return hero;
  }

  async findAll() {
    const heroes = await this.prisma.hero.findMany();
    return heroes;
  }

  async findOne(id: string) {
    const hero = await this.prisma.hero.findUnique({ where: { id } });
    return hero;
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    const hero = this.prisma.hero.findUnique({ where: { id } });

    if (!hero) {
      throw new NotFoundException('Hero not fount');
    }

    const updateHero = await this.prisma.hero.update({
      where: { id },
      data: { ...updateHeroDto },
    });
    return updateHero;
  }

  async remove(id: string) {
    const hero = await this.prisma.hero.findUnique({ where: { id } });

    if (!hero) {
      throw new NotFoundException('Hero not fount');
    }

    await this.prisma.hero.delete({ where: { id } });
  }
}
