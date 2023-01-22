async function search() {
    const res = await fetch('/search')
    return res.json();
}


// unsure why the above works but this does not

// async function search() {

//     fetch('/search')
//         .then((res) => {return res.json()});
// }


export default search;