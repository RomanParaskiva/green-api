import { useState, createContext, useContext } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const [chatId, setChatId] = useState(null);
  const [chatIsSelected, setChatIsSelected] = useState(false);
  const [messages, setMessages] = useState([])

  const handlePhoneInput = ({ target }) => {
    const filteredValue = target.value.replace(/\D/g, "");
    const formattedValue = "+" + filteredValue;
    setChatId(target.value.replace(/\D/g, ""));
    target.value = formattedValue;
  };

  const addMessage = (msg) => {
    setMessages([...messages, msg])
  }

  const selectChat = (e) => {
    e.preventDefault();
    setChatIsSelected(true);
  };

  const login = async ({ idInstance, apiTokenInstance }) => {
    setIdInstance(idInstance);
    setApiTokenInstance(apiTokenInstance)
    setIsAuth(true);
    localStorage.setItem("GA", JSON.stringify({ idInstance, apiTokenInstance }));
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("GA");
  };

  return (
    <StoreContext.Provider 
      value={{ 
        isAuth, 
        login, 
        logout, 
        idInstance, 
        apiTokenInstance, 
        handlePhoneInput, 
        selectChat, 
        chatIsSelected, 
        chatId, 
        addMessage, 
        messages 
      }}>
      {children}
    </StoreContext.Provider>
  );
};