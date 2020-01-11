promiseGet(url1)
    .then(data => {
        const url2 = data.url;
        return promiseGet(url2);
    })
    .catch(error => {
        // handle error for url1
    })
    .then(data => {
        const url3 = data.url;
        return promiseGet(url3);
    })
    .catch(error => {
        // handle error for url2
    })
    .then(data => {
        // keep going
    })
    .catch(error => {
        // handle error for url3
    });

// How to create a promise:

const resolvingPromise = new Promise((resolve, reject) => {
    const resolvedValue = { value: 'some data' };
    setTimeout(() => resolve(resolvedValue), 1000);
    setTimeout(() => reject(), 2000); // no effect as promises only fulfill/reject once
});

resolvingPromise
    .then(data => {
        console.log('Inside first then:', data);
        const value = data.value;
        return value + ' appending from the first then';
    })
    .then(data => {
        console.log('Inside second then:', data);
    })
    .then(data => {
        console.log('Inside third then:', data);
    });

// Error handling

const rejectingPromise = new Promise((resolve, reject) => {
    const rejectReason = "something went wrong";
    setTimeout(() => reject(rejectReason), 1000);
});

rejectingPromise
    .then(data => {
        console.log('Inside first then:', data);
    })
    .then(data => {
        console.log('Inside second then:', data);
    })
    .then(data => {
        console.log('Inside third then:', data);
    })
    .catch(error => {
        console.log('Inside first catch:', error)
    });

rejectingPromise
    .then(data => {
        console.log('Inside first then:', data);
    })
    .then(data => {
        console.log('Inside second then:', data);
    })
    .catch(error => {
        console.log('Inside first catch:', error)
        return 'relax, everything is find';
    })
    .then(data => {
        console.log('Inside third then:', data);
    })
    .catch(error => {
        console.log('Inside second catch:', error)
    });