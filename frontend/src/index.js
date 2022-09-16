fetch('api/hello.php')
    .then((res) => {
        return res.text();
    })
    .then((body) => {
        document.body.innerText = body;
    })
    .catch((err) =>{
        console.error(err);
    });
