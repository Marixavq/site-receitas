import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  titulo: string;
  categoria: string;
  ingredientes: string;
  modoPreparo: string;

}
const FormReceitas = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-amber-50 w-full p-10 ">
          <h1 className="text-center text-2xl pb-8">Envie suas receitas</h1>
          <div className="fieldset border border-black w-96 h-h mx-auto rounded p-6">

            <div className="pb-5 flex flex-col text-center">
              <label htmlFor="titulo" className="pr-2 text-center">
                Título da receita
              </label>
              <input
                type="text"
                className="bg-transparent border border-black rounded-sm w-full"
                {...register("titulo", {
                  required: "Título obrigatório"
                })}
              />
              {errors.titulo && <span style={{ color: 'red' }}>{errors.titulo.message}</span>}

            </div>

            <div className="pb-5 flex flex-col text-center">
              <label htmlFor="categoria" className="pr-2 text-center">
                Categoria
              </label>
              <input
                type="text"
                className="bg-transparent border border-black rounded-sm w-full"
                {...register("categoria", {
                  required: "Inclua a categoria da receita"
                })}
              />
              {errors.categoria && <span style={{ color: 'red' }}>{errors.categoria.message}</span>}

            </div>

            <div className="pb-5 flex flex-col text-center">
              <label htmlFor="ingredientes" className="pr-2 text-center">
                Ingredientes
              </label>
              <textarea
                rows={4}
                className="bg-transparent border border-black rounded-sm w-full"
                {...register("ingredientes", {
                  required: "Inclua os ingredientes"
                })}
              />
              {errors.ingredientes && <span style={{ color: 'red' }}>{errors.ingredientes.message}</span>}

            </div>

            <div className="pb-5 flex flex-col text-center">
              <label htmlFor="modoPreparo" className="pr-2 text-center">
                Modo de preparo
              </label>
              <textarea
                rows={8}
                className="bg-transparent border border-black rounded-sm w-full"
                {...register("modoPreparo", {
                  required: "Inclua o modo de preparo"
                })}
              />
              {errors.modoPreparo && <span style={{ color: 'red' }}>{errors.modoPreparo.message}</span>}
            </div>

            <div className="pb-5 flex flex-col text-center">
              <label htmlFor="email" className="pr-2">
                Seu email
              </label>
              <input
                type="email"
                className="bg-transparent border border-black rounded-sm w-full"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Digite um email correto"
                  }
                })}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            </div>


            <div className="flex justify-end">
              <button className="bg-blue-500 border border-black px-4 py-3 rounded">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormReceitas;
