const bcrypt = require('bcryptjs');
const { User } = require('../models');

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.user_id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not foundddd' });
    }

    // Remove password from response
    const userProfile = {
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      age: user.age,
      role: user.role,
      specialization: user.specialization
    };

    res.json({
      success: true,
      message: 'Profile fetched successfully',
      profile: userProfile
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, age, specialization } = req.body;
    const userId = req.user.user_id;

    // Find user first
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Prepare update data (only allow certain fields to be updated)
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (age !== undefined) updateData.age = age;
    if (specialization !== undefined) updateData.specialization = specialization;

    // Update user profile
    const [updated] = await User.update(updateData, {
      where: { user_id: userId }
    });

    if (updated) {
      // Fetch updated user
      const updatedUser = await User.findByPk(userId);
      
      const userProfile = {
        user_id: updatedUser.user_id,
        name: updatedUser.name,
        email: updatedUser.email,
        age: updatedUser.age,
        role: updatedUser.role,
        specialization: updatedUser.specialization
      };

      res.json({
        success: true,
        message: 'Profile updated successfully',
        profile: userProfile
      });
    } else {
      res.status(400).json({ error: 'Failed to update profile' });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Change Password
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.user_id;

    // Validate input
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        error: 'Current password and new password are required' 
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ 
        error: 'New password must be at least 6 characters long' 
      });
    }

    // Find user
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password
    const [updated] = await User.update(
      { password: hashedNewPassword },
      { where: { user_id: userId } }
    );

    if (updated) {
      res.json({
        success: true,
        message: 'Password changed successfully'
      });
    } else {
      res.status(400).json({ error: 'Failed to change password' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User Account
exports.deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const userId = req.user.user_id;

    // Validate password confirmation
    if (!password) {
      return res.status(400).json({ 
        error: 'Password confirmation is required to delete account' 
      });
    }

    // Find user
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Password is incorrect' });
    }

    // Delete user account
    const deleted = await User.destroy({
      where: { user_id: userId }
    });

    if (deleted) {
      res.json({
        success: true,
        message: 'Account deleted successfully'
      });
    } else {
      res.status(400).json({ error: 'Failed to delete account' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Consultants (Public endpoint for user to see available consultants)
exports.getConsultants = async (req, res) => {
  try {
    const consultants = await User.findAll({
      where: { role: 'consultant' },
      attributes: ['user_id', 'name', 'age', 'specialization'] // Exclude email and password
    });

    res.json({
      success: true,
      message: 'Consultants fetched successfully',
      consultants: consultants
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};