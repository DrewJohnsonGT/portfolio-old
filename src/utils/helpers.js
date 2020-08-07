export const getRandomVariance = (max, isAlwasyNegative) =>
    (isAlwasyNegative ? -1 : Math.round(Math.random()) * 2 - 1) *
    (Math.random() * max);
