import { useMemo } from 'react';

const useCurrencyFormatter = () => {
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }),
    []
  );

  return formatter;
};

export default useCurrencyFormatter;
