/* Создать объект, описывающий автомобиль (производитель,
    модель, год выпуска, средняя скорость), и следующие функции
    для работы с этим объектом.
    1. Функция для вывода на экран информации об автомобиле. */

const autoData = {
    company: 'audi',
    model: 'A6',
    year: '1999',
    averageSpeed: 10,

}

function outputAutoData(obj){
    for (let key in obj){
        console.log(`${key}:${obj[key]}`)
    }
}

outputAutoData(autoData);

/* Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час. */

function autoTimeToWay(obj){
    const distance = prompt('Your distance?');
    const timeToWay = distance/obj.averageSpeed;
    let timeToRest = 0;
    for (let i = 1; i <= timeToWay; i++){
        if (i%4 == 0){
            timeToRest = timeToRest+1;
        }
    }
    return (timeToWay+timeToRest)
}
console.log(`Your time to way: ${autoTimeToWay(autoData)}`)

/* Создать объект, описывающий время (часы, минуты, секун-
    ды), и следующие функции для работы с этим объектом.
    1. Функция вывода времени на экран.
 */

const infoTime = {
    hh: 12,
    mm: 24,
    ss: 00,

}

function timeOutput(obj){
    console.log(`hh:${obj.hh} mm:${obj.mm} ss:${obj.ss}`)
}

timeOutput(infoTime)

/* 2. Функция изменения времени на переданное количество
секунд. */

function addSsToTime(obj){
    const addSeconds = +prompt('How much seconds?');
    
    if (obj.ss + addSeconds >=60){
        let diffMin = Math.floor((obj.ss + addSeconds)/60);
        obj.mm = obj.mm + diffMin;
        obj.ss = (obj.ss + addSeconds)%60;
    }
    else{
        obj.ss = obj.ss + addSeconds;
    }
    timeOutput(obj);
}

addSsToTime(infoTime)


/* 3. Функция изменения времени на переданное количество
минут. */
function addMmToTime(obj){
    const addMinutes = +prompt('How much minutes?');
    
    if (obj.mm + addMinutes >=60){
        let diffHours = Math.floor((obj.mm + addMinutes)/60);
        obj.hh = obj.hh + diffHours;
        obj.mm = (obj.mm + addMinutes)%60;
    }
    else{
        obj.mm = obj.mm + addMinutes;
    }
    timeOutput(obj);
}

addMmToTime(infoTime)

/* 4. Функция изменения времени на переданное количество
часов. */
function addHhToTime(obj){
    const addHours = +prompt('How much hours?');
    
    if (obj.hh + addHours >=24){
        obj.hh = (obj.hh + addHours)%24;
    }
    else{
        obj.hh += addHours;
    }
    timeOutput(obj);
}

addHhToTime(infoTime);