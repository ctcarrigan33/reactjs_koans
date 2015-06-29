import React from 'react';

// Every React component exposes special methods that allow you to plug in logic 
// when certain events occur during component's life. They are called 
// 'lifecycle methods' and they can be used in variety of ways.
// They are used mostly to integrate non-React code manipulating the DOM with 
// your components - like autocomplete, jQuery plugins etc.
//
// There are three methods that are widely used:
// * componentDidMount - this method fires when React component is rendered for 
//                       the first time. 
//                       Such render can be caused by an explicit React.render 
//                       call or when a component is rendered within a render 
//                       method of the parent component.
//
// * componentDidUpdate - this method fires when a component is updated - 
//                        when state changes or forceUpdate method 
//                        is called explicitly.
//
// * componentWillUnmount - this method fires before the component 'dies'. You 
//                          can unmount the component directly using 
//                          React.unmountComponentAtNode method. A component can 
//                          be also unmounted during re-rendering of the parent component.
//
// Tasks for this exercise are in comments inside the component class code.
//
// In this exercise lifecycle methods will be used to provide convenient debug 
// messages in developer's console.
// There are more lifecycle methods available. 
// Those three presented are commonly used.
//
// Extra task: Learn about componentWillUpdate. What's the difference between 
//             this and componentDidUpdate method? Think about the possible 
//             use cases of this lifecycle method.
// Extra task: Learn about componentWillMount. How it can be useful? 
//             (Hint: Think about server-side rendering of React components)
// Extra task: Learn about componentWillReceiveProps. How it can be used? 
//             Is it fired when you render a component for the first time?
// Extra task: There is a method which directly modifies behavior of React 
//             itself - it's called shouldComponentUpdate. 
//             How you can use it to optimise rendering cycle of your 
//             React components? Learn about PureRenderMixin.
//
// All lifecycle methods are described here: 
// http://facebook.github.io/react/docs/component-specs.html
class LifecycleMethodsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Bob" };
  }

  // This code will be called when component finishes mounting 
  // (so it is visible for an user).
  componentDidMount() {
    // Task 1: Display a message "I'm mounted!" in developer's console when the 
    //         component finishes mounting.
    //         Use `console.log` function for it. 
  }

  componentDidUpdate(prevProps, prevState) {
    // Task 2: Display a message "Updated!" in developer's console 
    //         when the component updates.
    //         Here you also need to use the console.log function.
    //         Notice that in this lifecycle method you have an access 
    //         to previous values of properties and state.
    //         Think about it: Could you find a possible use case 
    //                         for using previous state and properties values?
  }

  componentWillUnmount() {
    // Task 3: Display a message "Goodbye, cruel world! :(" in developer's 
    //         console when the component unmounts.
    //         In the real world this lifecycle method is often use to 
    //         'clean up' external integrations from the component.
    //         Think about the use case like this: You have an event bus and 
    //         you are listening for events. Your event listeners use setState 
    //         directly. What will happen if you unmount the component. 
    //         How this lifecycle method can help you to avoid such problems?
  }

  render() {
    return (<p>Whatever, {this.state.name}!</p>);
  }
}

export default LifecycleMethodsComponent;
