function isLeapYear(year) {
    let numYear = Number(year);
    if ((numYear % 4 === 0 && numYear % 100 !== 0) || numYear % 400 === 0) {
        console.log(`Year ${year} is a leap year`);
        return `Year ${year} is a leap year`;
    } else {
        console.log(`Year ${year} is not a leap year`);
        return `Year ${year} is not a leap year`;
    }
}

isLeapYear(2020);
isLeapYear(2000);
