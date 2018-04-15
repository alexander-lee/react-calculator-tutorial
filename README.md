# React Workshop - Calculator

## Introduction
Welcome to the ReactJS Workshop! In this project you'll be building a basic four functioning calculator from scratch in React.

By the end of this tutorial, I hope you all will have a better understanding of creating components, using the prop and state, and working with events in React.

Be sure to check the [slides](https://docs.google.com/presentation/d/1y2mXW6CcVWq6aSKoHpaVXErziWts0eYvW9ICelN3grY/edit#slide=id.p) for some React background information!

## Prerequisites
Before this tutorial, make sure to have downloaded [Node.js/NPM](https://nodejs.org/en/).

I recommend the Latest Stable Version (lts)

## Part 1: Setup
All of our files should be listed under `/react-calculator`.

On your terminal, let's go into this directory and start the project

```shell
$ cd react-calculator
$ npm install # or yarn install
$ npm start # or yarn start
```

You should see a calculator similar to the one shown below. None of the buttons work right now, but that's up to us to implement!

PUT IMAGE HERE


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

### Writing our Render Function
Every React component requires a `render()` function that defines what "HTML" the component should return upon rendering. This should look like the `<div>` defined originally in our `<Calculator />`

```HTML
<div className="button">+</div>
```

Usually in our render function, we will use the component's props or/and state to render similar looking `<div>`s.

Inside our component code, let's define the render function as shown:

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

## Part 3: Updating the Calculator Component

### Switching from <div> to <Button>
### Adding Click Handlers

## Part 4: Implementing the Calculator Functionality

### Implementing Addition / Subtraction

### Implementation the Evaluation (=) Button

### Storing Previous Results

## Optional: Further Work
This calculator is far from done, we also need to implement multiplication, division, Ans, and the +/- operator.

Feel free to try these out on your own, the solutions are posted in `react-calculator-completed`.

If you need hints, remember to append `*` for multiplication instead of `×`.

In addition, extracting the Ans (previous expression) from the `previousEvaluations` array will require some string functions. I suggest looking at `.split()` and `.trim()`.

Finally, the sign flipping (+/-) operator will require you to check whether the entire expression is a single number or not, since we can't flip the sign of something like `1 + 4`, unless we do `-(1 + 4)`. This should be a simple sign flip so that expressions like `42` will get converted to `-42` and vice versa.
