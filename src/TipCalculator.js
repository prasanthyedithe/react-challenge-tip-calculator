import Bill from "./Bill";
import { useState } from "react";
import SelectedPercentage from "./SelectedPercentage";
import Output from "./Output";
export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <SelectedPercentage percentage={percentage1} onSelect={setPercentage1}>
        <p>How did you like the service? </p>
      </SelectedPercentage>
      <SelectedPercentage percentage={percentage1} onSelect={setPercentage1}>
        <p>How did your friend like the service?</p>
      </SelectedPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
