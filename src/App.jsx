import { useEffect } from "react";
import { useStore } from "./hooks";
import { AuthPage, ChatPage } from "./pages";

const App = () => {
  const { isAuth, login } = useStore();

  useEffect(() => {
    const GA = localStorage.getItem("GA");
    if (GA?.length > 0) {
      login({ ...JSON.parse(GA) });
    }
  }, [login]);

  return (
    <div className="bg-black text-gray-400 w-screen h-screen">
      {isAuth ? <ChatPage /> : <AuthPage />}
    </div>
  );
};

export default App;
