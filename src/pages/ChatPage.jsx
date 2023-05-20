import { LeftSidebar, ChatWindow } from "../components";
import { useStore } from "../hooks";

const ChatPage = () => {
  const { chatIsSelected, logout } = useStore();
  return (
    <div className="flex flex-col container h-full mx-auto">
      <div className="p-3 flex justify-end">
        <button onClick={logout} className="p-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-xl">
          выход
        </button>
      </div>

      <div className="grid grid-cols-[300px_1fr] h-full gap-5">
        <LeftSidebar />
        {chatIsSelected ? (<ChatWindow />) : (<div className="flex items-center justify-center flex-auto"><span>Выберите собеседника</span></div>)}
      </div>
    </div>
  );
};

export default ChatPage;
