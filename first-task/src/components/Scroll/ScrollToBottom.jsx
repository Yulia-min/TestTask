import React, { useCallback } from "react";

const ScrollToBottom = () => {

    const ScrollBottom = useCallback(()=>{
        window.scrollTo(
            {top:document.documentElement.scrollHeight, 
            behavior:"smooth"}
        );
    })

    return(
        <div className="ScrollToBottom" onClick={ScrollBottom}>Down</div>     
    );
}

export default ScrollToBottom;