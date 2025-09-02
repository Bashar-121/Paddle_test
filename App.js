import React, { useState } from 'react';
import './App.css';
import PaymentForm from './components/PaymentForm';

function App() {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const togglePaymentForm = () => {
        setShowPaymentForm(!showPaymentForm);
    };

    return (
        <div className="App">
            <h1>Welcome to the Payment Portal</h1>
            <button onClick={togglePaymentForm}>
                {showPaymentForm ? 'Hide Payment Form' : 'Show Payment Form'}
            </button>
            {showPaymentForm && <PaymentForm />}
        </div>
    );
}

export default App;