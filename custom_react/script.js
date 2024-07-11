function customRender(mainContainer, reactElement){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // mainContainer.append(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.append(domElement)
}

const mainContainer = document.querySelector('#root')

const reactElement = {
    type : 'a',
    props : {
        href : "https://www.google.com",
        target : '_blank'
    },
    children : "Click me to visit google"
}

customRender(mainContainer, reactElement)