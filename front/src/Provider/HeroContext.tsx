import { createContext, useEffect, useState } from "react";
import { IHero, IHeroContext, IHeroNew, IHeroProviderProps } from "./@types";
import { api } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const HeroContext = createContext({} as IHeroContext);

export const HeroProvider = ({ children }: IHeroProviderProps) => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [update, setUpdate] = useState<IHero>({} as IHero);

  const navigate = useNavigate();

  useEffect(() => {
    const loadHero = async () => {
      try {
        const { data } = await api.get<IHero[]>("/heroes");
        setHeroes(data);
      } catch (error) {}
    };
    loadHero();
  }, []);

  const createHero = async (formData: IHeroNew) => {
    try {
      const { data } = await api.post("/heroes", formData);
      setHeroes([...heroes, data]);
      toast.success("Herói criado co sucesso");
    } catch (error) {}
  };

  const updateHero = async (formData: IHeroNew, heroId: string) => {
    try {
      const { data } = await api.put(`/heroes/${heroId}`, formData);
      const heroEddit = heroes.filter((hero) => hero.id !== heroId);
      navigate("/");
      setHeroes([...heroEddit, data]);
    } catch (error) {}
  };

  const removeHero = async (heroId: string) => {
    try {
      await api.delete(`/heroes/${heroId}`);
      const newListHeroes = heroes.filter((hero) => hero.id !== heroId);
      setHeroes(newListHeroes);
      toast.success("Herói deletado com sucesso");
    } catch (error) {}
  };

  const pageUpdate = (hero: IHero) => {
    setUpdate(hero);
    navigate("/updatehero");
  };

  return (
    <HeroContext.Provider
      value={{
        heroes,
        setHeroes,
        createHero,
        updateHero,
        removeHero,
        isOpen,
        setIsOpen,
        update,
        setUpdate,
        isOpenUpdate,
        setIsOpenUpdate,
        pageUpdate,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};
