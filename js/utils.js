const utils = {
  getContents: (url) => {
    let contents="";

    $.ajax({
      'url': url
      , 'async': false
    }).done((data)=>{
      contents = data;
    });

    return contents;
  }
};