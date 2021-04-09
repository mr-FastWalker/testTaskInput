import './App.css';
import React, {useState} from "react";

function App() {

    return (
        <div className="App">
            <div>Пожалуйста, введите ваш текст</div>
            <div>
                <InputField/>
            </div>
        </div>
    );
}

// InputField можно вынести в отдельный файл
const InputField = () => {

    let userText = ''

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const resetInput = (e) => {
        setUserInput(e.currentTarget.value = '')
    }

    (userInput === '') ? userText = 'Здесь будет ваш текст' : userText = userInput;

    return (
        <div>
            <input
                className="myInputField"
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Введите значение..."
            />
            <button className="buttonClean"
                    onClick={resetInput}
            >Reset
            </button>

            <div className="outputText">
                <h2>{userText}</h2>
            </div>
        </div>
    )
}

export default App;


