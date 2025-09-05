function checkWin(ticket) {
    const sum = ticket.reduce((element, sum) => sum += element);
    console.log(sum)
    return (sum === 15)
}

export default checkWin;