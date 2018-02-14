(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте

        var leftField, //соседнее левое поле на карте
            upField, // соседнее правое поле на карте
            numOfIslands; // кол-во островов

        /* Массив в котором будем искать и считать количество островов. 
        Изначально он заполнен нулями. Размерность как у map*/
        var countingMap = new Array(map.length);
        for (var i = 0; i < countingMap.length; i++) {
            countingMap[i] = new Array(map[i].length);
            for (var j = 0; j < countingMap[i].length; j++) {
                countingMap[i][j] = 0;
            }
        }
        var groupList = [0]; // массив, в котором будет считаться количество островов(к какому острову относиться поле суши)
        var groupNum = 1; // Номер группы острова

        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] == 0) continue; // когда поле не суша
                leftField = 0;
                if (j != 0) leftField = countingMap[i][j - 1]; // если j не крайнее левое поле, то берем значение левого поля(номер острова) из массива количества островов
                leftField = groupList[leftField]; // сверяем номер острова в левом поле из массива количества островов
                upField = 0;
                if (i != 0) upField = countingMap[i - 1][j]; //если i не самое поле, то берем значение поля выше(номер острова) из массива количества островов

                if (leftField == 0 && upField == 0) { //если слева и сверху островов нету, то это новый остров
                    countingMap[i][j] = groupList;
                    groupList.push(groupList);
                    groupList++;
                }
                else if (leftField != 0 & upField != 0) {
                    if (leftField > upField) { //если одно значение больше, чем другое, то берем номер острова с наименьшим индексом
                        countingMap[i][j] = upField;
                        groupList.push(upField);
                    }
                    else {
                        countingMap[i][j] = leftField;
                        groupList.push(left);
                    }
                }
            }
        }



        return 0;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
