import { useState } from "react";
const ChatPage = () => {
  const [chatId, setChatId] = useState(null)

  const handlePhoneInput = ({target}) =>  {
    const filteredValue = target.value.replace(/\D/g, '');
    const formattedValue = '+' + filteredValue;
    setChatId(target.value.replace(/\D/g, ''))
    target.value = formattedValue;
  }

  const changeChat = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className="flex flex-col container mx-auto">
      <div className="p-3 flex justify-end">
        <button className="p-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-xl">выход</button>
      </div>

      <div className="grid grid-cols-[300px_1fr]">
        <div>
          <form>
            <fieldset className=" bg-gray-700 p-3 rounded-md">
              <legend className="bg-gray-600 p-1 rounded-xl shadow-sm">Введите номер телефона для создания чата</legend>
              <input onInput={handlePhoneInput} className="w-full rounded-xl p-2 text-white bg-gray-800" type="text" name="chatId" />
            </fieldset>
            <button onClick={changeChat} className="p-3 border border-gray-600 w-full mt-3">Найти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatPage