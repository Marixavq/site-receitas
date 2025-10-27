import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  nome: string;
  email: string;
  senha: string;
}

const Login = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const [enviado, setEnviado] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    setEnviado(true);

    reset();

    setTimeout(() => setEnviado(false), 3000);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="p-8 bg-amber-50">
          <h1 className="text-center text-2xl pb-8">Login</h1>
          <div className="max-w-80 bg-yellow-50 fieldset border border-black m-auto rounded p-5 py-8  md:max-w-96">

            <div className="text-center pb-5 flex flex-col">
              <label htmlFor="nome" className="pr-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                className="bg-transparent border border-black rounded-sm w-full"
                {...register("nome", {
                  required: "O nome é obrigatório!"
                })}
              />
              {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message}</span>}
            </div>

            <div className="text-center pb-5 flex flex-col">
              <label htmlFor="email" className="pr-2">
                Email
              </label>
              <input
                type="email"
                id="email"
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

            <div className="text-center pb-5 flex flex-col">
              <label htmlFor="senha" className="pr-2">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                className="bg-transparent border border-black rounded-sm w-full"
                {
                ...register("senha", {
                  required: "A senha é obrigatória!",
                  minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                  validate: value =>
                    !/[A-Z]/.test(value) ? "Deve conter uma letra maiúscula" :
                      !/[a-z]/.test(value) ? "Deve conter uma letra minúscula" :
                        !/\d/.test(value) ? "Deve conter um número" :
                          !/[A-Za-z0-9]/.test(value) ? "Deve conter um caracter especial" :
                            true
                })
                }
              />
              {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}
            </div>


            <div className="flex justify-end">
              <button className="bg-red-400 border border-black px-4 py-3 rounded hover:bg-orange-300 transition-colors duration-400">Enviar</button>
            </div>

            {enviado && (
              <p className="text-green-600 text-center text-sm mt-3">
                Formulário enviado com sucesso!
              </p>
            )}

          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
