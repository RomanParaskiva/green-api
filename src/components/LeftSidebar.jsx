import { PhoneInput } from "../components";
import { useStore } from "../hooks";

const LeftSidebar = () => {
  const { chatIsSelected, chatId, handlePhoneInput, selectChat } = useStore();
  return (
    <div>
      {chatIsSelected ? (
        <div className="w-full flex flex-col gap-4 border-r border-r-gray-300 h-full">
          <div className="p-3 bg-gray-800">{chatId}</div>
        </div>
      ) : (
        <PhoneInput
          handlePhoneInput={handlePhoneInput}
          selectChat={selectChat}
        />
      )}
    </div>
  );
};

export default LeftSidebar;
