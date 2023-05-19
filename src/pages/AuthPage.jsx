import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks";

const AuthPage = () => {
  const [form, setForm] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleInput = ({ target }) => setForm({ ...form, [target.name]: target.value });

  const handleSubmit = (e) => {
    e.preventDefault()
    let flag = true
    for (let key in form) {
      if (form.hasOwnProperty(key)) {
        if (!form[key].length) {
          flag = false
          break
        }
        if (flag) {
          console.log(form);
          login({ ...form })
          navigate('/');
        }
      }
    }
  }

    return (
      <div className="container flex flex-col gap-10 mx-auto">
        <p className="w-full text-center pt-10">Для входа в аккаунт используйте свои учетные данные из
          системы GREEN-API (idInstance, apiTokenInstance)</p>

        <form className="flex flex-col mx-auto gap-5 bg-gray-700 p-5 rounded-md">
          <fieldset>
            <legend>idInstance</legend>
            <input onPaste={handleInput} onChange={handleInput} type="text" name="idInstance" required />
          </fieldset>

          <fieldset>
            <legend>apiTokenInstance</legend>
            <input onPaste={handleInput} onChange={handleInput} type="text" name="apiTokenInstance" required />
          </fieldset>

          <button onClick={handleSubmit} className="p-3 bg-slate-500 text-white rounded-xl">Войти</button>
        </form>
      </div>
    )
  }

  export default AuthPage