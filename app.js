/**
 * Created by Jeff on 8/8/2015.
 */

var amountOfTL = 0;

window.onload = function () {
    var mainForm = document.getElementById("mainForm");
    mainForm.addEventListener("submit", function (e) {
        e.preventDefault();
        createToLearn(this.childNodes[1].childNodes[3].value);
    });

    var toLearnContainer = document.getElementById("toLearnContainer");
    toLearnContainer.addEventListener("click", function (e) {
        var target = e.target;
        if (target.classList[0] === "btn") {
            target = target.parentNode.parentNode;
            addConcept(target, "Test Concept");

       }
    });

    function addConcept(target, value) {
        var div = document.createElement("div");
        var span = document.createElement("span");
        div.setAttribute("class", "panel-body ");
        span.setAttribute("class", "glyphicon glyphicon-warning-sign pull-left");
        span.setAttribute("style", "color: orange");
        div.innerHTML = "&nbsp" + value;
        div.appendChild(span);

        target.appendChild(div);
    }

    function createToLearn(value) {
        var toLearnContainer = document.getElementById("toLearnContainer");

        // create clearfix div to even out TLs
        if (amountOfTL % 3 === 0) {
            var clearFix = document.createElement("div");
            clearFix.setAttribute("class", "clearfix");
            toLearnContainer.appendChild(clearFix);
        }

        // create all elements
        var colDiv = document.createElement("div");
        var panelGroupDiv = document.createElement("div");
        var mainPanelDiv = document.createElement("div");
        var panelHeadingDiv = document.createElement("div");
        var buttonDiv = document.createElement("div");
        var addButton = document.createElement("button");
        var plusSign = document.createElement("span");

        // add classes and other attr
        colDiv.setAttribute("class", "col-lg-4");
        panelGroupDiv.setAttribute("class", "panel-group");
        mainPanelDiv.setAttribute("class", "panel panel-success");
        panelHeadingDiv.setAttribute("class", "panel-heading");
        panelHeadingDiv.innerHTML = value;
        buttonDiv.setAttribute("class", "panel-body");
        addButton.setAttribute("class", "btn btn-success");
        plusSign.setAttribute("class", "glyphicon glyphicon-plus");



        // append to respective elements
        toLearnContainer.appendChild(colDiv);
            colDiv.appendChild(panelGroupDiv);
                panelGroupDiv.appendChild(mainPanelDiv);
                    mainPanelDiv.appendChild(panelHeadingDiv);
                    mainPanelDiv.appendChild(buttonDiv);
                        buttonDiv.appendChild(addButton);
                            addButton.appendChild(plusSign);

        amountOfTL++;
    }
};