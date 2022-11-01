import { createContext, FC, useState, useEffect, useCallback } from "react";
import { iUser, UserStatus, RejectError } from "../types";

type Context = {
  user: iUser;
  userStatus: UserStatus;
  localPoints: iUser['points'];
  buyPoints: (amount: number) => Promise<void>;
  redeemProduct: (productId: string, value: number) => Promise<boolean>;
}

type Props = {
  initialValue?: iUser; 
}

export const UserContext = createContext({} as Context);

export const UserProvider: FC<Props> = ({ children }) => {

  const [localPoints, setLocalPoints] = useState<number>(0);

  const [processing, setProcessing] = useState<boolean>(false);
  const [user, setUser] = useState<iUser>({} as iUser);
  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.LOADING);

  const fetchUser = useCallback(async () =>  {
    try {
      setUserStatus(UserStatus.LOADING)
      const response = await fetch('api/user');
      const result = await response.json();
      if (result?._id) {
        setUser(result);
        setLocalPoints(result.points);
        setUserStatus(UserStatus.OK)
      }
      else {
        setUserStatus(UserStatus.ERROR);
      }
    } catch {
      setUserStatus(UserStatus.ERROR)
    }
  }, []);

  const fetchHistory = useCallback(async () =>  {
    try {
      const response = await fetch('api/history');
      const result = await response.json();
      if (result?.length) {
        setUser(prev => ({
          ...prev,
          redeemHistory: result
        }));
      }
    } catch {}
  }, []);

  const updateStorage = useCallback(() => {
    const value = window.localStorage.getItem('aeropoints');
    if (!value) return;

    if (+value !== localPoints) {
      fetchUser();
    }
  }, [fetchUser, localPoints]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    window.addEventListener("storage", updateStorage);

    return () => window.removeEventListener("storage", updateStorage);
  }, [updateStorage]);

  useEffect(() => {
    window.localStorage.setItem('aeropoints', String(localPoints));
  }, [localPoints])


  function buyPoints(amount: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (processing) reject(RejectError.PROCESSING);
			
			setProcessing(true);
      
      fetch(`api/points`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          amount
        })
      })
      .then(response => response.json())
      .then(result => {
        if (result?.message === "Points Updated") {
          setLocalPoints(result["New Points"]);
          resolve();
        } else {
          reject(RejectError.ERROR);
        }
      })
      .catch(() => reject(RejectError.ERROR))
      .finally(() => setProcessing(false));
    })
  }

  function redeemProduct(productId: string, value: number): Promise<boolean> {
		return new Promise((resolve, reject) => {

      if (processing) {
        reject(RejectError.PROCESSING);
      }
      
      setProcessing(true);
			fetch(`api/redeem`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
				body: JSON.stringify({
					productId
				}),
			})
      .then(response => response.json())
      .then(result => {
          if (!!result.message) {
            setLocalPoints(prev => prev - value);
            fetchHistory();
            resolve(true);
          }
          else {
            reject(RejectError.ERROR);
          }
        })
			.catch(() => reject(RejectError.ERROR))
			.finally(() => setProcessing(false));
		});
	}
  return (
    <UserContext.Provider value={{ user, userStatus, localPoints, buyPoints, redeemProduct }}>
    { children }
  </UserContext.Provider>
)}