import dayjs from "dayjs";

export default function reFormatedWeekday() {
    let weekday = dayjs().locale('pt-br').format('dddd');
    
    switch (weekday) {
        case 'Sunday':
            weekday = 'Domingo';
            break;
        case 'Monday':
            weekday = 'Segunda';
            break;
        case 'Tuesday':
            weekday = 'Terça';
            break;
        case 'Wednesday':
            weekday = 'Quarta';
            break;
        case 'Thursday':
            weekday = 'Quinta';
            break;
        case 'Friday':
            weekday = 'Sexta';
            break;
        case 'Saturday':
            weekday = 'Sábado';
            break;
    }
    weekday += ", " + dayjs().format('DD/MM');

    return weekday;
}