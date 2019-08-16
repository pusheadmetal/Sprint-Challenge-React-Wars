# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

A: React JS is a JavaScript library that's used to build dynamic, front-end applications. With React, you can build powerful UI's using components, which manage their own state, keeping it out of the DOM entirely. Since data is rendered to the application dynamically, changes occur in real-time without the need to refresh the page.

1. What does it mean to think in react?

A: Thinking in React involves planning out how you will build a React Application. Start with a mock, break the UI into a component hierarchy, build a static version, identify the minimal representation of UI state, identify where your state should live, and add inverse data flow.

1. Describe state.

A: State is an object that determines how a component renders and behaves. Without it, you could not create dynamic components.

1. Describe props.

A: Props are "properties" that get passed to other components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A: A side effect is the modification of anything outside of itself. So a function is said to have a side effect if it modifies anything outside of its body. You can sync effects in a React component to state or prop changes by using useEffect( () =>{code}, state/prop).
