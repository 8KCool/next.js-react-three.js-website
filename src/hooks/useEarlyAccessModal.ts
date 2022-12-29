import {useContext} from 'react';
//
import {EarlyAccessModalContext} from '../context/EarlyAccessModalContext';

// ----------------------------------------------------------------------

const useEarlyAccessModal = () => {
  const context = useContext(EarlyAccessModalContext);

  if (!context) throw new Error('Early Access Modal Context must be use inside EarlyAccessModalProvider');

  return context;
};

export default useEarlyAccessModal;
