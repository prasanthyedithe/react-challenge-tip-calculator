export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
