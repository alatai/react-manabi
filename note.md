# React memo

## React Basics & Working with Components

### React & Components

React is all about "Components"
Because all user interface in the end are made up of components.

React is all about components and about building.

React allows you to create re-usable and reactive components
consisting of HTML and JavaScript (and CSS).

Declarative Approach

Define the desired target state(s) and let React figure out the
actual JavaScript DOM instructions.

### The Concept of "Composition"("children props")

We could name such a component card, because this is a specific card look.
In web development, when you hear the term card, it's typically means
some kind of container look with rounded corners, drop shadows,
and elements like these.

## React State & Working with Events

### How Component Functions Are Executed

It's all started by the index.js file, where we initially point at the App component.
That's the first component function which is being called and that happens when
the React app is been loaded on the screen which happens when the page is been visited.

That's how react goes through all these components executes all these components functions
and draws something on to the screen.

The only problem is that React never repeats that.
React goes through all of that when the application is initially rendered.

### Working with State

Component function is not called a second time after the initial rendering.
A click occurred or because a variable changed does not trigger this component
function to run again.

To tell React that it should run it again, we need import
something from the React library.

### A Closer Look at the "useState" Hook

If we called setTitle and we assign a new Title, that leads to
this component being called again.

If a component is then re-executed because of such a State change,
for example, React will not reinitialize the State.
Instead of it will detect that this State had been initialized
in the past, and it will just grab the latest State which is based
on some State update.

### Listening to User Input

### Working with Multiple State

### Adding Two-Way Binding

### Lifting State Up
