import { uid } from 'uid';
export const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export let getId=uid(16)
export const maxRatingMovie=5