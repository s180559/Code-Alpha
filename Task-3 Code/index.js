function jsRun(){
    let htmlCodeElement = document.getElementById("htmlCode").value;
    let cssCodeElement = document.getElementById("cssCode").value;
    let jsCodeElement = document.getElementById("jsCode").value;
    let outputElement = document.getElementById("output");

    outputElement.contentDocument.body.innerHTML = htmlCodeElement + "<style>" + cssCodeElement + "<style>";
    outputElement.contentWindow.eval(jsCodeElement);
}