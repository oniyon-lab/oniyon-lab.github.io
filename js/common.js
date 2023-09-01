const common = {
  version: '0.0.1'
  , loadModules: () => {
    $('body').prepend( utils.getContents(`https://oniyon-lab.github.io/module/layout.html?ver=${this.version}`) );
    $('head').append( utils.getContents(`https://oniyon-lab.github.io/module/head-common.html?ver=${this.version}`) );
    $('head').append( `<link rel="stylesheet" href="https://oniyon-lab.github.io/css/style.css?ver=${this.version}">` );
    $('#menuArea').html( utils.getContents(`https://oniyon-lab.github.io/module/menu.html?ver=${this.version}`) );
    $('#header').html( utils.getContents(`https://oniyon-lab.github.io/module/header.html?ver=${this.version}`) );
  }
};