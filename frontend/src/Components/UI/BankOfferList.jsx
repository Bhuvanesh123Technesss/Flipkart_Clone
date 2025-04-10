import React, {useState} from 'react'

import TagBankOffer from '../UI/TagBankOffer.jsx' 
import '../UI/BankOfferList.css'

const offers = [
    "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
    "5% off up to ₹750 on IDFC FIRST Power Women Platinum. Min Txn Value: ₹5000",
    "Flat ₹1250 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹15000",
    "Flat ₹1500 on HDFC Bank Credit Card EMI. Min Txn Value: ₹15000",
    "Flat ₹1750 on HDFC Bank Credit Card EMI on 6 month tenure. Min Txn Value: ₹30000",
    "Flat ₹2000 on HDFC Bank Credit Card EMI on 9 months tenure. Min Txn Value: ₹30000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    "Flat ₹3000 on HDFC Bank Credit Card EMI on 6 months tenure. Min Txn Value: ₹50000",
    // Add more offers as needed
];

export default function BankOfferList() {

    const [visibleOffers, setVisibleOffers] = useState(5); // Start with 3 offers visible

    const loadMoreOffers = () => {
        setVisibleOffers(prevVisible => prevVisible + 15); // Load 3 more offers
    };

  return (
    <div>
        <div className='flex-col'>
            {offers.slice(0, visibleOffers).map((wording, index) => (
                <div key={index}>
                    <TagBankOffer wordings={wording} />
                    <br />
                </div>
            ))}
            {visibleOffers < offers.length && (
                <p onClick={loadMoreOffers} className='ml-2 text-blue-500 font-medium text-[1.0rem] hover:cursor-pointer'>
                    view more offers
                </p>
            )}
        </div>
    </div>
  )
}
