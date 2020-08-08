export const getRandomVariance = (max, isAlwaysPositive) =>
    (isAlwaysPositive ? 1 : Math.round(Math.random()) * 2 - 1) *
    (Math.random() * max);
