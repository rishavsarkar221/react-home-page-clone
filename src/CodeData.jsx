import './1.PNG';
import './2.PNG';
import './3.PNG';
import './4.PNG';

const codeData = [
    {
        codeHeading: "A Simple Component",
        codeContent: "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.",
        codeImg: "https://i.ibb.co/0KjJLhT/1.png"
    },
    {
        codeHeading: "A Stateful Component",
        codeContent: "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
        codeImg: "https://i.ibb.co/59FNdCz/2.PNG"
    },
    {
        codeHeading: "An Application",
        codeContent: "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
        codeImg: "https://i.ibb.co/KNrkFjj/3.PNG"
    },
    {
        codeHeading: "A Component Using External Plugins",
        codeContent: "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.",
        codeImg: "https://i.ibb.co/7XQ71z1/1.PNG"
    }
];

export default codeData;