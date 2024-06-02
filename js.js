var s = {
    current: null
};
$('[data-component="tabs"]').each((function() {
    var e, t = $(this).find(".tabs__title[data-target]"), a = $(this).find(".tabs__tab[data-tab]"), n = r(r({}, s), $(this).data());
    null != n.current && ((e = a.filter('[data-tab="'.concat(n.current, '"]'))).addClass("active"),
    t.filter('[data-target="'.concat(e.data("tab"), '"]')).addClass("active")),
    t.on("click", (function() {
        t.removeClass("active"),
        a.removeClass("active"),
        $(this).addClass("active"),
        a.filter('[data-tab="'.concat($(this).data("target"), '"]')).addClass("active")
    }
    ))
}
))
function handleLogin(event) {
    event.preventDefault(); // Предотвращаем обновление страницы

    var user = document.getElementById('login_credential_form').value;
    var password = document.getElementById('login_password_form').value;

    Auth.login(user, password);
}

var Auth = {
    login: function(user, password) {
        // Здесь должен быть ваш код для проверки учетных данных пользователя
        // Это может включать в себя отправку запроса на сервер и получение ответа
        console.log('Попытка входа с пользователем ' + user + ' и паролем ' + password);
    }
};
new Image().src = "https://counter.yadro.ru/hit?r" +
escape(document.referrer) + ((typeof(screen) == "undefined") ? "" :
";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
";h" + escape(document.title.substring(0, 150)) +
";" + Math.random();