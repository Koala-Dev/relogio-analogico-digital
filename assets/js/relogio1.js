const clockCircle01 = () => {
    const newdate = new Date();
    let hora = newdate.getHours();
    let min = newdate.getMinutes();
    let seg = newdate.getSeconds();
    let ss = (seg*6);
    let mn = ((min*6)+(ss/60));
    let hh = (((hora*30))+(mn/12));
    $('.segundo').css({'transform':`rotate(${ss}deg)`})
    $('.minuto').css({'transform':`rotate(${mn}deg)`})
    $('.hora').css({'transform':`rotate(${hh}deg)`})
}
setInterval(clockCircle01, 1000)
