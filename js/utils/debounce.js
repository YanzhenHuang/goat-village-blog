function debounce(fn, delay){
    let timerId;
    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn();
        }, delay);
    };
}