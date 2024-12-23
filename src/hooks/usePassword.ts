import { useState } from 'react';

export default function usePassword() {
  const [isShow, setIsShow] = useState(false);

  const onClickToSetShow = () => {
    setIsShow(!isShow);
  };

  return { isShow, onClickToSetShow };
}
