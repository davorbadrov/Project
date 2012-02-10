FBL.ns(function() { with (FBL) {

	var panelName = "FirebugExtension";
	var panelTitle = "Test!";
	
	var InitializePlate = domplate(
	{
		InitializeTag:
			DIV({class: "default"},
					"The " + panelTitle + " panel has just been opened."
			),
			
		TestTag:
			DIV({class: "test"},
					"This is a test."
			),
			
		ClearTag:
			DIV("")
	});

	// Model Implementation
	Firebug.FirebugExtensionModel = extend(Firebug.Module,
		{
			showPanel: function(browser, panel)
			{
				var isHwPanel = panel && panel.name == panelName;
				var hwButtons = browser.chrome.$("fbFirebugExtensionButtons");
				collapse(hwButtons, !isHwPanel);
				
				// Write a message when panel gets active
				context = Firebug.currentContext;
				
			    var panel = context.getPanel(panelName);
			    var parentNode = panel.panelNode;
			    var root = InitializePlate.InitializeTag.replace(
			        {}, parentNode, InitializePlate);
			},
			
			onTestButton: function(context)
			{
			    var panel = context.getPanel(panelName);
			    var parentNode = panel.panelNode;
			    var root = InitializePlate.TestTag.append(
			        {}, parentNode, InitializePlate);
			},
			
			onClearButton: function(context)
			{
				var panel = context.getPanel(panelName);
				var parentNode = panel.panelNode;
				var root = InitializePlate.ClearTag.replace(
						{}, parentNode, InitializePlate)
			}
		});	

	// Panel Implementation
	function FirebugExtensionPanel() {}
	FirebugExtensionPanel.prototype = extend(Firebug.Panel,
	{
		name: panelName,
		title: panelTitle,

		initialize: function() 
		{
			Firebug.Panel.initialize.apply(this, arguments);
		}
	});
	
	// Registering Panel and model
	Firebug.registerPanel(FirebugExtensionPanel);
	Firebug.registerModule(Firebug.FirebugExtensionModel);
	Firebug.registerStylesheet("chrome://extension/skin/style.css");
}});