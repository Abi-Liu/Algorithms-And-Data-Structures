// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// link: https://leetcode.com/problems/koko-eating-bananas/description/

var minEatingSpeed = function (piles, h) {
  // left and right in this case will be representative of k bananas eaten per hour
  let left = 0,
    right = Math.max(...piles);
  // arbitrary min, since we want to store the minimum number of bananas/hr
  let min = Infinity;
  // in this loop, we are binary searching for the minimum k bananas eaten per hour
  // we can find how long koko takes on a pile of bananas by simplying dividng piles[i]/k and rounding the number up.
  // we round up because we know koko won't move onto the next pile until one hour has passed.
  // then we can just check to see if hours <= h and move our left and right indexes accordingly
  while (left <= right) {
    let hours = 0;
    const k = Math.floor((left + right) / 2);
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / k);
    }
    if (hours <= h) {
      if (k < min) {
        min = k;
      }
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return min;
};

module.exports = minEatingSpeed;
