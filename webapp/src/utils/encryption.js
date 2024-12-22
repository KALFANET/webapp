import bcrypt from 'bcryptjs';

/**
 * Hash a plain text password
 * @param {string} password - Plain text password
 * @returns {string} - Hashed password
 */
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10); // Create salt with 10 rounds
  return bcrypt.hashSync(password, salt);
};

/**
 * Compare a plain text password with a hashed password
 * @param {string} password - Plain text password
 * @param {string} hashedPassword - Hashed password
 * @returns {boolean} - True if passwords match, false otherwise
 */
export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};