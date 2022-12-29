import React, {createContext, ReactNode, useState} from 'react';

interface Props {
  children: ReactNode
}

export type EarlyAccessModalContextType = {
  modal: IEarlyAccessModalContext,
  setModal: Function,
};

interface IEarlyAccessModalContext {
  open: boolean,
  size: string,
  type: string,
}

interface Action {
  type: string,
  payload: IEarlyAccessModalContext,
}

const initialState: IEarlyAccessModalContext = {
  open: false,
  size: 'md',
  type: ''
};



const EarlyAccessModalContext = createContext<EarlyAccessModalContextType | null>({
  modal: {...initialState},
  setModal: () => {}
});

// ----------------------------------------------------------------------

const EarlyAccessModalProvider: React.FC<Props> = ({children}) => {
  const [modal, setModal] = useState<IEarlyAccessModalContext>(initialState);


  return (
    <EarlyAccessModalContext.Provider
      value={{
        modal,
        setModal
      }}
    >
      {children}
    </EarlyAccessModalContext.Provider>
  );
}

export {EarlyAccessModalContext, EarlyAccessModalProvider};
