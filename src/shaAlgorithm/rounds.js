/**
 * @constant
 * @readonly
 * @type {{min: 1000; max: 99999; default: 5000}}
 *
 */
export const roundsValues = {
    min: 1000,
    max: 99999,
    default: 5000,
};

/**
 * @param {number | undefined} rounds
 * @returns {number} rounds
 */
export default function validateRounds(rounds) {
    if (rounds === undefined) return roundsValues.default;

    if (rounds <= roundsValues.min) return roundsValues.min;

    if (rounds >= roundsValues.max) rounds = roundsValues.max;

    return rounds;
}
