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

        var groupList = [0]; // Массив, в котором будет считаться количество островов(к какому острову относиться поле суши)

        var groupNum = 1; // Номер группы острова
        return 0;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
