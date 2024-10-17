import { useContext } from "react";
import { HeroContext } from "../../Provider/HeroContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHeroNew } from "../../Provider/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaFormModalUpdate } from "./SchemaFormModal";
import { Input } from "../../Components/Input";
import { StyleLink, StylePageUpdate } from "./style";
import { Container } from "../../Styles/global";

export const HeroUpdatePage = () => {
  const { update, updateHero } = useContext(HeroContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IHeroNew>({
    defaultValues: {
      name: update?.name,
      skills: update?.skills,
      origin: update?.origin,
    },
    resolver: zodResolver(SchemaFormModalUpdate),
  });

  const submit: SubmitHandler<IHeroNew> = (formData) => {
    updateHero(formData, update.id);
  };

  return (
    <>
      <StylePageUpdate>
        <Container className="div-container-update">
          <div className="div-internal-container">
            <span className="span-title-update">
              <h1>Editando Herói:</h1>
              <StyleLink to="/">Voltar</StyleLink>
            </span>
            <form className="form-update-hero" onSubmit={handleSubmit(submit)}>
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
              <div className="div-btn-update-hero">
                <button className="btn-update" type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </Container>
      </StylePageUpdate>
    </>
  );
};
