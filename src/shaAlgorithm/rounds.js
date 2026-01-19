/**
 * @type {import("../types").RoundsConfig}
 */
const roundsValues = {
    min: 1000,
    max: 99999,
    default: 5000,
};

/**
 * Validates and adjusts the number of rounds for hashing to ensure it's within acceptable bounds.
 * @param {number | undefined} rounds rounds for hashing
 * @returns {number} a valid rounds
 */
function validateRounds(rounds) {
    if (rounds === undefined) return roundsValues.default;

    if (rounds <= roundsValues.min) return roundsValues.min;

    if (rounds >= roundsValues.max) rounds = roundsValues.max;

    return rounds;
}

export default validateRounds;
export { roundsValues };
