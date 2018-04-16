# React Workshop - Calculator

## Introduction
Welcome to the ReactJS Workshop! In this project you'll be building a basic four functioning calculator from scratch in React.

By the end of this tutorial, I hope you all will have a better understanding of creating components, using the prop and state, and working with events in React.

Be sure to check the [slides](https://docs.google.com/presentation/d/1y2mXW6CcVWq6aSKoHpaVXErziWts0eYvW9ICelN3grY/edit#slide=id.p) for some React background information!

‎

## Prerequisites
Before this tutorial, make sure to download the following:

* [Node.js/NPM](https://nodejs.org/en/) (I recommend the Latest Stable Version)
* [React Dev Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) or the respective extension for your browser.

‎

## Part 1: Setup
All of our files should be listed under `/react-calculator`.

On your terminal, let's go into this directory and start the project

```shell
$ cd react-calculator
$ npm install # or yarn install
$ npm start # or yarn start
```

You should see a calculator similar to the one shown below. None of the buttons work right now, but that's up to us to implement!

![Calculator Demo](https://i.imgur.com/Jlimhfy.png)
‎

## Part 2: Creating a Button Component
If we look at our Calculator component in `src/Calculator.js`, we can see this is what's rendering our Calculator.

If we look at the `render()` function, there is a lot of similar looking `<div>`s

```html
<div className="row">
  <div className="button">AC</div>
  <div className="button">Ans</div>
  <div className="button">+/−</div>
  <div className="button orange">÷</div>
</div>
```

Using the power of React, we should be able to make more reusable code, but converting these buttons into components.

‎

### Making the Button Component
Create the file `src/Button.js`, and copy the paste the following code below:

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
}

export default Button;
```

This is the skeleton of our component for which we need to implement. Let's start off by defining some props.

We know that some of our `<div>`s will have the CSS class `button` or the class `button orange` or for the 0 button `button two-space`. Since we know that these aren't going to be changed, let's define these as our props.

In addition, we know that all buttons will have text (such as a number or an operator), so let's also define that as a prop type.

To define the prop types of a component, we define a static JS Object/Dictionary inside component called `static propTypes`.

```JS
class Button extends Component {
  static propTypes = {
    isOrange: PropTypes.bool,
    isTwoSpaced: PropTypes.bool,
    text: PropTypes.string,
  }
}
```

Here, we can see the different types of props, React has to offer. The purpose of defining the `propTypes` is so React can validate the variable type of your props and can throw warnings when they aren't (such as having number for a prop that was defined as a bool).

A List of React's PropTypes can be [found here](https://reactjs.org/docs/typechecking-with-proptypes.html)

‎

### Writing our Render Function
Every React component requires a `render()` function that defines what "HTML" the component should return upon rendering. This should look like the `<div>` defined originally in our `<Calculator />`

```HTML
<div className="button">+</div>
```

Usually in our render function, we will use the component's props or/and state to render similar looking `<div>`s. Inside our component code, let's define the render function as shown:

**NOTE:** In order to include JS code in our HTML, we can use the curly brackets (*{*, *}*).

For example:
```JSX
<div>{myVariable}</div>
```


```JSX
render() {
  // Code that will add the correct classNames
  let className = 'button';

  if (this.props.isOrange) {
    // If the button is orange, we want to append the 'orange' CSS class, to have an overall 'button orange' class.

    className += ' orange'; // Make sure to include that space
  }

  if (this.props.isTwoSpaced) {
    // Similar logic for the two spaced '0' button.

    className += ' two-space';
  }

  return (
    <div className={className}>
      {this.props.text}
    </div>
  );
}
```

Another side note, we need to use `className` instead of `class`, because `class` is reserved by HTML for CSS classes, so React needed to find another term to fit the same purpose.

‎

## Part 3: Updating the Calculator Component

### Switching from `<div>` to `<Button>`
Let's now add our newly created `<Button>` into our `<Calculator>` component. In `src/Calculator.js` import the Button at the top of our file as shown.

```JSX
import Button from './Button.js';
```

Now in our `render()` function, let's replace our `<div className="button" />` with `<Button>`s. An example for the first row is shown below:

```JSX
// Inside <div className="buttons-section">
<div className="row">
  <Button text="AC" />
  <Button text="Ans" />
  <Button text="+/-" />
  <Button isOrange={true} text="÷" />
</div>
```

A couple things to note, while most HTML tags have both an opening and closing tag like a `<div></div>`, for React components, if we don't need the closing tag, we can create a self-closing tag as shown `<div />`. In this case, the `<Button />` translates to `<Button></Button>`.

In addition, we our method of inserting props into our components is similar to how we define HTML tag attributes. You can also notice that the `isOrange` prop is inherently `false`, so only for the '÷' button do we need to make it `true`.

Convert the rest of the `<div>`s into `<Button />`s and run the app again with `npm start` or `yarn start` to make sure everything's still working.

Everything should look the same; however, now our code should be in React. If you open up the Chrome Developer Tools and click on the React tab (or a similar method if you're using a different browser), you should see the following:

![Calculator Dev Tools](https://i.imgur.com/NXwiqfv.png)

With the React Developer Tools, we have the ability to see what our React DOM (Document Object Model) looks like, and we also can inspect specific components to view their respective props or state values.

‎

### Adding Click Handlers
Now, let's add functionality to these buttons. In React, when working with a parent and children components, it's a standard practice to create a click handler in the parent, and then pass the handler to its children via a prop.

So in `src/Button.js`, let's add a new prop to our `propTypes` definition.

```JS
onClick: PropTypes.func
```

In React, all native HTML elements (`<div>`, `<a>`, `<img>`, etc...) have a prop/attribute called `onClick`. In our `render()` function, let's pass the **Button's `onClick` prop** to the <div> as shown.

```JSX
render() {
  ...
  return (
    <div className={className} onClick={this.props.onClick}>
      {this.props.text}
    </div>
  );
}
```

Now once we have that working, let's go back to `src/Calculator.js`, and create our click handler function to pass down to the `<Button>`s. Since, different buttons are going to act differently when clicked, for now, let's make a stub function to test if our handler works.

```JSX
// In the class Calculator
numberClicked = () => {
  alert('Number Clicked!');
}

// In the render function of Calculator
<Button text="AC" onClick={this.numberClicked}
```

A couple things to note, numberClicked was defined as a Javascript Arrow Function `() => {}`, rather than a normal function for reasons to how Javascript works. Essentially, it becomes a scoping issue with `this` in JS. For more information on [Arrow Functions vs. Normal Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) check out the Mozilla Docs!

In addition, we pass our function to our `<Button>` as

```JSX
onClick={this.numberClicked}
```

instead of

```JSX
onClick={this.numberClicked()}
```

This is because, doing the latter will immediately call numberClicked instead of referencing it in the component. This is a common **pitfall** when first coding in React, so remember not to accidentally call your function when passing it down to your children.

Let's run the app again, and upon clicking the 'AC' Button, you should get an alert to pop up similar to the one below.

![Calculator Button Handler](https://i.imgur.com/BVRRss9.png)

Awesome! Now that we have button clicking to work, we can finally start adding functionality to our Calculator!

## Part 4: Implementing the Calculator Functionality

‎

### Adding a Component State
If you look at our Calculator `render()` function, we have hardcoded `0` into the section where our output should be.

```HTML
<div className="display-screen">
  <div className="calculation-item">
    0
  </div>
</div>
```

As we click buttons on our calculator, we should be changing this value upon every click rather than having a hardcoded `0`. This is where **React State** comes in. Perhaps, we can define a variable in our state that our buttons can alter, and that our render function can display instead.

To define the initial state of our component, we first need to set it as a member variable in our Calculator's constructor.

```JSX
class Calculator extends Component {
  constructor(props) {
    super(props);

    // Set up our initial state
    this.state = {
      currentExpression: ''
    };
  }

  ...
}
```

Here we have defined a variable in our state that keeps track of what the current output of our calculator looks like. In our render function, let's use this new state variable instead of our hardcoded `0`.

```JSX
// Inside class Calculator
render() {
  return (
    <div className="calculator">
      <div className="display-screen">
        <div className="calculation-item">
          {this.state.currentExpression}
        </div>
      </div>
      ...
    </div>
```

If you're extra fancy, on default we can display a 0 even if our `currentExpression` is empty.

```JSX
{this.state.currentExpression === '' ? 0 : this.state.currentExpression}
```

This is a ternary which essentially has the following format

```JS
condition ? true_result : false_result
```
which translates to

```JS
let variable;
if (condition) {
  variable = true_result
}
else {
  variable = false_result
}
```

‎

### Implementing Number Buttons
Now that we have our state, we can augment this in our `numberClicked` handler. React gives us a `setState({ newState })` function that will call the `render()` function after setting the state. This makes it very useful such that we don't have to call `render` ourselves after updating the state of our component.

```JS
numberClicked = (number) => {
  let currentExpression = this.state.currentExpression;
  currentExpression += number;

  this.setState({
    currentExpression: currentExpression
  });
}
```

React values the idea that the state is immutable (meaning that we create a new state object rather than update the one we currently have), this makes it easier for React behind the scenes to update components accordingly. Thus we first create a new reference of our current state's `currentExpression`, and append the new number to our new reference, then update our state with this new reference.

Now we also added a parameter to this click handler, **we can't** pass it in as
```JS
onClick={this.numberClicked('5')}
```

This actually will cause an *infinite* loop, killing our browser, since `numberClicked()` calls `setState()` which calls `render()`. Instead for **functions with parameters**, we can wrap the call in another function (This is why JS is so functional!).

```JS
onClick={() => this.numberClicked('5')}
```

For every **number** button, add the `numberClicked` handler, and now your calculator should be semi-functional!

‎

### Implementing Addition / Subtraction
For addition and subtraction, we should make different click handlers with similar functionality to the `numberClicked` handler, except we need to append a `+` or `-` sign instead. The addition click handler is shown below:

```JS
addClicked = () => {
  let currentExpression = this.state.currentExpression;
  currentExpression += '+';

  this.setState({
    currentExpression: currentExpression
  });
}
```

Try the subtraction click handler on your own! **Remember to link the click handlers to your buttons!**

‎

### Implementation the Evaluation (=) Button
For the evaluation or equals button, we should also make a different click handler called `evaluate()`.

For `evaluate()`, we are going to use the native JS function `eval()` to evaluate our `currentExpression` string. So apply similar logic from the other click handlers, but this time, instead of appending a new character, make the `currentExpression` = `eval(this.state.currentExpression)`

**NOTE:** `eval()` will error on invalid arithmetic strings, so you could wrap this in a try & catch block as shown:

```JS
let evaluation = 'NaN';

try {
  evaluation = eval(this.state.currentExpression);
}
catch (e) {
  alert('Invalid Expression!');
}
```

This sets the evaluation on default to 'NaN', and if `eval()` succeeds, then we can update `this.state.currentExpression` accordingly.

**Remember to link this with the = button in your render method!**

Now when we run our app again, we can now type valid expressions, our calculator should show the result of the expression!

‎

### Storing Previous Results
Now let's use the power of our React state to store the previous results as well. In our `constructor()`, let's add a new state variable to store all of our results.

```JS
// In constructor(props)

this.state = {
  currentExpression: '',
  previousEvaluations: []
}
```

Next, let's add some new logic to our `evaluate()` function. Right before we update our state with the evaluated expression, let's also append the `currentExpression` and its result to our `previousEvaluations` array.

```JS
evaluate = () => {
  /* Updating the evaluation code */
  ...

  const previousEvaluations = this.state.previousEvaluations;
  previousEvaluations.push(currentExpression + ' = ' + evaluation);

  this.setState({
    currentExpression: evaluation,
    previousEvaluations: previousEvaluations
  });
}
```

Finally, let's convert our array of previous evaluation strings into HTML! In our `render` function, let's go to the `<div className="display-screen">`.

In React, we can treat HTML elements like objects, and in that sense, we can create an array of `<div>`s to render. For example, passing in the following code will work:

```JSX
render() {
  return [
    <div>Div 1</div>,
    <div>Div 2</div>,
    <div>Div 3</div>
  ];
}
```

Using this idea, iterate through `this.state.previousEvaluations` and create an array of `<div className="calculation-item">`s.

```JSX
render() {
  return (
    <div className="calculator">
      <div className="display-screen">
        <div className="calculation-item">
          {this.state.currentExpression === '' ? 0 : this.state.currentExpression}
        </div>
        {
          // We need to reverse the array because the CSS renders the list in reverse order
          this.state.previousEvaluations.map((evaluation, index) => {
            return <div className="calculation-item">{evaluation}</div>;
          }).reverse()
        }
      </div>
      ...
```

Ignoring the first calculation `<div>` (this was to display the currentResult), below we have code that will iterate through `this.state.previousEvaluations` and return a `<div className="calculation-item">` containing the string from `this.state.previousEvaluations`.

`Array.map(func)` is a JS function that takes in an array and returns a new array depending on what you return from the `func`. For more information about [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) check out the Mozilla Docs!

We also **reverse** the order of how the <div `className="calculation-item">`s are printed because of how the CSS renders the list (blame Flexbox!)

Now run the app again, upon entering a calculation, we should now have a list of previous expressions.

![Calculator with Previous Results](https://i.imgur.com/DK3cxX3.png)


‎

### Clearing our Calculator
I'll let you implement the clear functionality on your own, remember we just need to follow the steps from before.

1. Create a Click Handler
2. Implement the Click Handler to update our `this.state`
3. Link the Click Handler to the corresponding button

We can make our clear button, clear our state (essentially setting it back to what we specified our initial state in the constructor to be).

‎

**Challenge:** You can try creating a clear handler similar to the ones in real calculators with 'AC' and 'C'. A normal clear 'C' should just reset the `currentExpression`. An all clear 'AC' should reset the `previousEvaluations` array. We should perform a 'C' when the `currentExpression` isn't empty, and perform a 'AC' otherwise.

`currentExpression === ''` should be a good condition to help you with that.

### 🎉Hurray!!🎉 
We have completed our Calculator! Check out the **Optional** section below to complete the functionality of the rest of the buttons.

‎

## Optional: Further Work
This calculator is far from done, we also need to implement multiplication, division, Ans, and the +/- operator.

Feel free to try these out on your own, the solutions are posted in `react-calculator-completed`.

If you need hints, remember to append `*` for multiplication instead of `×`.

In addition, extracting the Ans (previous expression) from the `previousEvaluations` array will require some string functions. I suggest looking at `.split()` and `.trim()`.

Finally, the sign flipping (+/-) operator will require you to check whether the entire expression is a single number or not, since we can't flip the sign of something like `1 + 4`, unless we do `-(1 + 4)`. This should be a simple sign flip so that expressions like `42` will get converted to `-42` and vice versa.
