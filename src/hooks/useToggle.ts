import { useState } from "react"

const useToggle = (initialValue: boolean): [boolean, (newValue?: boolean) => void] => {
    const [value, setValue] = useState<boolean>(initialValue);
    
    const toggle = (newValue?: boolean) => {
      if (typeof newValue === 'boolean') {
        setValue(newValue);
      } else {
        setValue(v => !v);
      }
    };
    
    return [value, toggle];
  }
   export default useToggle;