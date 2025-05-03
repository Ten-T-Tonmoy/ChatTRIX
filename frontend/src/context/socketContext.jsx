import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client";

const SocketContext = createContext(); //the wrapper useContext returns val/shits

export const useSocketContext = () => {
  return useContext(SocketContext); //whole obj
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [active, setActive] = useState(null);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://localhost:5000", {
        query: {
          userId: authUser._id,
        },
        //parameters of io huh
      });
      //whatever emit sends .on receives
      setSocket(socket);
      socket.on("activeUsers", (users) => {
        setActive(users); //gets objs?
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, active }}>
      {children}
    </SocketContext.Provider>
  );
};
