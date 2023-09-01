const common = {
  version: '0.0.1'
  , loadModules: () => {
    $('body').prepend( utils.getContents(`/module/layout.html?ver=${this.version}`) );
    $('head').append( utils.getContents(`/module/head-common.html?ver=${this.version}`) );
    $('head').append( `<link rel="stylesheet" href="/css/style.css?ver=${this.version}">` );
    $('#menuArea').html( utils.getContents(`/module/menu.html?ver=${this.version}`) );
    $('#header').html( utils.getContents(`/module/header.html?ver=${this.version}`) );
  }
};