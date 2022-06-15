import React, {useState} from 'react'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useQuery,gql, useMutation} from "@apollo/client";


function PayPaypal({sale, paidOut}) {

    

    const GET_SALE = gql`
    query {
      sales {
        _id,
        numSale,
        note, 
        total,
        state
      }
    }
    `;

    const CREATE_SALE = gql`
    mutation createSale($numSale: String!, $description: String!, $note: String!, $total: String! , $state: String!){
        createSale(sale:{
            numSale:$numSale,
            description:$description,
            note:$note,
            total:$total,
            state:$state
        }){
            _id,
            numSale,
            description,
            note,
            total,
            state
      }
    }
    `;

    const {data} = useQuery(GET_SALE);
    const [createSale] = useMutation(CREATE_SALE);

    
   
    const handleSaveSale = () => {

        let {numSale, description, note, total, state} = sale;
        
        
        numSale = numSale+"";
        total = total+"";

        console.log(numSale, description,total, state);
        createSale({variables:{ numSale, description, note, total, state}})
        

    }

  return (
 
    <PayPalScriptProvider options={{ "client-id": "AQ9TkKTDRKYmjSnYcXIsE0PQE1YGLhJ1JyAr1iORiaZ_XKODpg_WLptSAmpaGHU4vRfuobzp5ab0VHDc", currency: "MXN" }}>
               {console.log(PayPalScriptProvider)}
            <PayPalButtons
                createOrder={(data, actions) => {
                   
                    console.log(sale)
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: sale.total,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        
                        handleSaveSale()
                        paidOut()
                    });
                }}
            />
        </PayPalScriptProvider>
  )
}

export default PayPaypal