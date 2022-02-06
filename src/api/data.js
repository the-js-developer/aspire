const axios = require('axios');

const cards = [
    {
        name: 'Mark Henry',
        validity: '11/24',
        maskedCardNumer: '2232',
        canFreeze: true,
        canSetLimit: true,
        canAddToGpay: true,
        canReplace: true,
        canCancel: true,
    },
    {
        name: 'Steve Harry',
        validity: '10/22',
        maskedCardNumer: '2902',
        canFreeze: false,
        canSetLimit: true,
        canAddToGpay: true,
        canReplace: true,
        canCancel: true,
    },
    {
        name: 'Tom Holland',
        validity: '09/23',
        maskedCardNumer: '9876',
        canFreeze: true,
        canSetLimit: true,
        canAddToGpay: true,
        canReplace: true,
        canCancel: true,
    }
];

const transactions = [
    {
        secondParty: 'Hamleys',
        type: 'Credit',
        date: '20 May 2020',
        amount: '200',
        id: '1'
    },
    {
        secondParty: 'Hamleys',
        type: 'Debit',
        date: '20 May 2020',
        amount: '350',
        id: '2'
    },
    {
        secondParty: 'Hamleys',
        type: 'Debit',
        date: '20 May 2020',
        amount: '400',
        id: '3'
    }
]

const api = {
    getCardsData() {
        //axios.get('url')
        return cards;
    },

    getTransactions() {
        //axios.get('url')
        return transactions;
    }
}



module.exports = api;
