function somethingWillHappend(data) {

    return new Promise((resolve, reject) => {

        if (data) {
            resolve('Data working.....');
        } else {
            reject('data NOT working....');
        }

    });
}


somethingWillHappend(true).then((data) => console.log(data));

(async function() {
    let response = await somethingWillHappend(true);
    console.log(response);
})();