
export   function seePassword(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
    setEvent: React.Dispatch<React.SetStateAction<"text" | "password">>, 
    setIcon: React.Dispatch<React.SetStateAction<boolean>>, 
    icon: boolean
    ){
      event.preventDefault();
      setIcon(!icon);
      !icon ? setEvent('text') : setEvent('password');
  }