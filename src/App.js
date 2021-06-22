import './App.css';
import React from "react";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function App() {

    // this is on the approve function
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    const createOrder = (data, actions) =>{
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };


  return (
        <div className="app">
      <div className="wrapper">

          <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
          />

        </div>
      </div>
  );
}

export default App;


// secret 👉
// EKZTghP7F256UeFPvdhUm2_9Xb4FqP1SsyQZA_7LFjYFU1Amc-k-I5E0a9FZoXdLHgBkcdOsJdmkTR8u

// client id 👉
// ATg8GTv4VioCaiiXrPxvpn40-nAVMwkj6o3bZxzFq65ldVMkwxP-1PVwdijsFzZpMghH5KYiIUx1Cs3-