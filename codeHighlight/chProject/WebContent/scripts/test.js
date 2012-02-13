
function includeScripts()
{
	var shScripts = 
		'<script type="text/javascript" src="scripts/shCore.js"></script>' +
		'<script type="text/javascript" src="scripts/shBrushJScript.js"></script>' +
		'<link href="styles/shCore.css" rel="stylesheet" type="text/css" />' +
		'<link href="styles/shThemeDefault.css" rel="stylesheet" type="text/css" />' +
		'<script type="text/javascript">SyntaxHighlighter.highlight();</script>';
	 
	document.write(shScripts);
}



function highlightCode()
{
	var inputArea = document.getElementById("codeInput");
	var outputArea = document.getElementById("codeOutput");

	var codeDiv = document.createElement("div");
	codeDiv.setAttribute("id", "codeOutput");
	
	var codePre = document.createElement("pre");
	codePre.setAttribute("class", "brush: js");
	
	var code;
	
	console.log("value: " + inputArea.value);
	console.log("default valeu: " + inputArea.defaultValue);
	
	if(inputArea.value != "")
		code = document.createTextNode(inputArea.value);
	else
		{
		code = document.createTextNode(inputArea.defaultValue);
		alert(inputArea.defaultValue);	
		}
	
	codePre.appendChild(code);

	codeDiv.appendChild(codePre);
	
	var codeArea = document.getElementById("codeContainer");

	codeArea.replaceChild(codeDiv, outputArea);
	
	SyntaxHighlighter.highlight();
}

includeScripts();