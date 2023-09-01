const common = {
  version: '0.0.2'
  , loadModules: () => {
    $('body').prepend( utils.getContents(`/module/layout.html?ver=${common.version}`) );
    $('head').append( utils.getContents(`/module/head-common.html?ver=${common.version}`) );
    $('head').append( `<link rel="stylesheet" href="/css/style.css?ver=${common.version}">` );
    $('#menuArea').html( utils.getContents(`/module/menu.html?ver=${common.version}`) );
    $(`.pure-menu-item a[href="${location.pathname}"]`).parent().addClass('menu-item-divided pure-menu-selected');
    $('#header').html( utils.getContents(`/module/header.html?ver=${common.version}`) );
  }
};