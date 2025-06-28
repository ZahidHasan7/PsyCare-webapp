const { User, ConsultantReview } = require('../models');
const { Op } = require('sequelize');

exports.listConsultants = async (req, res) => {
  try {
    const consultants = await User.findAll({
      where: { role: 'consultant' },
      attributes: ['user_id', 'name', 'age', 'specialization'],
    });
    res.json({ success: true, consultants });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getConsultantProfile = async (req, res) => {
  try {
    const consultant = await User.findByPk(req.params.id, {
      attributes: ['user_id', 'name', 'age', 'specialization', 'email'],
    });
    if (!consultant || consultant.role !== 'consultant') {
      return res.status(404).json({ error: 'Consultant not found' });
    }
    res.json({ success: true, consultant });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchBySpecialization = async (req, res) => {
  const { q } = req.query;
  try {
    const consultants = await User.findAll({
      where: {
        role: 'consultant',
        specialization: { [Op.like]: `%${q}%` },
      },
      attributes: ['user_id', 'name', 'specialization'],
    });
    res.json({ success: true, consultants });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.availableConsultants = async (req, res) => {
  // You can implement availability status later
  res.json({ success: true, message: 'Placeholder: Add availability logic' });
};

exports.applyToBeConsultant = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.user_id);
    user.role = 'consultant';
    user.specialization = req.body.specialization;
    await user.save();
    res.json({ success: true, message: 'Application submitted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateConsultantProfile = async (req, res) => {
  try {
    const consultant = await User.findByPk(req.params.id);
    if (!consultant || consultant.role !== 'consultant') {
      return res.status(404).json({ error: 'Consultant not found' });
    }
    await consultant.update(req.body);
    res.json({ success: true, consultant });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSpecializations = async (req, res) => {
  try {
    const specializations = await User.findAll({
      where: { role: 'consultant' },
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('specialization')), 'specialization']],
    });
    res.json({ success: true, specializations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBySpecialty = async (req, res) => {
  try {
    const consultants = await User.findAll({
      where: {
        role: 'consultant',
        specialization: req.params.specialty,
      },
    });
    res.json({ success: true, consultants });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getConsultantReviews = async (req, res) => {
  try {
    const reviews = await ConsultantReview.findAll({
      where: { consultant_id: req.params.id },
    });
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = await ConsultantReview.create({
      user_id: req.user.user_id,
      consultant_id: req.params.id,
      rating,
      comment,
    });
    res.json({ success: true, review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
