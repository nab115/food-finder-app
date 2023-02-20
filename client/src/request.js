export async function search(item, city) {

    console.log('Searching for ' + item + ' near ' + city);
    const res = await fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({item: item, city: city}),
    })
    return res.json();
}

export async function searchLocation(city) {

    console.log('Searching for popular restaurants near ' + city);
    const res = await fetch('/searchLocation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({city: city}),
    })
    return res.json();
}

export async function retreiveLocations() {
    const res = await fetch('/locations', {
        method: 'POST'
    })
    return res.json();
}

export async function scrapeMenu(url) {

    const res = await fetch('scraper', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: url}),
    })
    if(!res.ok) {
        return null;
    }
    return res.json();
}