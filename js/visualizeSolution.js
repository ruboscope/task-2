(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(map, count) {
        // todo: визуализировать работу алгоритма
        var visualStepMap = new Array(map.length);
        for (var i = 0; i < map.length; i++) {
            visualStepMap[i] = new Array(map[i].length);
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] == 0) visualStepMap[i][j] = 0;
                else visualStepMap[i][j] = 1;
            }
        }
        document.querySelector('.outer').appendChild(
            root.SHRI_ISLANDS.render(visualStepMap, count)
        );
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
