function getData(dataID, getNextData) {
    setTimeout(() => {
        // console.log('Fetching data from database');
        console.log("data " + dataID);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

const data = {}
getData(1, () => {
    console.log("getting data 2");
    getData(2, () => {
        console.log("getting data 3");
        getData(3, () => {
            console.log("getting data 4");
            getData(4);
        });
    });
});