
/**
 * Template.net technical challenge 
 * @author: Mai Nguyen
 * Email: nqmai88@gmail.com
 * Position: Senior Front-end Developer
 *  */ 


/**
 * Function countTeam return the number of teams you can form given the conditions.
 * There are n soliders standing in a line. Each soldier is assigned a unique rating value.
 * You have to form a team of 3 soldiers amongst them under the follwing rules:
 * - Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k])
 * - A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n)
 * 
 * @param {Array} rating an array of rating soldiers.
 * @return {Number} Return the number of teams you can form given the conditions.
 */
function countTeam (rating) {
    let counter = 0;
    const ratingLength = rating.length;

    // If the length of soliders is less than 3 so the counter should be 0 immediately 
    if (ratingLength < 3) {
        return counter;
    }

    // If the length of soliders is equal and more than 3 so we check the next conditions.
    for(let i = 0; i < ratingLength - 2; i++) {
        for(let j = i + 1; j < ratingLength - 1 ; j++) {
            for(let k = j + 1; k < ratingLength ; k++) {
                // Checking the rating team is valid, if yes the counter is increased.
                if (((rating[i] < rating[j]) && (rating[j] < rating[k])) || 
                    ((rating[i] > rating[j]) && (rating[j] > rating[k]))) {
                    counter ++;
                }
            }
        }
    }

    return counter;
}