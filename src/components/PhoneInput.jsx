import React from "react";

const PhoneInput = ({handlePhoneInput, selectChat}) => {
  return (
    <div>
      <form>
        <fieldset className=" bg-gray-700 p-3 rounded-md">
          <legend className="bg-gray-600 p-1 rounded-xl shadow-sm">
            Введите номер телефона для создания чата
          </legend>
          <input
            onInput={handlePhoneInput}
            className="w-full rounded-xl p-2 text-white bg-gray-800"
            type="text"
            name="chatId"
          />
        </fieldset>
        <button
          onClick={selectChat}
          className="p-3 border border-gray-600 w-full mt-3"
        >
          Найти
        </button>
      </form>
    </div>
  );
};

export default PhoneInput;
