import { useContext } from "react";
import { HeroContext } from "../../../Provider/HeroContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHeroNew } from "../../../Provider/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaFormModalUpdate } from "./SchemaFormModal";
import { Input } from "../../Input";
import { Container } from "../../../Styles/global";
import { StyleForm } from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const FormCreate = () => {
  const { createHero } = useContext(HeroContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IHeroNew>({
    resolver: zodResolver(SchemaFormModalUpdate),
  });

  const submit: SubmitHandler<IHeroNew> = (formData) => {
    createHero(formData);
  };

  return (
    <StyleForm>
      <Container className="div-container-form">
        <span className="span-create-hero">
          <h1 className="h1-create">Criando novo herói</h1>
        </span>
        <form className="form-create-hero" onSubmit={handleSubmit(submit)}>
          <label>Nome</label>
          <Input
            type="text"
            error={errors.name?.message}
            {...register("name")}
          />

          <label>Habilidades</label>
          <Input
            type="text"
            error={errors.skills?.message}
            {...register("skills")}
          />

          <label>Origem</label>
          <Input
            type="text"
            error={errors.origin?.message}
            {...register("origin")}
          />
          <div className="div-btn-create-form">
            <button className="btn-form-create" type="submit">
              <AiOutlinePlusCircle size={24}/> Criar
            </button>
          </div>
        </form>
      </Container>
    </StyleForm>
  );
};
