//const { ConsultantsAdvice } = require('../models');
const { ConsultantsAdvice } = require('../models');
exports.createAdvice = async (req, res) => {
  try {
    const advice = await ConsultantsAdvice.create(req.body);
    res.status(201).json(advice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllAdvice = async (req, res) => {
  try {
    const advice = await ConsultantsAdvice.findAll();
    res.json(advice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAdviceById = async (req, res) => {
  try {
    const advice = await ConsultantsAdvice.findByPk(req.params.id);
    if (advice) {
      res.json(advice);
    } else {
      res.status(404).json({ error: 'Advice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAdvice = async (req, res) => {
  try {
    const [updated] = await ConsultantsAdvice.update(req.body, {
      where: { advice_id: req.params.id },
    });
    if (updated) {
      const updatedAdvice = await ConsultantsAdvice.findByPk(req.params.id);
      res.json(updatedAdvice);
    } else {
      res.status(404).json({ error: 'Advice not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAdvice = async (req, res) => {
  try {
    const deleted = await ConsultantsAdvice.destroy({
      where: { advice_id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Advice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};