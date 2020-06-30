var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/alexfelipebarbosa');
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // 4 significa que a resposta voltou
    console.log(JSON.parse(xhr.responseText));
  }
};
