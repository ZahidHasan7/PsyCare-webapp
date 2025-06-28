const { Payment } = require('../models');

exports.bkashPayment = async (req, res) => {
  try {
    const { amount, transactionId } = req.body;
    const userId = req.user.user_id;

    const payment = await Payment.create({
      userId,
      amount,
      method: 'bkash',
      status: 'processing',
      transactionId,
    });

    res.status(201).json({ message: 'bKash payment initiated', payment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process bKash payment' });
  }
};

exports.sslPayment = async (req, res) => {
  try {
    const { amount, transactionId } = req.body;
    const userId = req.user.user_id;

    const payment = await Payment.create({
      userId,
      amount,
      method: 'sslcommerz',
      status: 'processing',
      transactionId,
    });

    res.status(201).json({ message: 'SSLCommerz payment initiated', payment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process SSLCommerz payment' });
  }
};

exports.checkStatus = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: 'Error checking payment status' });
  }
};

exports.paymentWebhook = async (req, res) => {
  try {
    const { transactionId, status } = req.body;
    await Payment.update(
      { status },
      { where: { transactionId } }
    );
    res.status(200).json({ message: 'Webhook received and payment updated' });
  } catch (err) {
    res.status(500).json({ error: 'Webhook processing failed' });
  }
};

exports.paymentHistory = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const history = await Payment.findAll({ where: { userId } });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch payment history' });
  }
};
