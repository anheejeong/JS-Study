//첫번째 요청
fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then(data => {
        console.log("JSON DONE", data);
        // 두번째 요청
        return fetch("https://swapi.dev/api/people/2");
    })
    .then(res => {
        console.log("SECOND REQUEST RESOLVED!", res);
        return res.json();
    })
    .then(data => {
        console.log("JSON DONE", data);
    })
    .catch(e => {
        console.log("ERROR!", e);
    })

// 코드 리팩토링
const loadStarWarsPeople = async () => {
    try {
        // 첫번째 요청
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);

        // 두번째 요청
        const res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!", e);
    }
}
loadStarWarsPeople();