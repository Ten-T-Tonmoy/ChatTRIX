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
      //parameters of io huh socket.handshake.query.userId on server
      const newSocket = io("https://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      //whatever emit sends .on receives
      setSocket(newSocket);
      newSocket.on("activeUsers", (users) => {
        setActive(users); //gets objs?
      });
      // active sockets userId

      return () => newSocket.close();
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
