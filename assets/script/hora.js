function main(){

    function weekDayTitle(){
        const weekDayText = document.querySelector('#dia-semana');

        const data = new Date();
        let weekDay = data.getDay() + 1;

        switch(weekDay){
            case 1:
                weekDay = 'Domingo';
                break;
            case 2:
                weekDay = 'Segunda-Feira';
                break;
            case 3:
                weekDay = 'Terca-Feira';
                break;
            case 4:
                weekDay = 'Quarta-Feira';
                break;
            case 5:
                weekDay = 'Quinta-Feira';
                break;
            case 6:
                weekDay = 'Sexta-Feira';
                break;
            case 7:
                weekDay = 'Sabado';
                break;
        }

        
        weekDayText.innerHTML = weekDay;
    }

    function dateTitle(){

        const subtitleDay = document.querySelector('#data-atual');

        const date = new Date();
        dayTodayNumber = date.getDate();
        yearToday = date.getFullYear();
        monthToday = date.getMonth() + 1;

        switch(monthToday){
            case 1:
                monthToday = 'Janeiro'
                break;
            case 2:
                monthToday = 'Fevereiro'
                break;
            case 3:
                monthToday = 'Marco'
                break;
            case 4:
                monthToday = 'Abril'
                break;
            case 5:
                monthToday = 'Maio'
                break;
            case 6:
                monthToday = 'Junho'
                break;
            case 7:
                monthToday = 'JUlho'
                break;
            case 8:
                monthToday = 'Agosto'
                break;
            case 9:
                monthToday = 'Setembro'
                break;
            case 10:
                monthToday = 'Outubro';
                break;
            case 11:
                monthToday = 'Novembro';
                break;
            case 12:
                monthToday = 'Dezembro'
                break;
        }

        subtitleDay.innerHTML = `<p>${monthToday} ${dayTodayNumber}, ${yearToday}</p>`
    }


    dateTitle()
    weekDayTitle()
}

main()