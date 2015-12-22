function countChar(str) {
  var o = {},
    count = 0,
    most = count,
    key = '',
    result = [];
  str = str.replace(/\s+?/g, '');
  for(var i = 0; i < str.length; i++) {
    if(typeof o[str[i]] !== 'undefined')
      o[str[i]]++;
    else
      o[str[i]] = count + 1;
    if(most <= o[str[i]] && o[str[i]] > 1) {
      most = o[str[i]];
      key = str[i];
      result.push(key);
    }
  }
  var len = result.length;
  return len > 1 ? result : result[0];
}
