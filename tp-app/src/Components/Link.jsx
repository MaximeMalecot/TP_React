import React from "react";

export default function Link({ className, href, children }){
    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({}, "", href)

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return(
        <li className={className}><a  href={href} onClick={onClick}> {children} </a></li>
    );
}