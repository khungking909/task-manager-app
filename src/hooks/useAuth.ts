import { useEffect, useState } from 'react';
import { Setting } from 'src/constants/setting';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(Setting.TOKEN);

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth;
