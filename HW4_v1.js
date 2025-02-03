// ========================
// Задача 1: Определение выходного или буднего дня
// ========================

// Код использует switch case для определения типа дня недели.

// Функция проверяет, является ли номер дня недели корректным
function getDayType() {
    console.log("=== Задача 1: Определение дня недели ===");

    // Запрашиваем у пользователя номер дня недели
    const dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));

    // Проверка на валидность ввода
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        console.error("Ошибка: Введено некорректное значение!");
        alert("Введите корректное значение от 1 до 7.");
        return;
    }

    // Используем switch для определения типа дня
    switch (dayNumber) {
        case 1:
        case 7:
            console.log("День недели: Выходной.");
            alert("Это выходной день!");
            break;
        default:
            console.log("День недели: Будний день.");
            alert("Это будний день.");
    }
}

getDayType();





// ========================
// Задача 2: Действия для чисел от 1 до 10
// ========================

// Код выполняет действия для чисел от 1 до 10, используя switch case.

// Функция обрабатывает числа от 1 до 10
function processNumber() {
    console.log("=== Задача 2: Действия для чисел от 1 до 10 ===");

    // Запрашиваем у пользователя число
    const userNumber = parseInt(prompt("Введите число от 1 до 10:"));

    // Проверка на корректность ввода
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        console.error("Ошибка: Введено некорректное значение!");
        alert("Введите число от 1 до 10.");
        return;
    }

    // Обрабатываем число с помощью switch
    switch (userNumber) {
        case 1:
            console.log("Выбран вариант 1: Привет, мир!");
            alert("Привет, мир!");
            break;
        case 2:
            const num1 = parseFloat(prompt("Введите первое число:"));
            const num2 = parseFloat(prompt("Введите второе число:"));
            if (!isNaN(num1) && !isNaN(num2)) {
                const sum = num1 + num2;
                console.log(`Сумма чисел: ${sum}`);
                alert(`Сумма чисел: ${sum}`);
            } else {
                console.error("Ошибка: Одно из чисел некорректно.");
                alert("Введите корректные числа.");
            }
            break;
        case 3:
            console.log("Выбран вариант 3: Сообщение для числа 3.");
            alert("Это число - три!");
            break;
        // Добавьте действия для других чисел...
        default:
            console.log("Действие для указанного числа отсутствует.");
            alert("Нет действий для этого числа.");
    }
}

processNumber();





// ========================
// Задача 3: Викторина с использованием тернарного оператора.
// ========================

// Вопросы с ответами "да" или "нет". Используется тернарный оператор для подсчета очков.

// Функция запускает викторину
function startQuiz() {
    console.log("=== Задача 3: Викторина ===");

    // Список вопросов и правильных ответов
    const questions = [
        { question: "Солнце – звезда? (да/нет)", correct: "да" },
        { question: "Человек может дышать под водой? (да/нет)", correct: "нет" },
        { question: "2 + 2 = 5? (да/нет)", correct: "нет" },
        { question: "Python – это язык программирования? (да/нет)", correct: "да" },
        { question: "Луна больше Земли? (да/нет)", correct: "нет" },
        { question: "Вода кипит при 100°C? (да/нет)", correct: "да" },
    ];

    let score = 0; // Счетчик очков

    // Перебираем вопросы
    questions.forEach((item, index) => {
        const userAnswer = prompt(item.question).toLowerCase();

        // Проверяем ответ пользователя через тернарный оператор
        userAnswer === item.correct
            ? (score++, console.log(`Вопрос ${index + 1}: Верный ответ.`))
            : console.log(`Вопрос ${index + 1}: Неверный ответ.`);
    });

    // Итоговый результат
    console.log(`Результат: ${score} из ${questions.length}.`);
    alert(`Вы набрали ${score} из ${questions.length} очков!`);
}

startQuiz();





// ========================
// Задача 4: Проверка числа
// ========================

// Функция проверяет свойства числа
function checkNumber() {
    console.log("=== Задача 4: Проверка числа ===");

    // Запрашиваем у пользователя число
    const input = prompt("Введите число:");

    // Проверка на валидность ввода
    if (isNaN(parseFloat(input))) {
        console.error("Ошибка: Введено некорректное значение!");
        alert("Введите корректное число.");
        return;
    }

    // Преобразуем ввод в BigInt для работы с большими числами
    const bigNumber = BigInt(input);

    // Определяем свойства числа
    const positivity = bigNumber > 0n ? "положительное" : bigNumber < 0n ? "отрицательное" : "ноль";
    const parity = bigNumber % 2n === 0n ? "четное" : "нечетное";

    // Логируем промежуточные результаты
    console.log(`Введенное число: ${bigNumber}`);
    console.log(`Четность: ${parity}`);
    console.log(`Знак числа: ${positivity}`);

    // Вывод результата
    console.log(`Число ${bigNumber} является ${positivity} и ${parity}.`);
    alert(`Число ${bigNumber} является ${positivity} и ${parity}.`);
}

// Вызов функции
checkNumber();
