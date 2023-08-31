const common = {
  loadModules: () => {
    $('body').prepend( utils.getContents('/module/layout.html') );
    $('head').append( utils.getContents('/module/head-common.html') );
    $('#menuArea').html( utils.getContents('/module/menu.html') );
    $('#header').html( utils.getContents('/module/header.html') );
  }
};