class Solution {
    printNos(N) {
        function fun(currentN, output) {
            if (currentN === 0) {
                return output; // Return the accumulated output
            }
            if (output === '') {
                return fun(currentN - 1, `${currentN}`); // Start with the first number
            }
            return fun(currentN - 1, `${currentN} ${output}`); // Concatenate numbers in the required format
        }

        const result = fun(N, '');
        console.log(result); // Print the formatted string
        // You can also return the result instead of printing it
        // return result;
    }
}
const solution = new Solution();
solution.printNos(5);