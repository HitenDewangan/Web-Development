function getData(dataID, getNextData) {
    setTimeout(() => {
        // console.log('Fetching data from database');
        console.log("data " + dataID);
        if(getNextData) {
            getNextData();
        }
        else{
            console.log("No more data to fetch");
            
        }
    }, 2000);
}


// ===== callback hell -> not a good way to programming as other developers may find it difficult to understand
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