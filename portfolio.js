function showSection(sectionId) {
				document.querySelectorAll('section').forEach(sc => {
					sc.classList.remove('active');
				});
			document.getElementById(sectionId).classList.add('active');
			localStorage.setItem('lastSection', sectionId);
}

	const ictLessonsQ3 = {
	ictQ31: `
	<div class="vertical">
		<img class="output" src="ictq3\\q31a.jpg"><br>
		<img class="output2" src="ictq3\\q31b.jpg">
	</div>
	`,
	ictQ32: `
	<div class="vertical">
		<img class="output" src="ictq3\\q32b.jpg"><br>
		<img class="output2" src="ictq3\\q32a.jpg">
	</div>
	`,
	ictQ33: `
	<div class="vertical">
		<img class="output" src="ictq3\\q33a.jpg"><br>
		<img class="output2" src="ictq3\\q33b.jpg">
	</div>
	`,
	ictQ34: `
	<div class="vertical">
		<img class="output" src="ictq3\\q34a.jpg"><br>
		<img class="output2" src="ictq3\\q34b.jpg">
	</div>
	`
};

	const ictLessonsQ4 = {
	ictQ41: `
	<div class="main">
		<h1> What Is Javascript? </h1>
		<ul>
			<li><p>The MOST popular & widely used scripting language on the internet</p></li>
			<li><p>Recognized & works in all major browsers.</p></li>
			<li><p>Developed by Brendan Eich of Netscape under the name Mocha, which was later renamed to LiveScript. </p></li>
			<li><p>Opened to Internet Explorer in 1996.</p></li>
			<li><p> Enhances webpages and can be used to build video games.</p></li>
			<li><p>A client-side, high-level scripting, interpreted & object-oriented</p>
			<ul>
				<li><p><b>Client-side</b> - the codes and formulas are processed right on the user&apos;s own computer.</p></li>
				<li><p><b>High-level scripting</b> - codes are written in words that are close to English as possible</p></li>
				<li><p><b>Interpreted</b> - the program is passed as source code then converted into machine code</p></li>
			</ul>
			</li>
			<li><p>Designed to add interactivity and functionality to the Web site. Thus making the contents more dynamic and the elements are enhanced</p></li>
			<li><p>Case-sensitive</p></li>
			<li><p>Semi-colons at the end if each statement are not required</p></li>
		</ul>
		<h1> Purpose of JavaScript</h1>
		<ul>
			<li><p>To create dynamic, interactive user experiences, handling everything from UI rendering (like React for Facebook) and content loading to real-time updates, personalized feeds, video controls (captions, volume), and tracking user activity (Meta Pixel)</p></li>
			<li><p>Examples:</p></li>
		</ul>
			<div class="horizontal">
				<div class="main">
					<h1> Static Website </h1>
					<ul>
						<li><p>A static web page, sometimes called a flat page or a stationary page, is a webpage that is delivered to a web browser exactly as stored.</p></li>
						<li><p> Example: Photographer&apos;s portfolio</p></li>
					</ul>
				</div>
				<img src="ictq4\\lesson1a.jpg" class="example">
				<div class="main">
					<h1> Dynamic Website </h1>
					<ul>
						<li><p>A dynamic website is a type of website that displays VS different content and interacts with users based on their actions, preferences, or other variables</p></li>
						<li><p>Example&colon; Social Media Platforms</p></li>
					</ul>
				</div>
			</div>
		<h1> What can JavaScript Do? </h1>
		<ul>
			<li><p>Can be used to react to events</p></li>
			<ul>
				<li><p>These are mouse clicks, and pre-loading of webpage that can lead to executing codes within JavaScript.</p></li>
			</ul>
			<li><p>Can be used to validate data</p></li>
			<ul>
				<li><p>A form requires user input, instead of using server-side scripting, JavaScript can be used to validate it and thus save processing time.</p></li>
			</ul>
			<li><p>Can be used to create cookies</p></li>
			<ul>
				<li><p>Used to save or retrieve information from a visitor&apos;s computer. This can be used to monitor the visitor&apos;s internet habit and preferences.</p></li>
			</ul>
			<li><p>Can enhance a webpage</p></li>
		</ul>
		<h1> Features of Javascript </h1>
		<ul>
			<li><p>Supports all structured programming syntax in C</p></li>
			<li><p>Has dynamic typing, the value of the variable is dependent on what the value was assigned to it even during run time, the type can still change</p></li>
			<li><p>Can run locally in a Web site, so interaction within the user and the site is faster or more responsive</p></li>
			<li><p>Can detect user actions, such as mouse clicks, which HTML could not do alone</p></li>
			<li><p>Can be combined with CSS to produce DHTML.  DHTML can make site more flexible by adding effects such as message scrollers, mouse trails and falling snow</p></li>
		</ul>
		<h1> Characteristics of JavaScript </h1>
		<ul>
			<li><p> Lightweight programming language</p></li>
			<li><p> Inserted into HTML pages</p></li>
			<li><p>Supported by all modern web browser</p></li>
			<li><p>Easy to learn and encoder-friendly</p></li>
			<li><p>Quick to download effects</p></li>
			<li><p> No need for any extra tools to write</p></li>
			<li><p>License-free</p></li>
			<li><p>Has a thriving and supportive online community of JavaScript developers and information resources</p></li>
		</ul>
		<h1> Disadvantages of JavaScript </h1>
		<ul>
			<li><p>Some browsers do not support JS. Examples are PDA and mobile phones do not execute JS.  Some browsers disable execution of JS as a security precaution.</p></li>
			<li><p>Any secret embedded in JS could be extracted by a determined adversary</p></li>
			<li><p>JS and DOM (Document Object Model) provide potential for malicious authors to deliver scripts to run on a client computer via web</p></li>
			<li><p>Web site authors cannot perfectly conceal how their JS operates because the code is sent to the client.</p></li>
			<li><p>Source codes that have been deliberately made hard to understand can be reverse engineered so your codes are still exposed to possible threat</p></li>
		</ul>
		<h1> NOTE </h1>
		<ul>
			<li><p>A script is a set of computer instructions or commands that puts together or connects existing components to accomplish a new related task. JavaScript is a powerful scripting language used to create web functionalities.  A text editor and a web browser are the tools needed in JavaScripting. The basic components of JavaScript language are objects, methods and properties.</p></li>
		</ul>
		<h1> How to Start Using JavaScript </h1>
		<ul>
			<li><p>&lt;script&gt;&lt;script&gt; is used to connote JavaScript.  We use the type attribute to define the scripting language and identify its version.  To display an output in a web page, the document.write command should be used</p></li>
		</ul>
	</div>
	`,
	ictQ42: `
	<div class="main">
		<h1> Where can you place Scripts? </h1>
		<ul>
			<li><p>There are times when we want to execute the codes depending on the situation. It could be pre-loaded, or to be triggered whenever an event happens. This is possible in JavaScript. You can control the execution of the codes by placing it in different sections of the HTML file</p></li>
			<h1> Head </h1>
			<ul>
				<li><p>Whenever the scripts are placed here, you are assured that they will be pre-loaded it means the scripts will be executed before anyone triggers an event. Scripts are ideally placed here are for functions calls</p></li>
				<img src="ictq4\\lesson2a.jpg" class="example">
			</ul>
			<h1> Body </h1>
			<ul>
				<li><p>Scripts that are placed here are executed when the page loads.</p></li>
				<img src="ictq4\\lesson2b.jpg" class="example">
			</ul>
			<h1> Head &amp; Body </h1>
			<ul>
				<li><p>You can place your script tags whenever and how many you want to.</p></li>
				<img src="ictq4\\lesson2c.jpg" class="example">
			</ul>
			<h1> External JavaScript </h1>
			<ul>
				<li><p>External JavaScript files are helpful especially if you are using them to control different HTML files. There is no need to rewrite them all over again. Save the file having an extension of .js. To use the JavaScript file, all you have to do is use the src attribute and provide the destination of the file</p></li>
				<li><p><b>&lt;script type=&#750;text/JavaScript&#750; src=&#750;myJavaScript.js&#750;&gt;&lt;/script&gt;</b></p></li>
				<li><p>The src attribute will point to the source of the JavaScript external file.  Take note that the JavaScript file does not contain the opening and closing script tags.</p></li>
				<li><p>There are times when you want to add a statement to explain a set of codes, or when we want to omit certain codes for debugging purposes, this can be done by inserting a comment. For single comments, you can use two backlash symbols; for multiple line or block comments, start with a /* and end with a */</p></li>
				<img src="ictq4\\lesson2d.jpg" class="example">
			</ul>
		</ul>
		<h1> What are the JavaScript Guidelines </h1>
		<ul>
			<li><p>In coding JS, it is important to know the Do&apos;s and Don&apos;ts. This will save you time and keep you away from trouble in case errors occur. Listed below are the guidelines</p></li>
			<ol>
				<li><p>Case Sensitive</p></li>
				<ul>
					<li><p>You must be careful in naming your variables. The variable myHome is not equal to MyHome. It is important to keep track of your variables so there won&apos;t be problems in calling variables, objects or functions. Unlike in HTML, uppercase letters are not equivalent to lowercase letters in JavaScript</p></li>
				</ul>
				<li><p>White Space</p></li>
				<ul>
					<li><p>JavaScript ignores white space as long as it is within the line of the code. It is a good practice to use white spaces between expressions to make your codes easier to read</p></li>
				</ul>
				<li><p>Breaking up of code lines</p></li>
				<ul>
					<li><p>You can break a code line by using a backslash (&apos;\\&apos;). However, do not break the code in between commands or else it will not work properly.</p></li>
					<li><p>Example:</p></li>
					<ul>
						<li><p>document.write(&#750;wow\\Philippines&#750;);- Accepted</p></li>
						<li><p>document.\\write(&#750;wow Philippines&#750;)- Not accepted</p></li>
					</ul>
				</ul>
			</ol>
		</ul>
	</div>
	`,
	ictQ43: `
	<div class="main">
		<h1> Characteristics of JavaScript </h1>
		<ol>
			<li><p>Interpreted Language</p></li>
			<ul>
				<li><p>It is an interpreted language due to the fact that it requires  a browser to run. JS was created to work together with HTML and requires a web browser in order to run.  JS source code can easily be seen when you view the source code of a JS-enabled webpage</p></li>
			</ul>
			<li><p>Scripting Language</p></li>
			<ul>
				<li><p>Scripting languages are treated like programming languages but they are normally created to perform simple repetitive tasks. They do not come with their own interfaces but they provide instructions to other programs on what to do. JS does not contain the program on how the whole webpage looks like, we can use it to change certain elements of the webpage through the browser</p></li>
			</ul>
			<li><p>Client-Side Scripting</p></li>
			<ul>
				<li><p>There are basically two kinds of scripting for the web-client-side and server-side. The key difference between these scripts is the location to which they are executed. A server-side script is executed on the actual server machine that hosts the webpage while a client-side script is executed on the very machine that you are using.</p></li>
			</ul>
			<li><p>Object-Oriented Programming</p></li>
			<ul>
				<li><p>Another advantage of JS is that it presents to you many things as objects and lets you easily manipulate them. OOP is a programming style that treats every element in a system as an object. In OOP, each object has its associated functions called methods things that objects know how to do.</p></li>
			</ul>
		</ol>
		<h1> The Key in Understanding JavaScript </h1>
		<ol>
			<li><p>Learn at an optimal pace and do a lot of practice.</p></li>
			<li><p>Understand the concepts of objects</p>
			<ul>
				<li><p><b>Objects</b> - Are items that exist in the browser. The browser window, the page itself, the status bar, and the date and time stored in the browser are all objects.</p></li>
				<li><p><b>Methods</b> - Are actions to be performed on or by an object. Methods also represent functions that are designed for specific purpose like doing math or parsing strings.</p></li>
				<li><p><b>Properties</b> - Are an existing subsection of an object. It is also important to learn these basic concepts in programming</p></li>
				<li><p><b>Parameter </b> -  data or other objects which describe the characteristics of an object.</p></li>
				<li><p><b>Type</b> - type of variable such as integer, string, floating point or Boolean</p></li>
				<li><p><b>Type conversion</b> -  the act of converting a variable from one type to another</p></li>
				<li><p><b>Event</b> - something which happens or which is done such as loading a page, holding a mouse over a link, or clicking a link. You can actually write scripts and set them to execute when a specific event occurs.</p></li>
			</ul>
			</li>
		</ol>
		<p>A script is a set of computer instructions or commands that puts together or connects existing components to accomplish a new related task. JS is a powerful scripting language used to create web functionalities. A text editor and a web browser are the tools needed in Jscripting. The basic components of JS are objects, methods and properties.</p>
		<h1>Commonly Used Properties and Methods</h1>
		<ul>
			<li><p><b>Window</b> - The window object is the main object. Many of the window-object properties are objects in their own right such as document, frame, and location.  There is no need to write the object name, window, since it is understood.</p></li>
			<li><p>Sample:</p></li>
			<ul>
				<li><p>Location - to go to a new location</p></li>
				<li><p>Open - to open a new window</p></li>
				<li><p>setTimeout - to set a time interval before activating an event</p></li>
			</ul>
			<li><p><b>document</b> - The document object is derived from the window object. It is the container for all HTML, HEAD and BODY objects associated within the HTML tags of the HTML documents. You need to write the object name to use these methods.</p></li>
			<li><p>Sample:</p></li>
			<ul>
				<li><p>fgColor - to set the document foreground color</p></li>
				<li><p>cookie - to read the information stored in the cookie text file</p></li>
				<li><p>write -to display a message</p></li>
				<li><p>lastModified - to display the date it was last modified.</p></li>
			</ul>
			<li><p><b>Math</b> - the math object provides the capability to perform math operations</p></li>
			<ul>
				<li><p>PI - has the value of PI</p></li>
				<li><p>pow (a,b) - takes the value of a to the power of b</p></li>
				<li><p>max (a,b) -returns the larger value between a and b</p></li>
				<li><p>min (a,b) -returns the smaller value between a and b</p></li>
			</ul>
			<li><p><b>Navigator</b> - the navigator object determines which browser is running.</p></li>
			<ul>
				<li><p>appName - to determine the browser&apos;s code name</p></li>
				<li><p>appVersion - to determine the browser&apos;s release version</p></li>
				<li><p>cookieEnabled - to determine whether cookies are enabled or not</p></li>
				<li><p>platform - a description of the operation system.</p></li>
			</ul>
		</ul>
		<h1> JavaScript Objects, Methods, Properties and Events </h1>
		<img src="ictq4\\lesson3a.jpg" class="example">
		<ul>
			<h1> Structure of the code snippet </h1>
			<ul>
				<li><p>The JS is placed within the &lt;head&gt; tags of HTML, meaning JS is executed even before the &lt;body&gt; tags.</p></li>
				<li><p> Line 3-5, these are script tags that tell the browser that the lines of code within those tags are scripts. After closing the &lt;script&gt; tag, the browser will proceed with parsing normal HTML until it encounters another non-HTML script or instructions</p></li>
				<li><p><b>Parsing</b> - the process of analyzing data (usually a string of text) and converting it into a structured, internal format that the JavaScript engine can understand, manipulate, and execute.</p>
				<ul>
					<li><p> Line 4 holds the actual JS code. The &#750;document&#750; object refers to the &lt;body&gt; tags of HTML while &#750;write&#750; is a method of the document object. This means that you want JS to write the contents between the parenthesis and quotes to the HTML document</p></li>
				</ul>
				</li>
			</ul>
		</ul>
		<h1> Syntax Guides </h1>
		<ul>
			<li><p>Rules in JavaScript Syntax</p>
			<ul>
				<li><p>In order for the HTML document to identify JS as the scripting language used, it is necessary to include language=&#750;JavaScript&#750; in the opening &lt;script&gt; tag</p></li>
				<li><p>The syntax for manipulating an object by using a method or property is always Object.Method() or Object.Property(). The parentheses () are called the instance</p></li>
				<li><p>JS is case-sensitive. For example&colon; if you called the  function warning() but you typed Warning(), you&apos;ll encounter and error since the entry is incorrect. Another example is the bgColor property.  If you don&apos;t type it like this, you&apos;ll get an undefined result</p></li>
				<li><p>JS is processed from top to bottom.  The 1<sup>st</sup> one on the page is processed first while the script at the end is processed last.  We can pre-load the script by placing it within the &lt;head&gt; tags.  Elements of this script can be executed before any other script embedded in the HTML. </p></li>
				<li><p>Quotes are used to tell the browser what is to be displayed exactly as it is written in the script. Hence, don&apos;t place variables inside quotes; otherwise, the variable name will be displayed instead of the value assigned</p></li>
				<li><p>Quotes may be single quote (&apos;) or double quote (&#750;). Remember to use them consistently, especially when embedded within each other</p></li>
				<li><p>You can add comments using &#750;//&#750; for a single line of comment or you may enclose your multiple-line comment between &#750;/*&#750; and &#750;*/&#750;. </p></li>
				<li><p>Use the symbol &plus; to concatenate a string</p></li>
				<li><p>Statements may contain a semicolon at the end of them. However, this is not necessary in JS unless there are multiple statements in one line. In this case, you must separate multiple statements in a single line by using semicolon. But it is always good programming practice to use a semicolon to end a statement.</p></li>
			</ul>
			</li>
		</ul>
		<h1> JavaScript Variables </h1>
		<ul>
			<li><p><b>Variable</b> - is a symbolic representation denoting a quantity or expression. It represents a place where a quantity can be stored. It is a value hat has the property being associated with another value. Container that contains a value, which can change as required  </p></li>
		</ul>
		<h1> Data Types </h1>
		<ul>
			<li><p>Some of the data types that a JS variable may contain:</p>
			<ul>
				<li><p>Character - any signle character or symbol such as x, &apos;&commat;&apos;, &apos;y&apos;, etc.</p></li>
				<li><p>String - a series of combination of characters like &#750;somevariable&#750; or &#750;64kgold&#750;</p></li>
				<li><p>Integer -number of the set Z = &#123;…, -2, -1, 0, 1, 2,…&#125;</p></li>
				<li><p>Float (or double) - any decimal number like 97.1 or -97.1</p></li>
				<li><p>Boolean - truth values.  This can either be TRUE or FALSE</p></li>
				<li><p>Function - set of instructions or arguments</p></li>
				<li><p>Object -items that exist in the browser that once can manipulate</p></li>
				<li><p> Array - a type of object that contains a set of values that are mapped into keys</p></li>
				<li><p>Undefined - a variable that has not been given a value yet</p></li>
				<li><p>Null - a variable that has been defined but has been assigned the value of null</p></li>
			</ul>
			</li>
		</ul>
		<h1> Declaring Variables </h1>
		<ul>
			<li><p>Variables are declared with a var statement. It is always good practice to pre-define your variables using var. If you declare a variable inside a function, it can be accessed anywhere within the function.</p></li>
			<li><p>Examples in declaring a variable:</p>
			<ul>
				<li><p>//declaring one variable - var firstname</p></li>
				<li><p>//declaring several variables -var firstname, lastname; </p></li>
				<li><p>//declaring one variable  and assigning a value - var firstname=&#750;Crispin&#750;;</p></li>
				<li><p>declaring several variables and assigning a value -var firstname=&#750;Basilio&#750;, lastname=&#750;Santiago&#750;</p></li>
			</ul>
			</li>
		</ul>
		<h1> Rules for Naming Variables </h1>
		<ul>
			<li><p>Variables can contain any letter of the alphabet, digits 0-9, and the underscore character</p></li>
			<li><p>There should be no spaces in between characters</p></li>
			<li><p>It should not have punctuation characters (ex.  Comma, full stop, etc.)</p></li>
			<li><p>The first character of a variable name cannot be a digit</p></li>
			<li><p>Variable names are case-sensitive. Hence firstname and Firstname are two different variables</p></li>
		</ul>
	</div>
	`,
	ictQ44: `
	<div class="main">
		<h1> What are Events </h1>
		<ul>
			<li><p>Events are actions that are triggered either by mouse click, function calls, keyboard strokes, loading of images, submitting an HTML form, etc. Events are usually used in connection with functions. Functions will not work without a force that will trigger it</p></li>
		</ul>
		<h1> Event Triggers </h1>
		<ul>
			<li><p>onabort - The loading of an image is interrupted.</p></li>
			<li><p>onblur - An element loses focus.</p></li>
			<li><p>onchange - The user changes the content of a field.</p></li>
			<li><p>onclick - Mouse click of an object.</p></li>
			<li><p>ondblclick - Double mouse click on an object.</p></li>
			<li><p>onerror - An error occurs when loading a document or image.</p></li>
			<li><p>onfocus - An element gets focus.</p></li>
			<li><p>onkeydown - A keyboard key is pressed.</p></li>
			<li><p>onkeypress - A keyboard key is held down.</p></li>
			<li><p>onkeyup - A keyboard key is released.</p></li>
			<li><p>onload - A page or image is finished loading.</p></li>
			<li><p>onmousedown - A mouse button is pressed.</p></li>
			<li><p>onmousemove - A mouse is moved.</p></li>
			<li><p>onmouseout - The mouse is moved off an element.</p></li>
			<li><p>onmouseover - The mouse is moved over an element.</p></li>
			<li><p>onmouseup - A mouse button is pressed.</p></li>
			<li><p>onreset - The reset button is clicked.</p></li>
			<li><p>onresize - A window or frame is resized.</p></li>
			<li><p>onselect - Text is selected.</p></li>
			<li><p>onsubmit - The submit button is clicked.</p></li>
			<li><p>onunload - The user exits the page.</p></li>
		</ul>
		<br>
		<ul>
			<li><p><b>onfocus, onblur and onchange</b></p>
			<ul>
				<li><p>These attributes are often used with the validation of fields in a form.</p></li>
			</ul>
			</li>
			<li><p><b>onsubmit</b></p>
			<ul>
				<li><p>This attribute is used to validate all fields in the form before submitting it.</p></li>
				<li><p></p></li>
			</ul>
			</li>
			<li><p><b>onmouseover and onmouseout</b></p>
			<ul>
				<li><p>These attributes are usually used for animation purposes. Take for example, a button or link in a Web page. When the mouse is over it, it will display a different image, however, when you remove the mouse, the button is set back to what it was.</p></li>
			</ul>
			</li>
			<li><p><b>onclick</b></p>
			<ul>
				<li><p>This is usually used to connect you to another webpage or to trigger an event call. Take for example, a button in a Web page. If that button is pressed, it will trigger a function that will call a popup button.</p></li>
			</ul>
			</li>
			<li><p><b>onload and onunload</b></p>
			<ul>
				<li><p>The onload and onunload events are triggered when a user enters or exits a Web page. The onload event can be used to check the Web browser version type and version. The onload and onunload events can also be used to store and retrieve cookies. A cookie is a message given to a Web browser</p></li>
			</ul>
			</li>
		</ul>
		<h1> What are Popup Boxes </h1>
		<ul>
			<li><p>Popup boxes are those windows that pop-out of your screen. They could be before a page is fully loaded, effect of an event on a page or before leaving a page. JavaScript has three kinds of popup boxes; alert box, user-input prompt box and confirm box. These popup boxes can be useful in warning the user, gathering user input or simply to verify something</p></li>
			<ul>
				<li><p><b>Alert Box</b></p>
				<ul>
				<li><p>This is usually used when you want to make sure that the user reads your message such as warning or a greeting.</p></li>
				<li><p>Syntax: alert(&#750;message&#750;);</p></li>
				</ul>
				</li>
				<li><p><b>User-Input Prompt Box</b></p>
				<ul>
				<li><p>This is usually used when you want data to be prompted first before the user can enter a page. The user will have to choose either &#750;ok&#750; or &#750;cancel&#750; to continue. If the user chooses &#750;ok&#750;, the prompt box will return the encoded value, else, it will return null</p></li>
				<li><p>Syntax: prompt(&#750;message&#750;,&#750;defaultvalue&#750;);</p></li>
				</ul>
				</li>
				<li><p><b>Confirm Box</b></p>
				<ul>
				<li><p>This is usually used when you want the user to verify or accept something. The user will have to choose either &#750;ok&#750; and &#750;cancel&#750;.  If &#750;ok&#750; was chosen, the confirm box will return true; else, it will return false.</p></li>
				<li><p>Syntax: confirm(&#750;message&#750;)</p></li>
				</ul>
				</li>
			</ul>
		</ul>
		<h1> What is a Variable? </h1>
		<ul>
			<li><p>A variable is a temporary storage of values and expressions. Expressions are formulae that use mathematical symbols and numbers or a way to assign values to a variable.  For example, x&#61;1&plus;3 is an expression and the value o&#61;f x will hold the sum of one plus three which is four</p></li>
			<li><p>In declaring a variable, there are certain rules to follow:</p>
			<ul>
				<li><p>Variable names are case-sensitive - an uppercased variable such as &#750;X&#750; is different from a lowercase variable &#750;x&#750;</p></li>
				<li><p> Variable names must begin with a letter or underscore (&#750;_&#750;)</p></li>
				<li><p> The rest of the name must consist of letters, numbers or underscores.</p></li>
				<li><p> Avoid naming variables using reserved words. Reserved words are words reserved by JavaScript for it own use.</p></li>
			</ul>
			</li>
			<li><p>Take note: if you do not declare a variable and you give the variable a value, the variable will automatically be declared</p>
			<ul>
				<li><p>Variables can hold numbers, expressions or string literals.</p></li>
				<li><p>String literals are text enclosed in pairs of quotation marks. Numeric digits are inside the quotation marks will be considered as as string and will lose then its numeric value</p></li>
				<li><p>If the characters are not enclosed in quotation marks, JS might interpret the characters as an object or a function</p></li>
				<li><p>To declare a variable, use the keyword <b>var</b> then the variable name equal to its value/expression</p></li>
				<li><p>JS variables are loosely typed, so data types are not required to be defined in advance. This feature is an advantage since it can adapt its data type from the kind of value assigned to it. It can be an integer, string Boolean, etc. It can change during runtime; however, be careful in assigning values because it you make a mistake, it will be hard to detect such kind of errors</p></li>
				<li><p>Boolean is a fundamental data type in programming that represents one of two possible values: true or false. It is used to represent logical truth values, acting as the foundation for decision-making in code, such as determining which path a program should follow.</p></li>
				<li><p>JS uses the same arithmetic operations as in most programming languages, like C.  An arithmetic operator is a symbol used to tell the expression what kind of operation will be done</p>
				<ul>
					<li><p>&plus; - Addition</p></li>
					<li><p>&minus; - Subrtraction</p></li>
					<li><p>&ast; - Multiplication</p></li>
					<li><p>/ - Division</p></li>
					<li><p>&percnt; - Modulus</p></li>
					<li><p>&plus;&plus; - Increment by 1</p></li>
					<li><p>&minus;&minus; - Decrement by 1</p></li>
					<br>
					<li><p> Modulus is performed by the remainder operator (&percnt;), which calculates the remainder after one number (the dividend) is divided by another (the divisor)</p></li>
					<li><p>The addition symbol (&apos;&plus;&apos;) can also be used to add strings or text values together - this is called concatenation.  However, if you add a string and a numerical value, the result will still be a string</p></li>
					<li><p>Remember the order of precedence when dealing with expressions.  Innermost parentheses come first, then the outer parentheses are evaluated followed by multiplication, division or modulus operation.  The addition or subtraction symbol is taken into consideration last</p></li>
					<li><p>The &plus;&plus; and &minus; operator can be used in several different ways; however, the answer will depend on how you use it. If you use it independently, x&plus;&plus;; it will have the same result as &plus;&plus;x.  If these operators are used in a formula or an expression, they will have an impact on the result.  Avoid using these operators if you do not fully understand how to use them</p></li>
				</ul>
				</li>
			</ul>
			</li>
		</ul>
		<h1> What are Comparison Statements </h1>
		<ul>
			<li><p>Comparison statements are used to evaluate the quality or the difference between variables or values. </p></li>
			<ul>
				<li><p>== - Returns true if x is equal to y</p></li>
				<li><p>=== - Returns true if x is equal to y and the data are of the same type</p></li>
				<li><p>!= - Returns true if x is not equal to y</p></li>
				<li><p>!== - Returns true if x is not equal to y and/or the data are not of the same type.</p></li>
				<li><p>&gt; - Returns true if x is greater than y</p></li>
				<li><p>&lt; - Returns true if x is less than y</p></li>
				<li><p>&gt;= - Returns true if x is greater than or equal to y</p></li>
				<li><p>&lt;= - Returns true if x is less than or equal to y</p></li>
			</ul>
		</ul>
		<h1> Logical Operators </h1>
		<ul>
			<li><p>Logical operators are used to determine the logic between expressions, variables, or values. It is usually used by two or more expressions to satisfy the needed conditions.</p>
			<ul>
				<li><p>&amp;&amp; - And - Returns true if both expressions are true</p></li>
				<li><p>&#124;&#124; - Or - Returns true if at least one of the expression is true</p></li>
				<li><p>! - Not - Returns true if x is not equal to y</p></li>
			</ul>
			</li>
		</ul>
		<p> JS also has its own conditional operator that automatically assigns a value depending on the result of the condition </p>
		<ul>
			<li><p>variablename=(condition)?value1:value2</p></li>
		</ul>
		<p> Conditional statements are used to perform different operations based on the set conditions. There are different kinds of conditional statements. These are:</p>
		<ul>
			<li><p>if - used to check if a specified condition is true.</p></li>
			<li><p>if-else - used to check if the condition is true and performs an action if the condition is false.</p></li>
			<li><p>if-else if.else - used to check if one or more blocks of code can be executed.</p></li>
			<li><p>switch - used if you want to select one of many blocks of code to be executed</p></li>
		</ul>
		<p><b>Note:</b>The else if statement executes codes other than the prior conditions. The else statement will be the last choice - that is, if there are no conditions that were met, it will fall under the else block. The JS Switch statement function like the if statement. It is a conditional statement; however, only one variable is taken into consideration and bears the condition. You can also use it to select one or more blocks of code to be executed. To prevent it from continuously executing other blocks of code after it, you must use the break statement. </p>
	</div>
	`,
	};

	const apLessons = {
	apLesson1: `
	<div class="main">
		<h1>Pambansang Kaunlaran</h1>

		<p><b>Pambansang Kaunlaran</b> - Isang kalagayan ng bansa kung saan ang mga mamamayan ay nakararanas ng pagbuti ng ekonomiya, pamumuhay, at kalidad ng buhay.</p>

		<p><b>Mga Konsepto ng Kaunlaran</b></p>
		<ul>
			<li><p><b>Pagbabago</b> - Proseso ng pag-iiba o pag-unlad sa lipunan at ekonomiya.</p></li>
			<li><p><b>Pag-unlad</b> -Pag-angat mula sa mababang antas tungo sa mas mataas na kalidad ng pamumuhay.</p></li>
			<li><p><b>Pagsulong</b> - Pag-usad tungo sa mga layunin at pagpapahusay ng kakayahan at kaalaman.</p></li>
			<li><p><b>Ebolusyon</b> - Mabagal ngunit tuloy-tuloy na pagbabago sa loob ng mahabang panahon.</p></li>
		</ul>

		<p><b>Dalawang Konsepto ng Pag-unlad (Todaro & Smith)</b></p>
		<ul>
			<li><p><b>Tradisyunal</b> - Pagtaas ng income per capita o kita ng bawat mamamayan.</p></li>
			<li><p><b>Makabago</b> - Malawakang pagbabago sa sistemang panlipunan at pagpapabuti ng kalidad ng buhay.</p></li>
		</ul>

		<p><b>Mga Salik ng Pag-unlad ng Ekonomiya</b></p>
		<ul>
			<li><p>Likas na Yaman</p></li>
			<li><p>Yamang-tao</p></li>
			<li><p>Kapital</p></li>
			<li><p>Teknolohiya at Inobasyon</p></li>
		</ul>

		<p><b>Mga Palatandaan ng Kaunlaran</b></p>
		<ul>
			<li><p>Maayos na sistemang panlipunan</p></li>
			<li><p>Pagkakaroon ng trabaho at sapat na kita</p></li>
			<li><p>Sapat na serbisyong panlipunan</p></li>
			<li><p>Katarungang panlipunan</p></li>
		</ul>

		<p><b>Sukatan ng Kaunlaran</b></p>
		<ul>
			<li><p><b>GDP at GNP</b></p></li>
			<li><p><b>Human Development Index (HDI)</b> - sumusukat sa kalusugan, edukasyon, at pamumuhay.</p></li>
		</ul>

		<p><b>Gampanin ng Mamamayan</b></p>
		<ul>
			<li><p>Pagsunod sa batas</p></li>
			<li><p>Pagbabayad ng buwis</p></li>
			<li><p>Pagtangkilik sa produktong Pilipino</p></li>
			<li><p>Pakikilahok sa mga gawaing pangkomunidad</p></li>
			<li><p>Responsableng pagboto</p></li>
		</ul>
		<div class="horizontal">
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson1a.jpg">
			</div>
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson1b.jpg">
			</div>
		</div>
	</div>
	`,
	apLesson2: `
	<div class="main">
		<h1>Sektor ng Agrikultura</h1>

		<p><b>Agrikultura</b> - Isang agham at sining ng pagtatanim ng halaman at pag-aalaga ng hayop upang makalikha ng pagkain at iba pang produkto.</p>

		<p><b>Mga Gawain sa Agrikultura</b></p>
		<ul>
			<li><p><b>Pagsasaka</b> - Produksyon ng mga pananim tulad ng palay, mais, niyog, saging, at pinya</p></li>
			<li><p><b>Pangingisda</b> - Pagkuha ng yamang-tubig mula sa dagat, ilog, at lawa</p></li>
			<li><p><b>Paghahayupan</b> - Pag-aalaga ng hayop para sa karne, gatas, itlog, at iba pang produkto</p></li>
			<li><p><b>Paggugubat</b> - Paglinang at pangangalaga ng kagubatan at yamang kahoy</p></li>
		</ul>

		<p><b>Kahalagahan ng Agrikultura</b></p>
		<ul>
			<li><p>Pinagmumulan ng pagkain ng bansa</p></li>
			<li><p>Nagbibigay ng trabaho sa maraming Pilipino</p></li>
			<li><p>Pinagkukunan ng hilaw na materyales para sa industriya</p></li>
			<li><p>Nagpapasok ng kita at dolyar sa bansa</p></li>
		</ul>

		<p><b>Mga Suliranin sa Agrikultura</b></p>
		<ul>
			<li><p>Pagliit ng lupang sakahan</p></li>
			<li><p>Kakulangan ng makabagong teknolohiya</p></li>
			<li><p>Kakulangan sa pasilidad at imprastraktura</p></li>
			<li><p>Polusyon at climate change</p></li>
			<li><p>Kahirapan ng mga magsasaka at mangingisda</p></li>
		</ul>

		<p><b>Mga Ahensya ng Pamahalaan</b></p>
		<ul>
			<li><p><b>Department of Agriculture (DA)</b></p></li>
			<li><p><b>Bureau of Fisheries and Aquatic Resources (BFAR)</b></p></li>
			<li><p><b>Bureau of Animal Industry (BAI)</b></p></li>
			<li><p><b>Ecosystem Research and Development Bureau (ERDB)</b></p></li>
		</ul>
		<div class="horizontal">
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson2a.jpg">
			</div>
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson2b.jpg">
			</div>
		</div>
	</div>
	`,
	apLesson3: `
	<div class="main">
		<h1>Sektor ng Industriya</h1>

		<p><b>Industriya</b> - Pagproseso ng hilaw na materyal upang makabuo ng produktong ginagamit ng tao. Ito ang sektor na naglilikha ng mga kalakal mula sa mga pinagkukunang yaman.</p>

		<p><b>Mga Sub-sektor ng Industriya</b></p>
		<ul>
			<li><p><b>Pagmimina</b> - Pagkuha at pagproseso ng yamang mineral (metal, enerhiya) na nagbibigay ng kita sa bansa.</p></li>
			<li><p><b>Pagmamanupaktura</b> - Paggawa ng produkto sa pamamagitan ng makina o manual labor na nagdudulot ng pisikal/kemikal na pagbabago.</p></li>
			<li><p><b>Konstruksyon</b> - Pagtatayo ng gusali, imprastraktura, at land improvements.</p></li>
			<li><p><b>Utilities</b> - Pagtugon sa pangunahing pangangailangan tulad ng tubig, kuryente, at gas.</p></li>
		</ul>

		<p><b>Kahalagahan ng Industriya</b></p>
		<ul>
			<li><p>Nagkakaloob ng hanapbuhay sa maraming Pilipino at nagpapasok ng dolyar sa bansa.</p></li>
			<li><p>Gumagawa ng intermediate products (mga materyales na ginagamit sa paggawa ng iba pang produkto).</p></li>
			<li><p>Tumatanggap ng hilaw na materyales mula sa agrikultura at nagkakaroon ng malapit na ugnayan sa sektor ng paglilingkod.</p></li>
		</ul>
		<div class="horizontal">
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson3a.jpg">
			</div>
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson3b.jpg">
			</div>
		</div>
	</div>
	`,
	apLesson4: `
	<div class="main">
		<h1>Sektor ng Paglilingkod</h1>

		<p><b>Sektor ng Paglilingkod</b> - Kilala bilang tersiaryang sektor na umaalalay sa produksyon, distribusyon, kalakalan, at pagkonsumo ng mga produkto. Ito ay nagkakaloob ng serbisyo sa loob at labas ng bansa.</p>

		<p><b>Mga Uri ng Serbisyo</b></p>
		<ul>
			<li><p><b>Pormal na Sektor</b> - Transportasyon, komunikasyon, kalakalan, pananalapi, real estate, at serbisyong pampubliko/pribado.</p></li>
			<li><p><b>Mga Ahensyang Tumutulong</b> - DOLE, OWWA, POEA, TESDA, PRC, at CHED na nangangalaga sa kapakanan ng mga manggagawa.</p></li>
			<li><p><b>Karapatan ng Manggagawa</b> - Holiday pay, overtime pay, night shift differential, maternity/paternity leave, at 13th month pay.</p></li>
		</ul>

		<p><b>Kahalagahan ng Sektor ng Paglilingkod</b></p>
		<ul>
			<li><p>Tinitiyak na makakarating sa mga mamimili ang mga produkto mula sa sakahan o pagawaan.</p></li>
			<li><p>Nagbibigay ng trabaho sa mga mamamayan at nagpapataas ng GDP ng bansa.</p></li>
			<li><p>Nagpapasok ng dolyar sa bansa at nagsisilbing tagasuporta sa iba pang sektor ng ekonomiya.</p></li>
		</ul>
		<div class="horizontal">
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson4a.jpg">
			</div>
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson4b.jpg">
			</div>
		</div>
	</div>
	`,
	apLesson5: `
	<div class="main">
		<h1>Impormal na Sektor</h1>

		<p><b>Impormal na Sektor</b> - Kilala rin bilang Underground Economy, ito ay sektor na walang pormal na dokumento at hindi nakarehistro sa pamahalaan. Ang kita nito ay hindi isinasama sa GDP ng bansa.</p>

		<p><b>Katangian at Halimbawa</b></p>
		<ul>
			<li><p><b>Katangian</b> - Hindi nagbabayad ng buwis, walang legal na balangkas, at maiiwasan ang bureaucratic red tape.</p></li>
			<li><p><b>Halimbawa</b> - Nagtitinda sa kalsada, pedicab driver, karpintero, hindi rehistradong pampublikong sasakyan, at sari-sari stores.</p></li>
			<li><p><b>Dahilan ng Pagpasok</b> - Makaiwas sa buwis, mababang kapital na kailangan, at paglaban sa kahirapan.</p></li>
		</ul>

		<p><b>Kahalagahan at Epekto</b></p>
		<ul>
			<li><p>Sinasalo ang mga mamamayang hindi makapasok sa regular na empleyo at nagbibigay ng murang kalakal.</p></li>
			<li><p>Nagdudulot ng pagbaba ng nalilikom na buwis at banta sa kapakanan ng mga mamimili.</p></li>
			<li><p>Programang tumutulong: DILP, SEA-K, 4Ps, at R.A. 8425 (Social Reform and Poverty Alleviation Act).</p></li>
		</ul>
		<div class="horizontal">
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson5a.jpg">
			</div>
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson5b.jpg">
			</div>
		</div>
	</div>
	`,
	apLesson6: `
	<div class="main">
		<h1>Panlabas na Sektor</h1>

		<p><b>Kalakalang Panlabas</b> - Palitan ng produkto at serbisyo sa pagitan ng mga bansa. Walang bansa ang makatutugon sa lahat ng pangangailangan kaya't kailangan ang pakikipagkalakalan sa ibang bansa.</p>

		<p><b>Pangunahing Konsepto</b></p>
		<ul>
			<li><p><b>Export at Import</b> - Export ay pagluluwas ng produkto; Import ay pag-aangkat mula sa ibang bansa. Trade Deficit (import &gt; export) at Trade Surplus (import &lt; export).</p></li>
			<li><p><b>Comparative Advantage</b> - Espesyalisasyon sa paggawa ng produktong mas efficient gawin kumpara sa ibang bansa.</p></li>
			<li><p><b>Patakaran</b> - Taripa (buwis sa import), Kota (limitasyon sa dami), at Subsidy (tulong ng gobyerno sa lokal na produkto).</p></li>
		</ul>

		<p><b>Mga Samahang Pandaigdigang Pang-ekonomiko</b></p>
		<ul>
			<li><p><b>WTO</b> - Namamahala sa global trading system at pagsusulong ng malayang kalakalan.</p></li>
			<li><p><b>APEC</b> - Isinusulong ang kaunlarang pang-ekonomiya sa Asia-Pacific region.</p></li>
			<li><p><b>ASEAN</b> - Malayang kalakalan sa Southeast Asia sa pamamagitan ng AFTA at CEPT.</p></li>
		</ul>
		<div class="horizontal">
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson6a.jpg">
			</div>
			<div class="main">
				<img class="exampleAP" src="apq4\\lesson6b.jpg">
			</div>
		</div>
	</div>
	`,
};

function loadICTLessonQ3(lesson) {
			const output = document.getElementById('ict-lesson-outputQ3');
			output.classList.remove('show');
			void output.offsetWidth;
			output.innerHTML = ictLessonsQ3[lesson] || "<p>Lesson not found.</p>";
			output.classList.add('show');
			localStorage.setItem('lastSection', 'ict');
			localStorage.setItem('lastLesson', lesson);
			localStorage.setItem('lessonType', 'ict');
		}
		
function loadICTLessonQ4(lesson) {
			const output = document.getElementById('ict-lessons-Q4');
			output.classList.remove('show');
			void output.offsetWidth;
			output.innerHTML = ictLessonsQ4[lesson] || "<p>Lesson not found.</p>";
			output.classList.add('show');
			localStorage.setItem('lastSection', 'ict');
			localStorage.setItem('lastLesson', lesson);
			localStorage.setItem('lessonType', 'ict');
		}
		
function loadAPLesson(lesson) {
			const output = document.getElementById('ap-lesson-output');
			output.classList.remove('show');
			void output.offsetWidth;
			output.innerHTML = apLessons[lesson] || "<p>Lesson not found.</p>";
			output.classList.add('show');
			localStorage.setItem('lastSection', 'ap');
			localStorage.setItem('lastLesson', lesson);
			localStorage.setItem('lessonType', 'ap');
		}
		

		window.addEventListener('DOMContentLoaded', () => {
		const lastSection = localStorage.getItem('lastSection');
		const lastLesson = localStorage.getItem('lastLesson');
		const lessonType = localStorage.getItem('lessonType');
		

		if (lastSection) showSection(lastSection);

		if (lessonType === 'ictQ3' && lastLesson) {
		loadICTLesson(lastLesson);
		} else if (lessonType === 'ap' && lastLesson) {
		loadAPLesson(lastLesson);
		} else if (lessonType === 'events') {
		showSection('events');
		} else if (lessonType === 'noli') {
		showSection('noli');
		} else if (lessonType === 'ictQ4') {
		showSection('ictQ4');
		}
});