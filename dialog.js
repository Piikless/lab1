const touristDialog = () => {
    const destination = prompt("Ласкаво просимо на наш туристичний сайт! Куди ви б хотіли поїхати?");

    if (destination !== null && destination !== "") {
        alert(`Чудовий вибір! ${destination} - це прекрасне місце!`);

        const activities = [];
        let activity;
        do {
            activity = prompt(`Які розваги ви б хотіли випробувати у ${destination}? (Напишіть 'готель', 'екскурсія', 'пляж'; щоб завершити, введіть 'закінчити')`);

            if (activity !== null && activity !== "" && activity.toLowerCase() !== "закінчити") {
                activities.push(activity);
            }
        } while (activity !== null && activity.toLowerCase() !== "закінчити");

        if (activities.length > 0) {
            alert(`Гарно! Ви обрали такі розваги у ${destination}: ${activities.join(", ")}`);
        } else {
            alert(`Шкода, що ви не обрали жодних розваг у ${destination}. Можливо, наступного разу!`);
        }
    } else {
        alert("Схоже, ви не ввели напрямок вашої подорожі.");
    }
};

document.body.style.background = 'blue'; 
setTimeout(function() {
    document.body.style.backgroundColor = "";
}, 30000); 
alert(location.href);

