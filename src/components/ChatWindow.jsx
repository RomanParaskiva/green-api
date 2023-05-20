import { useState, useEffect } from "react";
import { useStore } from "../hooks";
import axios from "axios";
import useSwr from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState("");

  const { chatId, idInstance, apiTokenInstance, messages, addMessage } =
    useStore();

  const { data } = useSwr(
    `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  useEffect(() => {
    if (data?.body?.idMessage) {
      addMessage({
        idMessage: data?.body?.idMessage,
        text: data?.body?.messageData.textMessageData.textMessage,
        from: data?.body?.senderData?.senderName,
      });
     axios.delete(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${data?.receiptId}`)
    
    }
  }, [data, addMessage, idInstance, apiTokenInstance]);

  const sendMessage = async () => {
    const { data, status } = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        chatId: `${chatId}@c.us`,
        message: inputMessage,
      }
    );
    if (status === 200) {
      addMessage({
        idMessage: data.idMessage,
        text: inputMessage,
        from: "",
      });
      setInputMessage("");
    }
  };

  const handleStyles = (from) => {
    return from
      ? "bg-fuchsia-900 w-fit min-w-[200px] p-5 rounded-xl mr-auto relative"
      : "bg-cyan-900 w-fit min-w-[200px] p-5 rounded-xl ml-auto relative ";
  };

  const handleInput = ({ target }) => {
    setInputMessage(target.value);
  };
  return (
    <div className="flex-grow justify-end flex flex-col relative overflow-hidden h-full pb-5">
      <div className="absolute top-0 bottom-[70px] pb-[70px] right-0 left-0 h-full flex flex-col gap-5 overflow-auto">
        {messages.length > 0
          ? messages.map((item) => {
              return (
                <div className={handleStyles(item.from)} key={item.idMessage}>
                  {item.text}
                  <span className="absolute w-m top-1 left-3 text-xs">{item.from}</span>
                </div>
              );
            })
          : null}
      </div>

      <div className="h-[50px] flex items-center relative z-30">
        <textarea
          onInput={handleInput}
          value={inputMessage}
          className="w-full rounded-tr-none rounded-br-none rounded-xl px-3 outline-none h-full"
        ></textarea>
        <button
          onClick={sendMessage}
          className=" bg-blue-800 text-white p-3 rounded-tl-none rounded-bl-none rounded-xl h-full"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
