const express = require('express');
const router = express.Router();

// Mock data for wallet
let wallet = {
    balance: 0,
    transactions: []
};

// Endpoint to get wallet balance
router.get('/balance', (req, res) => {
    res.json({ balance: wallet.balance });
});

// Endpoint to add funds
router.post('/add-funds', (req, res) => {
    const { amount } = req.body;
    if (amount && amount > 0) {
        wallet.balance += amount;
        wallet.transactions.push({ type: 'credit', amount, date: new Date() });
        res.status(200).json({ message: 'Funds added successfully', balance: wallet.balance });
    } else {
        res.status(400).json({ message: 'Invalid amount' });
    }
});

// Endpoint to view transaction history
router.get('/transactions', (req, res) => {
    res.json(wallet.transactions);
});

module.exports = router;