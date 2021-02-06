function hello() {
    setTimeout(() => {
        console.log("hello from docker node");
        hello();
    }, 1000);
}

hello();