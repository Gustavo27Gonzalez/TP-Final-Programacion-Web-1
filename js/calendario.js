// Eventos en el calendario
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      editable: true,
      eventLimit: true,
      events: [
            {
                title: 'Nuevo Curso de Java',
                start: '2021-06-27'
            },
            {
                title: 'Nuevo Curso de Spring Boot',
                start: '2021-06-29'
            },
            {
                title: 'Nuevo Curso de MySQL',
                start: '2021-07-01',
            },
            {
                title: 'Nuevo Curso de Hibernate',
                start: '2021-07-02'
            },
            {
                title: 'Nuevo Curso de Laravel 7',
                start: '2021-07-05'
            },
            {
                title: 'Nuevo Curso de Vuejs 3',
                start: '2021-07-07'
            },
            {
                title: 'Nuevo Curso de ReactJS',
                start: '2021-07-07'
            },
            {
                title: 'Nuevo Curso de HTML5 y CSS3',
                start: '2021-07-09'
            },
            {
                title: 'Nuevo Curso de PHP',
                start: '2021-07-12'
            },
            {
                title: 'Nuevo Curso de Angular',
                start: '2021-07-15'
            },{
                title: 'Nuevo Curso de TDD con JavaScript',
                start: '2021-07-15'
            },
            {
                title: 'Nuevo Curso de Python',
                start: '2021-07-17'
            },
            {
                title: 'Nuevo Curso de Flask y Django',
                start: '2021-07-17'
            },
            {
                title: 'Nuevo Curso de Mongo DB',
                start: '2021-07-21'
            },
            {
                title: 'Nuevo Curso de NodeJS',
                start: '2021-07-24'
            },
            {
                title: 'Nuevo Curso de C++',
                start: '2021-07-26'
            },
            {
                title: 'Nuevo Curso de C# y .NET Framework',
                start: '2021-07-27'
            },
            {
                title: 'Nuevo Curso de COBOL',
                start: '2021-07-30'
            },
            {
                title: 'Nuevo Curso de Svelte',
                start: '2021-08-04'
            }
        ]
    }); 

    calendar.render();
  });