# Searching Visualizer
I built this project for several reasons: build a web application, solidify my understanding for searching algorithms, visualize them, and provide a tool for others to use. Input a value you would like to search and watch the algorithm in action. For now, use the console through inspect to see which indices the algorithm goes through while searching. Below, you can read about the time complexities of the algorithms I used. Cheers!

# Time Complexities of these algorithms
Searching algorithms are algorithms that search an element in a list of elements (numbers, names, anything, literally). For this searching visualizer, the application searches a key value from a list of numbers. 

Another thing about time complexities: space DOES NOT affect time complexity. For example, if I had an array [6], then one could say the time complexity is O(1). But n = 1, so the time complexity is also O(n) with that logic. Don't be fooled!

## Linear Search
Time Complexities
* Worst Case: O(n)
* Average Case: O(n)
* Best Case: O(1)

Linear search is the simplest searching algorithm. Simply, traverse through an array and compare each element with the key value. If the key value is equal to an element in the array, return the index of the matched element in the array.

If the first element in the array is a match to the key value, the time complexity is O(1). It would take us one operation to determine the index location of the match. Otherwise, if the key value is not in the array whatsoever, the time complexity is O(n). Simply, it would take 'n' operations to realize the key value is not even in the array.

My data structures professor said there is a math proof where the worst case time complexity is always more likely than the best case time complexity. In particular, for linear search, the average case just ends up being O(n), so there is relatively no difference to the worse case time complexity.

## Binary Search
Time Complexities
* Worst Case: O(logn)
* Average Case: O(logn)
* Best Case: O(1)

If you know about sorting algorithms, there is a group of sorting algorithms that use "divide and conquer". Similarly, in searching algorithms, there are searching algorithms that fall under a certain criteria: they must be sorted. Bianry search is one of the searching algorithms which requires the array to already be sorted before searching.

Initially, find the middle element in the array. Compare the key value with the middle element. If the middle element matches the key value, return the middle element index. If the middle element is less than the key value, use binary search again in the greater half of the array. Otherwise, use binary search in the smaller half of the array. Continue until either the matched value is found or not found anywhere.

If the middle element of the entire array matches with the key value, the time complexity is O(1). Still, even if it isn't, binary search runs incredibly fast, thanks to its cutting in half property. In computer science, taking the log will always have the base 2. Therefore, each time an array is cut in half is mathematically equivalent to taking log(n), where n is the number of elements in the array. Therefore, the worst case and the average case of the time complexities for binary search is O(log(n)).

Note: There are two ways to implement binary search: iteratively or recursively. Iteratively is preferred as it runs slightly faster and saves more space compared the the recursively programmed binary search.

## Jump Search
Time Complexities
* Worst Case: O(√n)
* Average Case: O(√n)
* Best Case: O(1)

Jump search is another searching algorithm that must be sorted before used. You can implement however way you want. However, the most efficient way to construct this algorithm is to set the number of steps the algorithm will "jump" is √n, where n is the number of elements in the array. For instance, in an array of 18 elements, the algorithm will jump 4 elements at a time (round down the number to the nearest integer).

First start by comparing the first element to the key value. If the key value is greater, jump from the first element to the next element, depending on the steps the algorithm will have to take. Continue comparing until the key value is less than the element. Afterwards, check if the element matches the key value. If not, perform linear search until you find the matched element.

If the first element in the array matches the key value, the time complexity is O(1). Otherwise, it will √n operations, so the time complexity is O(√n). Please visualize the algorithm for a better understanding of jump search.

## Exponential Search
Time Complexities
* Worst Case: O(log(n))
* Average Case: O(log(n))
* Best Case: O(1)

Details coming soon

## Interpolation Search
Time Complexities
* Worst Case: O(n)
* Average Case: O(log(log(n)))
* Best Case: O(1)

Details coming soon

## Future adjustments
* user adjusts array size
* displaying the index location
* disabling hover effect while algorithm is running
* big thanks to my data structures professor, [Clement Mihailescu](https://github.com/clementmihailescu) and [CSALS](https://github.com/CSALS) for the project idea and inspiration!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
