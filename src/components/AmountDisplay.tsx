type AmountDisplayProps = {
  label?: string;
  amount: number;
};

import { formatCurrency } from "../helpers/index";

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  );
}
