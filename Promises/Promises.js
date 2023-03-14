// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback('books.com/page1',
    function (e) {
        console.log("It Works!!");
        console.log(e);
        fakeRequestCallback('books.com/page2',
            function (e) {
                console.log("It Works (2nd)!!");
                console.log(e);
                fakeRequestCallback('books.com/page2',
                    function (e) {
                        console.log("It Works (3nd)!!");
                        console.log(e);
                    },
                    function (e) {
                        console.log("Error!! (3nd)");
                        console.log(e);
                    });
            },
            function (e) {
                console.log("Error!! (2nd)");
                console.log(e);
            });
    }, function (e) {
        console.log("Error!!");
        console.log(e);
    }
)

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.comp/api/coffee/page1')
    .then(() => {
        console.log("It Works!!");
        fakeRequestPromise('yelp.comp/api/coffee/page2')
            .then(() => {
                console.log("It Works(2nd)!!");
                fakeRequestPromise('yelp.comp/api/coffee/page3')
                    .then(() => {
                        console.log("It Works(3nd)!!");
                    })
                    .catch(() => {
                        console.log("Oh No, Error(3nd)!!");
                    })
            })
            .catch(() => {
                console.log("Oh No, Error(2nd)!!");
            })
    })
    .catch(() => {
        console.log("Oh No, Error!!");
    })

fakeRequestPromise('yelp.comp/api/coffee/page1')
    .then((data) => {
        console.log("It Works!!");
        console.log(data);
        return fakeRequestPromise('yelp.comp/api/coffee/page2')
    })
    .then((data) => {
        console.log("It Works(2nd)!!");
        console.log(data);
        return fakeRequestPromise('yelp.comp/api/coffee/page3')
    })
    .then((data) => {
        console.log("It Works(3nd)!!");
        console.log(data);
    })
    .catch((err) => {
        console.log("Oh No, Error(3nd)");
        console.log(err);
    })