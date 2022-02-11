const dateFormat = function(timestamp) {
    const date = new Date(timestamp);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${date.getMinutes()}`;
    }
    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${date.getHours()}:${minutes}`;
};

module.exports = dateFormat;