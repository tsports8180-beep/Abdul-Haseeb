
import React, { useEffect } from 'react';
import { useTranslation } from '../App';

interface Props {
  children: string;
  className?: string;
  register: (text: string) => void;
}

const TranslatableText: React.FC<Props> = ({ children, className, register }) => {
  const { translate } = useTranslation();
  
  useEffect(() => {
    register(children);
  }, [children, register]);

  return <span className={className}>{translate(children)}</span>;
};

export default TranslatableText;
