const inicioPAgina = () =>{
    let yy;
    let mm;
    let dd;
    let hh;
    let mn;
    let ss;
    const clockDigital01 = () => {
        const newdate = new Date();
        yy = newdate.getFullYear();
        mm = newdate.getMonth();
        dd = newdate.getDay();
        hh = newdate.getHours();
        mn = newdate.getMinutes();
        ss = newdate.getSeconds();
        let name_mm =['Janeiro','Fevereiro','Março','Abril','Junho',
                        'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
        let MinName_mm =['Janeiro','Fevereiro','Março','Abril','Junho',
                        'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
        //op1
        $('.horario2_op1').html(`${zeroleft(hh)}:${zeroleft(mn)}`);
        $('.data2_op1').html(`${zeroleft(dd)}/${mm+1}/${yy}`);
        //op2
        $('.horario2_op2').html(`${zeroleft(hh)}:${zeroleft(mn)}`);
        $('.data2_op2').html(`${zeroleft(dd)} de ${name_mm[mm]}`);
        //op3
        $('.horario2_op31').html(`${zeroleft(hh)}`);
        $('.horario2_op32').html(`${zeroleft(mn)}`);
        //op4
        $('.horario2_op4').html(`${zeroleft(hh)}:${zeroleft(mn)}`);
        $('.data2_op4').html(`${zeroleft(dd)} de ${MinName_mm[mm]} ${yy}`);
        //op5
        $('.horario2_op5').html(`${zeroleft(hh)}h ${zeroleft(mn)}m ${zeroleft(ss)}s`);
        //op6
        $('.horario2_op6').html(`${zeroleft(hh)} : ${zeroleft(mn)} : ${zeroleft(ss)}`);
    }
    const relogio2 = {
        'cliques':0
    }
    const zeroleft = (valor) =>{
        if(valor<10){return `0${valor}`}
        else{return valor} 
    }
    setInterval(clockDigital01,1000);
    $('.caixa_relogio2').click(()=>{
        switch(relogio2.cliques){
            case 0: $('#op1').hide('1000');$('#op2').show('1000')
            break;
            case 1: $('#op2').hide('1000');$('#op3').show('1000')
            break;
            case 2: $('#op3').hide('1000');$('#op4').show('1000')
            break;
            case 3: $('#op4').hide('1000');$('#op5').show('1000')
            break;
            case 4: $('#op5').hide('1000');$('#op6').show('1000')
            break;
            case 5: $('#op6').hide('1000');$('#op1').show('1000')
            break
        }
        relogio2.cliques++
        if(relogio2.cliques>5){relogio2.cliques=0}
    });
    
}