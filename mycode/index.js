
function hello() {
    setTimeout(() => {
        
        Boolean sondeamos = "consulta a base de datos tabla cofig celda sondeo";

        if (sondeamos) {
            client.publish("topico de sondeo", "mensaje de sondeo");
        } else {
            console.log("no hacemos nada");
        }
        hello();
    }, 1000);
}
hello();