export interface IHeroProviderProps {
  children: React.ReactNode;
}

export interface IHero {
  id: string;
  name: string;
  skills: string;
  origin: string;
}

export type IHeroNew = Omit<IHero, "id">;

export interface IHeroContext {
  heroes: IHero[];
  setHeroes: React.Dispatch<React.SetStateAction<IHero[]>>;
  createHero: (formData: IHeroNew) => Promise<void>;
  updateHero: (formData: IHeroNew, heroId: string) => Promise<void>;
  removeHero: (heroId: string) => Promise<void>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  update: IHero;
  setUpdate: React.Dispatch<React.SetStateAction<IHero>>;
  isOpenUpdate: boolean;
  setIsOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  pageUpdate: (hero: IHero) => void;
}
