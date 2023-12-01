export const getCurrentMonth = (month) => {
    //console.log("Passed: ", month);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    return months[month];
}

export const getDayByIndex = (day) => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    return days[day];
}

export const getColumnHeaders = (day) => {
    const days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
    ]
    return days;
}