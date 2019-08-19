'use strict'


class HomeController {
    consulting ({params , view}) {
        var page = (params.service===null) ? 'index' : params.service;
        return view.render('pages.consulting.'+page);
    };
    
    events ({params , view}) {
        var page = (params.name===null) ? 'index' : params.name;
        return view.render('pages.events.'+page);
    };

    pharmdelve ({ view }) {
        return view.render('pages.pharmdelve');
    };
}


module.exports = HomeController
