// console.log("hi,I'm main.js");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //readyState===4下载完成,但不知道是 成功status===2xx 还是失败 4xx 5xx
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        console.log("request.response:");
        console.log(request.response);
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        console.log("request.response:");
        console.log(request.response);
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载JS失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        console.log("request.response:");
        console.log(request.response);
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        console.log("request.response:");
        console.log(request.response);
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        console.log("request.response:");
        console.log(request.response);
        const object = JSON.parse(request.response);
        titleName.textContent = object.name;
      } else {
        alert("加载JSON失败");
      }
    }
  };
  request.send();
};

let n = 2;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        console.log("request.response:");
        console.log(request.response);
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          const ulPage = document.querySelector("#ulPage");
          ulPage.appendChild(li);
        });
        n += 1;
      } else {
        alert("加载分页失败");
      }
    }
  };
  request.send();
};
