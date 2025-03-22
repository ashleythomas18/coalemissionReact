import { useState } from "react";   
import './Calculator.css';

const Calculator = () => {
    const [selectedOption, setSelectedOption] = useState("");  
    const [coalWeight, setCoalWeight] = useState("");
    const [burningEfficiency, setBurningEfficiency] = useState("");
    const [coalMined, setCoalMined] = useState("");
    const [renewableEnergy, setRenewableEnergy] = useState("");
    const [treesPlanted, setTreesPlanted] = useState("");
    const [years, setYears] = useState("");

    const [result, setResult] = useState(null);

    const calculate = () => {
        let output = "Invalid input";

        switch (selectedOption) {
            case "coalBurning":
                if (coalWeight && burningEfficiency) {
                    const emission = (coalWeight * 2.5 * (burningEfficiency / 100)).toFixed(2);
                    output = `${emission} MT CO₂`;
                }
                break;

            case "methaneEmission":
                if (coalMined) {
                    const methaneEmission = (coalMined * 0.3).toFixed(2);
                    output = `${methaneEmission} kg CH₄`;
                }
                break;

            case "renewableReduction":
                if (renewableEnergy) {
                    const savedCO2 = (renewableEnergy * 500).toFixed(2);
                    output = `${savedCO2} kg CO₂ saved`;
                }
                break;

            case "treeAbsorption":
                if (treesPlanted && years) {
                    const absorbedCO2 = (treesPlanted * 22 * years).toFixed(2);
                    output = `${absorbedCO2} kg CO₂ absorbed`;
                }
                break;

            default:
                output = "Please select an option";
        }

        setResult(output);
    };

    return (
        <div className="calculator-container">
            <h1>Carbon Emission Calculator</h1>

            {/* Selection Dropdown */}
            <label>Select a calculation type:</label>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">-- Choose an Option --</option>
                <option value="coalBurning">Emission from Coal Burning</option>
                <option value="methaneEmission">Methane Emission from Mining</option>
                <option value="renewableReduction">CO₂ Reduction via Renewable Energy</option>
                <option value="treeAbsorption">CO₂ Absorption by Trees</option>
            </select>

            <div className="input-container">
                {selectedOption === "coalBurning" && (
                    <>
                        <label>Coal weight (in tonnes):</label>
                        <input type="number" value={coalWeight} onChange={(e) => setCoalWeight(e.target.value)} />

                        <label>Burning Efficiency (%):</label>
                        <input type="number" value={burningEfficiency} onChange={(e) => setBurningEfficiency(e.target.value)} />
                    </>
                )}

                {selectedOption === "methaneEmission" && (
                    <>
                        <label>Coal Mined (in tonnes):</label>
                        <input type="number" value={coalMined} onChange={(e) => setCoalMined(e.target.value)} />
                    </>
                )}

                {selectedOption === "renewableReduction" && (
                    <>
                        <label>Renewable Energy Produced (MWh):</label>
                        <input type="number" value={renewableEnergy} onChange={(e) => setRenewableEnergy(e.target.value)} />
                    </>
                )}

                {selectedOption === "treeAbsorption" && (
                    <>
                        <label>Number of Trees Planted:</label>
                        <input type="number" value={treesPlanted} onChange={(e) => setTreesPlanted(e.target.value)} />

                        <label>Years of Growth:</label>
                        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
                    </>
                )}
            </div>

            <button onClick={calculate} disabled={!selectedOption}>Calculate</button>

            <p>Result: <span>{result}</span></p>
        </div>
    );
};

export default Calculator;
