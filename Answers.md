- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions are objects that have to contain a key of type and usually a payload, and they are passed to the reducers, which are just functions that take in the initial state and based on the action object, it updates the state accordingly. The store is also a function that takes in any reducers and middleware and acts as the centralized source of truth for your data.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is a global state and any component can access it, while component state is local and usual only that component has access and may be passed down as props. Scalability is great deciding factor to use application state over component state. As your app grows, it become more and more difficult to maintain and/or scale your app if you have state living in different parts of your app. Sometimes, you run into issues half way down your your project and have to restructure your whole app to accomodate.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-Thunk is a middleware that allows us to make asynchronous calls. It changes our action-creators by making them a higher order function and passing it dispatch which allows us to dispatch different actions based on the response of that call.
