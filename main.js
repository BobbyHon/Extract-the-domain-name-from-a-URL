function domainName(url){
    //filters
    url = url.indexOf('www.') > -1 ? url.slice(url.indexOf('www.') + 4) : url
    url = url.indexOf('//') > -1 ? url.slice(url.indexOf('//') + 2) : url
    return url.slice(0, url.indexOf('.'))
  }