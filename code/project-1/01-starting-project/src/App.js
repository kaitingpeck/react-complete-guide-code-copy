import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultList from "./components/ResultList";

function App() {
  const HEADINGS = [
    "Year",
    "Total Savings",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];

  const SUB_HEADINGS = [
    "YEAR NUMBER",
    "TOTAL SAVINGS END OF YEAR",
    "INTEREST GAINED IN YEAR",
    "TOTAL INTEREST GAINED",
    "TOTAL INVESTED CAPITAL",
  ];

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;
    let totalInvestedCapital = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution; // contribution added EOY
      totalInterest += yearlyInterest;
      totalInvestedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        totalInvestedCapital: totalInvestedCapital,
      });
    }
  }

  return (
    <div>
      <Header />
      <InputForm onSaveInput={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && (
        <p style={{ textAlign: "center" }}> No investment calculated yet.</p>
      )}

      {userInput && (
        <ResultList
          headings={HEADINGS}
          subHeadings={SUB_HEADINGS}
          data={yearlyData}
        ></ResultList>
      )}
    </div>
  );
}

export default App;
