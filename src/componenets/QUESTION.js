export default [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  {
    id: 'q8',
    text: 'What is a React component?',
    answers: [
      'A function or class that optionally accepts inputs (props) and returns a React element.',
      'A styling feature in React.',
      'A data structure used for holding state.',
      'A utility function for managing side effects.',
    ],
  },
  {
    id: 'q9',
    text: 'Which of the following is used to create a new React app?',
    answers: [
      'create-react-app',
      'react-new',
      'react-cli',
      'npm install react-app',
    ],
  },
  {
    id: 'q10',
    text: 'Which React hook is used to manage side effects?',
    answers: [
      'useEffect',
      'useState',
      'useContext',
      'useReducer',
    ],
  },
  {
    id: 'q11',
    text: 'What is the purpose of the useState hook?',
    answers: [
      'To add state to functional components.',
      'To handle side effects.',
      'To render conditional components.',
      'To update props in a component.',
    ],
  },
  {
    id: 'q12',
    text: 'What is the default value of the React Context API?',
    answers: [
      'undefined',
      'null',
      'false',
      'true',
    ],
  },
  {
    id: 'q13',
    text: 'Which of the following is correct for handling events in React?',
    answers: [
      'Event handlers are written in camelCase.',
      'Event handlers are written in snake_case.',
      'Event handlers are written in uppercase.',
      'React does not handle events.',
    ],
  },
  {
    id: 'q14',
    text: 'What is the significance of the "key" prop in React?',
    answers: [
      'It helps React identify which items have changed, are added, or are removed.',
      'It binds data to components.',
      'It is used for validation of components.',
      'It is required for components to work in production mode.',
    ],
  },
  {
    id: 'q15',
    text: 'Which of the following is a valid way to pass props to a component?',
    answers: [
      'By adding attributes in the JSX tag.',
      'By using the "useProps" hook.',
      'By directly passing a JavaScript object.',
      'Props are automatically passed in the constructor.',
    ],
  },
  {
    id: 'q16',
    text: 'What is the purpose of the useReducer hook?',
    answers: [
      'To manage more complex state logic in functional components.',
      'To trigger rerenders of components.',
      'To make API requests in functional components.',
      'To handle side effects in React.',
    ],
  },
  {
    id: 'q17',
    text: 'Which of the following is a feature of React Virtual DOM?',
    answers: [
      'It improves performance by reducing direct updates to the real DOM.',
      'It is a way to directly interact with the browser DOM.',
      'It updates the page every time the state changes.',
      'It is used for testing React components.',
    ],
  },
  {
    id: 'q18',
    text: 'How do you update state in a class component?',
    answers: [
      'By calling this.setState().',
      'By directly changing the state object.',
      'By using the useState hook.',
      'By calling forceUpdate().',
    ],
  },
  {
    id: 'q19',
    text: 'What does the term "props drilling" refer to?',
    answers: [
      'Passing data from a parent component to a deeply nested child component.',
      'Passing props to sibling components.',
      'Using props to trigger side effects in a component.',
      'The way React processes props in functional components.',
    ],
  },
  {
    id: 'q20',
    text: 'Which method is used to prevent a component from re-rendering in React?',
    answers: [
      'shouldComponentUpdate()',
      'componentWillUpdate()',
      'useMemo()',
      'getSnapshotBeforeUpdate()',
    ],
  },
  {
    id: 'q21',
    text: 'What is the purpose of React Router?',
    answers: [
      'To manage navigation and routing in single-page applications.',
      'To create reusable components in React.',
      'To handle global state management.',
      'To optimize rendering performance.',
    ],
  },
  {
    id: 'q22',
    text: 'What is the difference between functional and class components in React?',
    answers: [
      'Functional components are simpler and use hooks for state, while class components use lifecycle methods.',
      'Class components are stateless, while functional components can have state.',
      'Functional components cannot return JSX.',
      'Class components are deprecated in React 16.',
    ],
  },
  {
    id: 'q23',
    text: 'Which of the following is correct for importing React in a React component?',
    answers: [
      'import React from "react";',
      'import ReactComponent from "react";',
      'import React from "react-dom";',
      'React.import();',
    ],
  },
  {
    id: 'q24',
    text: 'What is the purpose of React Fragments?',
    answers: [
      'To group a list of children without adding extra nodes to the DOM.',
      'To create global state in components.',
      'To style multiple elements.',
      'To create reusable components.',
    ],
  },
  {
    id: 'q25',
    text: 'Which lifecycle method is called before a component is unmounted?',
    answers: [
      'componentWillUnmount()',
      'componentDidMount()',
      'render()',
      'getDerivedStateFromProps()',
    ],
  },
  {
    id: 'q26',
    text: 'How do you handle forms in React?',
    answers: [
      'By using controlled components where form data is handled by state.',
      'By using uncontrolled components with refs.',
      'By using the form tag directly.',
      'By using only JavaScript without JSX.',
    ],
  },
  {
    id: 'q27',
    text: 'What does the React Context API allow you to do?',
    answers: [
      'It allows you to pass data through the component tree without having to pass props manually at every level.',
      'It allows you to manage local state in a component.',
      'It allows you to fetch data from an API.',
      'It allows you to handle side effects in a component.',
    ],
  },
  {
    id: 'q28',
    text: 'What is React Suspense used for?',
    answers: [
      'To manage loading states and asynchronous rendering of components.',
      'To make your components more reusable.',
      'To add new components to the React tree.',
      'To improve code readability in components.',
    ],
  },
  {
    id: 'q29',
    text: 'What does the useRef hook do in React?',
    answers: [
      'It creates a mutable object that persists across renders.',
      'It is used to handle events in components.',
      'It is used to store state values.',
      'It is used for API requests.',
    ],
  },
  {
    id: 'q30',
    text: 'Which of the following is used to trigger a re-render in React?',
    answers: [
      'Changing the state of a component.',
      'Changing a component\'s class name.',
      'Directly manipulating the DOM.',
      'Adding a new event listener.',
    ],
  },
  {
    id: 'q31',
    text: 'What is the purpose of the React.memo function?',
    answers: [
      'To prevent unnecessary re-renders by memoizing the result of a component.',
      'To create a new instance of a component on each render.',
      'To add animations to components.',
      'To convert class components into functional components.',
    ],
  },
  {
    id: 'q32',
    text: 'What does the error boundary concept in React do?',
    answers: [
      'It catches JavaScript errors in any part of the component tree and displays a fallback UI.',
      'It stores global state in a central location.',
      'It provides a way to handle HTTP requests.',
      'It updates the component tree when an error occurs.',
    ],
  },
  {
    id: 'q33',
    text: 'Which of the following hooks allows you to access the context value in React?',
    answers: [
      'useContext',
      'useState',
      'useEffect',
      'useRef',
    ],
  },
  {
    id: 'q34',
    text: 'What is the primary function of the React `useEffect` hook?',
    answers: [
      'To handle side effects in functional components.',
      'To manage state within a component.',
      'To make API calls inside components.',
      'To create context in React.',
    ],
  },
  {
    id: 'q35',
    text: 'Which statement is true about React\'s reconciliation process?',
    answers: [
      'React compares the previous and current virtual DOM trees and updates only the changed parts.',
      'React updates the entire DOM tree on every render.',
      'React updates the real DOM immediately when state changes.',
      'React does not require reconciliation.',
    ],
  },
  {
    id: 'q36',
    text: 'What is the purpose of the `useCallback` hook?',
    answers: [
      'To memoize callback functions so that they are not recreated on each render.',
      'To create a new instance of a function on every render.',
      'To handle form input changes.',
      'To trigger an effect when a component mounts.',
    ],
  },
  {
    id: 'q37',
    text: 'What does the `dangerouslySetInnerHTML` prop do in React?',
    answers: [
      'It sets HTML content directly inside a React element (use with caution).',
      'It safely escapes HTML content before rendering.',
      'It updates the DOM directly.',
      'It is used for server-side rendering.',
    ],
  },
  {
    id: 'q38',
    text: 'What is the purpose of React DevTools?',
    answers: [
      'It provides an interface for inspecting React components and their states.',
      'It allows you to test the performance of React components.',
      'It automatically fixes bugs in React apps.',
      'It helps optimize the build process of React apps.',
    ],
  },
  {
    id: 'q39',
    text: 'Which method is used to pass a value to a child component in React?',
    answers: [
      'By using props.',
      'By using state directly.',
      'By passing global variables.',
      'By modifying the parent DOM element.',
    ],
  },
  {
    id: 'q40',
    text: 'What is the default behavior of a React component when no `render` method is defined?',
    answers: [
      'React will render nothing and the component will return null.',
      'React will throw an error.',
      'React will render a default message.',
      'React will automatically call the component\'s lifecycle methods.',
    ],
  },
  {
    id: 'q41',
    text: 'How do you make a component update when props change?',
    answers: [
      'React components automatically re-render when props change.',
      'By calling setState() in the parent component.',
      'By manually forcing the update using forceUpdate().',
      'By using the shouldComponentUpdate() lifecycle method.',
    ],
  },
  {
    id: 'q42',
    text: 'What is the main advantage of using React over traditional JavaScript for DOM manipulation?',
    answers: [
      'React uses a virtual DOM, which makes updates more efficient.',
      'React directly manipulates the real DOM.',
      'React only works with client-side rendering.',
      'React makes CSS styling easier.',
    ],
  },
  {
    id: 'q43',
    text: 'Which hook allows you to get the previous value of a state variable?',
    answers: [
      'useRef',
      'useEffect',
      'useState',
      'useReducer',
    ],
  },
  {
    id: 'q44',
    text: 'What does the `useLayoutEffect` hook do in React?',
    answers: [
      'It is similar to useEffect, but it runs synchronously after all DOM mutations.',
      'It is used to manage state in functional components.',
      'It runs after the component is mounted.',
      'It handles side effects in functional components.',
    ],
  },
  {
    id: 'q45',
    text: 'Which lifecycle method is called before a component is updated?',
    answers: [
      'getDerivedStateFromProps()',
      'componentDidMount()',
      'shouldComponentUpdate()',
      'componentDidUpdate()',
    ],
  },
  {
    id: 'q46',
    text: 'What is the purpose of the `React.lazy` function?',
    answers: [
      'It enables code splitting by dynamically loading components.',
      'It helps in caching data.',
      'It optimizes rendering of components.',
      'It prevents unnecessary re-renders.',
    ],
  },
  {
    id: 'q47',
    text: 'What is the purpose of the `useImperativeHandle` hook?',
    answers: [
      'It customizes the instance value that is exposed to parent components when using refs.',
      'It manages state inside functional components.',
      'It triggers side effects in the component.',
      'It helps manage the lifecycle of a component.',
    ],
  },
  {
    id: 'q48',
    text: 'Which of the following is true about the `useEffect` hook?',
    answers: [
      'It runs after every render by default, unless specified otherwise.',
      'It runs synchronously before the component renders.',
      'It runs only when state changes.',
      'It can only be used in class components.',
    ],
  },
  {
    id: 'q49',
    text: 'Which method is used to trigger a re-render of a React component?',
    answers: [
      'By updating the component\'s state.',
      'By directly manipulating the DOM.',
      'By calling forceUpdate().',
      'By using the context API.',
    ],
  },
  {
    id: 'q50',
    text: 'What is a common use case for `React.memo`?',
    answers: [
      'Memoizing functional components to prevent unnecessary re-renders.',
      'Memoizing state changes.',
      'Memoizing props in a class component.',
      'Memoizing functions inside components.',
    ],
  },
];
