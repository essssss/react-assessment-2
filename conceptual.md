### Conceptual Exercise

Answer the following questions below:

-   What is the purpose of the React Router?
    -   React Router is a way to control the users' UR: bar and determine which components to render
-   What is a single page application?
    -   Single Page app is one that changes the 'page' without refreshing. It doesn't actually change the page but rather it changes the rendered components
-   What are some differences between client side and server side routing?
    -   Server side routing involves an entire Request-Response cycle to change what the client see, while client-side rendering is merely changing which components are seen
-   What are two ways of handling redirects with React Router? When would you use each?
    -   One way is to use the `<Redirect>` component, which will instantly re-route you to the appropriate page. this is useful for stuff like authorization where you don't want the user to be able to "Back" into the unauthorized resource.
    -   The other way is through the History API which is useful to handle a redirect-on-form-submission where you maybe do want the user to be able to use the back button
-   What are two different ways to handle page-not-found user experiences using React Router?
    -   You could have a 404-style Not Found component, or a Redirect. You put these at the end of your Router Switch, so that if something is not matched it autmatically goes to the 404
-   How do you grab URL parameters from within a component using React Router?
    -   URL parameters are andled with teh `useParams()` hook
-   What is context in React? When would you use it?
    -   Context is a way to avoid "Drilling Down" of props. Use it to establish global variable (ie. a dark/light them, or a user status) that you want to have access to over many Components
-   Describe some differences between class-based components and function
    components in React.
    -   Class based components are old and clunky. Function based components have easy access to hooks and state and don't have to bind `this` and all sorts of things.
-   What are some of the problems that hooks were designed to solve?
    -   Hooks are designed to allow sharing of logic and code across multiple functions. They are able to make this logic custom to the relevant functions.
