Assignment 04

● Is JSX mandatory for React?

- No, JSX is not mandatory for React but for developer.

● Is ES6 mandatory for React?

- No.

● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

- All output will be same.

● How can I write comments in JSX?

- Inside carley bracket we can use our comments betweet "/_" and "_/" .eg- {/_ Hello World _/}

● What is <React.Fragment></React.Fragment> and <></> ?

- both can be use as wrapper when returning more than 1 components wrapping inside it .It will not make unnessary parent element.

● What is Virtual DOM?

- Virtual DOM is used to Compare with new Virtual Dom treee when state or props are change and is one of the core concept of React which make app optimize and faster.

● What is Reconciliation in React?

- React use Virtual Dom to know difference between new Dom Tree and virtual Dom.Only difference component will render onn original Dom.It will make fast by not rendering all components again.

● What is React Fiber?

- React Fiber is a complete rewrite of React’s core rendering algorithm, aimed at making React more flexible and efficient. It enables asynchronous rendering, priority-based updates, and concurrency, allowing React to handle complex UI updates in a way that maintains a smooth and responsive user experience.
  ● Why we need keys in React? When do we need keys in React?

- When React compare Virtual Dom and new Dom tree in same level components list,keys help React to identifie which items have change .This improves perfomance and ensures that React updates the DOM in the most efficient way.

● Can we use index as keys in React?

- Yes we can use index as keys in React,but its not recommended by React team.

● What is props in React? Ways to

- Props is the short form propereties.Props make a way to pass data from a parent component to a child component. They allow components to be dynamic and reusable.

● What is a Config Driven UI ?

- Config driven UI is the frontend setup which can be change UI according to backend data configuration.
